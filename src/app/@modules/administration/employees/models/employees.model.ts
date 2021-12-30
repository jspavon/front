import { IEmployees } from "../interfaces/employees.interface";

export class EmployeesModel implements IEmployees {
  constructor(
    public id: number,
    public cedula: number,
    public nombres: string,
    public sexo: boolean,
    public fechaNacimiento: string,
    public edadALaFecha: string,
    public salario: number,
    public vacuna: boolean
  ){}
}
