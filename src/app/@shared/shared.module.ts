import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimeNgModule } from './modules/prime-ng.module';
import { SumSalaryPipe } from './pipeline/sumSalary/sum-salary.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    PrimeNgModule,
  ],
  declarations: [
    SumSalaryPipe
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SumSalaryPipe
  ],
})
export class SharedModule { }
