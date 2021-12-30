import { EmployeesModel } from './../../../@modules/administration/employees/models/employees.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sumSalary'
})
export class SumSalaryPipe implements PipeTransform {

  transform(items: EmployeesModel[]): number {
    var salary :  number = 0;

    items.forEach(x => {
      salary += x.salario;
    });
    debugger;
    return salary;
  }

}
