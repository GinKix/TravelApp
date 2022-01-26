export interface IRegister {
  name: string;
  password: string;
}

export interface IRegisterRetrieve {
  createdAt: Date;
  href: string;
  id: string;
  name: string;
  tripsCount: number;
  updatedAt: Date;
}
