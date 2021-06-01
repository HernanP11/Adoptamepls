export type Roles = 'PERSONA' | 'FUNDACION' ;

export interface User {
  uid: string;
  email: string;
  nombre: string;
  password?: string;
  role?: Roles;
}
