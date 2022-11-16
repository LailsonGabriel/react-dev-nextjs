import Dexie, { Table } from "dexie";
import { IPerson, IPeople } from "./interfaces";

export class Person extends Dexie {
  people!: Table<IPerson>;

  constructor() {
    super("myDatabaseApp");
    this.version(1).stores({
      people: "++id, name, email, cpf",
    });
  }
}

export class People implements IPeople {
  name: string;
  email: string;
  cpf: string;

  constructor(name: string, email: string, cpf: string) {
    this.name = name;
    this.email = email;
    this.cpf = cpf;
  }

  delete() {}

  getAll() {}

  save() {
    db.people.add(this);
  }

  update() {}
}

export const db = new Person();
