export interface IDBConfigAttributes {
  username?: string;
  password?: string;
  database?: string;
  host?: string;
  port?: number | string;
  dialect?: string;
  urlDatabase?: string;
  dialectOptions?: any;
}

export interface IDBConfig {
  local: IDBConfigAttributes;
  production: IDBConfigAttributes;
}
