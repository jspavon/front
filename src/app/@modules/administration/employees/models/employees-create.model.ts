import { IEmployeesCreate } from "../interfaces/employees-create.interface";

export class EmployeesCreateModel implements IEmployeesCreate {
 constructor(
  public cedula: number,
  public nombres: string,
  public sexo: boolean,
  public fechaNacimiento: string,
  public salario: number,
  public vacuna: boolean
 ){}
}
