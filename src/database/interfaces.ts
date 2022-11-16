export interface IPerson {
  id?: number;
  name: string;
  email: string;
  cpf: string;
}

export interface IPeople extends IPerson {
  save(): void;
}
