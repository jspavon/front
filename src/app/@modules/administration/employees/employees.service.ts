import { EmployeesCreateModel } from './models/employees-create.model';
import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";
import { HttpService } from "src/app/@shared/services/http.service.ts.service";
import { IResponseService } from 'src/app/@shared/interfaces/response-service.interface';
import { environment } from 'src/environments/environment';
import { HttpResponse } from '@angular/common/http';
import { map } from "rxjs/operators";
import { IEmployees } from './interfaces/employees.interface';
import { EmployeesUpdateModel } from './models/employees-update.model';

@Injectable({
  providedIn: 'root',
})

export class EmployeesService {

  constructor(
    private httpService: HttpService
  ) {}

  public getAllEmployees() : Observable<IResponseService<IEmployees[]> | null>{

    let response$ : Observable<IResponseService<IEmployees[]> | null>;

    response$ = this.httpService
                    .Get(`${environment.apiUrl}/api/Employees/1/100`)
                      .pipe(
                        map((response: HttpResponse<IResponseService<IEmployees[]> | null>) => {
                          return response.body;
                        })
                    );

    return response$;
  }


  public postEmployees(employees: EmployeesCreateModel): Observable<IResponseService<number> | null> {
    let response$: Observable<IResponseService<number> | null>;

    response$ = this.httpService
      .Post(
        `${environment.apiUrl}/api/Employees`,
          employees
      )
      .pipe(
        map((response: HttpResponse<IResponseService<number> | null>) => {
          return response.body;
        })
      );
    return response$;
  }


  public putEmployees(id: number, employees: EmployeesUpdateModel): Observable<IResponseService<number> | null> {
    let response$: Observable<IResponseService<number> | null>;
    response$ = this.httpService
      .Put(
        `${environment.apiUrl}/api/Employees/${id}`,
        employees
      )
      .pipe(
        map((response: HttpResponse<IResponseService<number> | null>) => {
          return response.body;
        })
      );
    return response$;
  }


  public deleteEmployees(id: number): Observable<IResponseService<boolean> | null> {
    let response$: Observable<IResponseService<boolean> | null>;
    response$ = this.httpService.Delete(`${environment.apiUrl}/api/Employees/${id}`)
      .pipe(
        map((response: HttpResponse<IResponseService<boolean> | null>) => {
          return response.body;
        })
      );
    return response$;
  }

}
