import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ReplaySubject, Observable, from } from "rxjs";
import { map, delayWhen, tap } from "rxjs/operators";

import { AuthResponse } from "../models/auth-response";
import { User } from "../models/user";
import { AuthRequest } from "../models/auth-request";

import { Storage } from "@ionic/storage";

import { environment } from "src/environments/environment";
import { IRegister, IRegisterRetrieve } from "../models/iregister";
import { Update } from "../models/update";

/**
 * Authentication service for login/logout.
 */
@Injectable({ providedIn: "root" })
export class AuthService {
  #auth$: ReplaySubject<AuthResponse | undefined>;
  #register$: ReplaySubject<AuthResponse | undefined>;
  #update$: ReplaySubject<Update | undefined>;

  

  constructor(private http: HttpClient, private storage: Storage) {
    this.#auth$ = new ReplaySubject(1);
    this.storage.get('auth').then((auth) => {
      // Emit the loaded value into the observable stream
      this.#auth$.next(auth);
    });

    this.#register$ = new ReplaySubject(1);
    this.storage.get('users').then((register) => {
      // Emit the loaded value into the observable stream
      this.#register$.next(register);
    });

    this.#update$ = new ReplaySubject(1);
    this.storage.get('id').then((update) => {
      // Emit the loaded value into the observable stream
      this.#update$.next(update);
    });

    
  }

  private saveAuth$(auth: AuthResponse): Observable<void> {
    return from(this.storage.set('auth', auth));
  }

  private saveRegister$(register: AuthResponse): Observable<void> {
    return from(this.storage.set('users', register));
  }

  private saveUpdate$(update: Update): Observable<void> {
    return from(this.storage.set('id', update));
  }

  isAuthenticated$(): Observable<boolean> {
    return this.#auth$.pipe(map((auth) => Boolean(auth)));
  }

  getUser$(): Observable<User> {
    return this.#auth$.pipe(map((auth) => auth?.user));
  }

  getToken$(): Observable<string> {
    return this.#auth$.pipe(map((auth) => auth?.token));
  }

  getId$(): Observable<string> {
    return this.#update$.pipe(map((update) => update?.id));
  }

  register(iregister: IRegister): Observable<User> {
    const registerUrl = `${environment.apiUrl}/users`;
    return this.http.post<AuthResponse>(registerUrl, iregister).pipe(
      delayWhen((register) => this.saveRegister$(register)),
      map((register) => {
        this.#register$.next(register);
        console.log(`User ${register.user.name} registered`);
        return register.user;
      })
    );
  }

  logIn$(authRequest: AuthRequest): Observable<User> {
    const authUrl = `${environment.apiUrl}auth`;
    return this.http.post<AuthResponse>(authUrl, authRequest).pipe(
      // Ralentir le flux observable pendant l'authentification
      delayWhen((auth) => this.saveAuth$(auth)),
      map((auth) => {
        this.#auth$.next(auth);
        console.log(`User ${auth.user.name} logged in`);
        return auth.user;
      })
    );
  }

  update(update: Update): Observable<String> {
    //const userId = this.storage.get(update.id);
    //var userId = this.storage.get('id'),
    //  toString = userId.toString();
    const updateUrl = `${environment.apiUrl}users/${update.id}`;    
    
    return this.http.patch<Update>(updateUrl, update).pipe(
      delayWhen((update) => this.saveUpdate$(update)),
      map((update) => {
        this.#update$.next(update);
        console.log(`User ${update.name} updated`);
        return update.name;
      })
    );
  }

  logOut(): void {
    this.#auth$.next(null);
    // Remove the stored authentication from storage when logging out
    this.storage.remove('auth');
    console.log("User logged out");
  }
}