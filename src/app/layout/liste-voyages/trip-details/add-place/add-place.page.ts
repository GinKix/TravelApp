import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-place',
  templateUrl: './add-place.page.html',
  styleUrls: ['./add-place.page.scss'],
})
export class AddPlacePage implements OnInit {
  createPlaceForm: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.createPlaceForm = this.formBuilder.group({
      title: [null, [Validators.required]],
      description: [null, [Validators.required]],
      pictureUrl: [null, null],
    });
  }

  ngOnInit(): void {}
}
