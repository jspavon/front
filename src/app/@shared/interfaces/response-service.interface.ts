export interface IResponseService<T> {
  status: boolean;
  message: string;
  data: T;
}
