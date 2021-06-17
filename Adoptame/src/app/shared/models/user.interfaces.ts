export type Roles = 'PERSONA' | 'FUNDACION' ;

export interface User {
  uid: string;
  email: string;
  nombre: string;
  emailVerified: boolean;
  password?: string;
  role: Roles;
}
