import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../models/department.model';
import { Employee } from '../models/employee.model';
import { Router } from '@angular/router'
import { ConfirmEqualValidatorDirective } from '../shared/confirm-equal-validator.directive';
import { SelectRequiredValidatorDirective } from '../shared/select-required-validator.directive';
import { EmployeeService } from './employee.service';
// import { EmployeeService } from './employee.service';




@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {

  previewPhoto = false;

  employee: Employee = {
    id: 0,
    fullname: '',
    gender: '', 
    email: '',
    phoneNumber: 0,
    contactPreference: '',
    dateOfBirth: new Date(),
    department: "-1",
    isActive: false,
    photoPath: '',
    password: '',
    confirmPassword: '',
  };

  departments: Department[] = [
    { id: 1, name: 'Help Desk'},
    { id: 2, name: 'HR'},
    { id: 3, name: 'IT'},
    { id: 4, name: 'Payroll'},
    { id: 5, name: 'Admin'}
  ];
  
  constructor(private _employeeService: EmployeeService,
    private _router: Router) {
  }

  togglePhotoPreview() {
    this.previewPhoto = !this.previewPhoto;
  }

  ngOnInit(): void {
  }

  saveEmployee(): void {
    this._employeeService.save(this.employee);
    this._router.navigate(['list']);
  }
}
