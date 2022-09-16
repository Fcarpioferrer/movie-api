export interface Response<T = any> {
  success: boolean;
  item?: T;
  items?: T[];
  error?: string;
  message?: string;
}
