import { IEmployeesUpdate } from "../interfaces/employees-update.interface";

export class EmployeesUpdateModel implements IEmployeesUpdate {
  constructor(
    public id: number,
    public cedula: number,
    public nombres: string,
    public sexo: boolean,
    public fechaNacimiento: string,
    public salario: number,
    public vacuna: boolean
  ){}
}
