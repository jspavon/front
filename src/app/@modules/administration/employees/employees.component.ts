import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RegexCommon } from 'src/app/@shared/enums/regex.enum';
import { EmployeesService } from './employees.service';
import { IEmployees } from './interfaces/employees.interface';
import { EmployeesCreateModel } from './models/employees-create.model';
import { EmployeesUpdateModel } from './models/employees-update.model';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  public isCreate: boolean = true;
  public process: number = 0;
  public viewModal: boolean = false;
  public processTittle: string = '';
  public formEmployees: FormGroup;
  public objectList: IEmployees[] = [];
  public sexo: boolean = false;
  public genero: string = '';
  public vacuna: boolean = false;
  public vacunado: string = 'No';
  public fechaNacimiento: Date = new Date();
  public today: Date = new Date();
  public currentYear: number = 0;
  public startYear: number = 0;
  public employeesCreateModel: EmployeesCreateModel;
  public idEmployees: number;
  public employeesUpdateModel: EmployeesUpdateModel;
  public salary: number = 0;

  constructor(
    private fb: FormBuilder,
    private _service : EmployeesService
  ) { }

  ngOnInit(): void {
    this.objectList = [];
    this.initForm();
    this.getAllEmployees();
  }

  getAllEmployees(){
    this._service.getAllEmployees()
    .subscribe((response) => {
      if (response?.status) {
        this.objectList = [...response.data];
        this.objectList.forEach(x => {
          this.salary += x.salario;
        });
      }
    },
    (error: HttpErrorResponse) => {
      console.log(error);
    });
  }

  changeStateVaccine($event: any){
    this.vacuna = $event.checked
    this.vacunaFormControl?.setValue($event.checked);
    this.vacunado = $event.checked ? 'Si' : 'No';
  }

  addEmployees(){
    this.viewModal = true;
    this.clearControls();
    this.process = 1;
    this.processTittle = 'Crear Empleado'
  }

  editEmployees(object: IEmployees){
    this.process = 2;
    this.processTittle = 'Actualizar Empleado'

    this.cedulaFormControl?.setValue(object.cedula);
    this.nombresFormControl?.setValue(object.nombres);
    this.sexoFormControl?.setValue(object.sexo);
    this.salarioFormControl?.setValue(object.salario);
    this.vacunaFormControl?.setValue(object.vacuna);

    this.sexo = object.sexo;
    this.genero = object.sexo ? 'Masculino' : 'Femenino';
    this.vacuna = object.vacuna;
    this.vacunado = object.vacuna ? 'Si' : 'No';
    let fecha = new Date(object.fechaNacimiento);
    this.fechaNacimiento = fecha;

    this.idEmployees = object.id;

    this.viewModal = true;
  }

  create(){
    this.employeesCreateModel = new EmployeesCreateModel(
      this.cedulaFormControl?.value,
      this.nombresFormControl?.value,
      this.sexoFormControl?.value,
      this.fechaNacimientoFormControl?.value,
      this.salarioFormControl?.value,
      this.vacunaFormControl?.value
    );

    this._service.postEmployees(this.employeesCreateModel).subscribe((response) => {
      if (response?.status) {
        this.getAllEmployees();
        this.clearControls();
        this.hideDialog();
      }
    },
    (error: HttpErrorResponse) => {
      console.log(error);
    });

  }

  update(){
    this.employeesUpdateModel = new EmployeesUpdateModel(
      this.idEmployees,
      this.cedulaFormControl?.value,
      this.nombresFormControl?.value,
      this.sexoFormControl?.value,
      this.fechaNacimientoFormControl?.value,
      this.salarioFormControl?.value,
      this.vacunaFormControl?.value
    );

    this._service.putEmployees(this.idEmployees, this.employeesUpdateModel).subscribe((response) => {
      if (response?.status) {
        this.getAllEmployees();
        this.clearControls();
        this.hideDialog();
      }
    },
    (error: HttpErrorResponse) => {
      console.log(error);
    });

  }

  delete(object: IEmployees){

    this.idEmployees = object.id;

    this._service.deleteEmployees(this.idEmployees).subscribe((response) => {
      if (response?.status) {
        this.getAllEmployees();
        this.clearControls();
        this.hideDialog();
      }
    },
    (error: HttpErrorResponse) => {
      console.log(error);
    });
  }

  hideDialog(){
    this.clearControls();
    this.process = 0;
    this.viewModal = false;
  }

  clearControls(){
    this.cedulaFormControl?.reset();
    this.nombresFormControl?.reset();
    this.sexoFormControl?.reset();
    this.fechaNacimientoFormControl?.reset();
    this.salarioFormControl?.reset();
    this.vacunaFormControl?.reset();
    this.sexo = false;
    this.genero = 'Femenino';
    this.vacuna = false;
    this.vacunado = 'No';
    this.fechaNacimiento = this.today;
    this.formEmployees.reset();
  }

  changeStateSexo($event: any){
    this.sexo = $event.checked;
    this.sexoFormControl?.setValue($event.checked);
    this.genero = $event.checked ? 'Masculino' : 'Femenino';
  }

  getYearRange() {
    this.currentYear = this.today.getFullYear();
    this.startYear = this.currentYear - 90;
    return `${this.startYear}:${this.currentYear}`;
  }


  initForm(): void {
    this.formEmployees = this.fb.group({
      cedulaFormControl: [{ value: '', disabled: false }, [Validators.required, Validators.minLength(6), Validators.maxLength(10), Validators.pattern(RegexCommon.ExpRegOnlyNumber)]],
      nombresFormControl: [{ value: '', disabled: false }, [Validators.required, Validators.minLength(4), Validators.maxLength(30), Validators.pattern(RegexCommon.ExpRegOnlyCaracter)]],
      sexoFormControl: [{ value: false, disabled: false }, Validators.required],
      fechaNacimientoFormControl: [{ value: '', disabled: false }, Validators.required],
      salarioFormControl: [{ value: '', disabled: false }, [Validators.required, Validators.minLength(4), Validators.maxLength(15), Validators.pattern(RegexCommon.ExpRegOnlyNumber)]],
      vacunaFormControl: [{ value: '', disabled: false }, Validators.required],
    });
  }

  get cedulaFormControl(){ return this.formEmployees.get('cedulaFormControl')};
  get nombresFormControl(){ return this.formEmployees.get('nombresFormControl')};
  get sexoFormControl(){ return this.formEmployees.get('sexoFormControl')};
  get fechaNacimientoFormControl(){ return this.formEmployees.get('fechaNacimientoFormControl')};
  get salarioFormControl(){ return this.formEmployees.get('salarioFormControl')};
  get vacunaFormControl(){ return this.formEmployees.get('vacunaFormControl')};

}
