import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { Department } from '../models/department.model'
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})

export class CreateEmployeeComponent implements OnInit {

  previewPhoto = false;

  employee: Employee = {

      id: null,
      name: null,
      gender: null,
      email: null,
      phoneNumber: null,
      contactPreference: null,
      dateOfBirth: null,
      department: null,
      isActive: null,
      photoPath: null,

  };

  departments: Department[] = [
    { id: 1, name: 'Help Desk' },
    { id: 2, name: 'HR' },
    { id: 3, name: 'IT' },
    { id: 4, name: 'Payroll' },
    { id: 5, name: 'Admin' },
  ];

  /*
  fullName: string;
  email: string;
  gender = 'male'
  phoneNumber: string;
  contactPreference: boolean;
  isActive: boolean;
  department: number;
  dateOfBirth: Date;
  photoPath: string;
  */

  constructor() {
  }

  togglePhotoPreview() {
    this.previewPhoto = !this.previewPhoto;
  }

  ngOnInit(): void {
  }
    saveEmployee(employeeForm: NgForm): void {
      console.log(employeeForm);
  }

}
