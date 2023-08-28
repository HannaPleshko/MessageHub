import { FormTypeMap } from '../../Interfaces/AppInterfaces';

export const formTypes: FormTypeMap = {
  registration: {
    label: 'Регистрация',
    type: 'registration',
    fields: ['firstName', 'lastName', 'email', 'password'],
  },
  authorization: {
    label: 'Авторизация',
    type: 'authorization',
    fields: ['email', 'password'],
  },
};
