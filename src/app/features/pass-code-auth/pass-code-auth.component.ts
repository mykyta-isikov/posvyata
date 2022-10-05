import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "./auth.service";

interface Todo {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

@Component({
  selector: 'app-pass-code-auth',
  templateUrl: './pass-code-auth.component.html',
  styleUrls: ['./pass-code-auth.component.css']
})
export class PassCodeAuthComponent implements OnInit {
  myForm!: FormGroup;
  comment: string = '';
  submitBtnDisabled: boolean = false;
  apiResult: Todo[] = [];

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      code: ['', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(4),
        Validators.pattern(/^\d*$/)
      ]],
      group: ['', [
        Validators.required,
        Validators.minLength(1)
      ]]
    });
  }

  submitBtnClick() {
    this.myForm.controls['code'].disable();
    this.myForm.controls['group'].disable();
    this.submitBtnDisabled = true;
    this.comment = 'Submitted successfully!';
    this.authService.fetchTodo().subscribe((res) => {
      this.apiResult = res[0] as Todo[];
    });
  }

}
