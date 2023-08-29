interface FormConfig {
  label: string;
  type: string;
  fields: string[];
}

export interface FormTypeMap {
  registration: FormConfig;
  authorization: FormConfig;
}

export interface User {
  id?: number;
  firstName?: string;
  lastName?: string;
  email: string;
  password: string;
}