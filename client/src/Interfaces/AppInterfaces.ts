interface FormConfig {
  label: string;
  type: string;
  fields: string[];
}

export interface FormTypeMap {
  registration: FormConfig;
  authorization: FormConfig;
}
