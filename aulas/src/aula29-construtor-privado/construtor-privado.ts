
// padrão de projeto Singleton - GoF | Factory Method - GoF

export class DataBase {
  private static database: DataBase; // statico e privado

  private constructor( // construtor privado
    private host: string,
    private user: string,
    private password: string,
  ) {}

  connect(): void{
    console.log(`conectado: ${this.host}, ${this.user}, ${this.password}`);
  }

  static getDataBase(host: string, user: string, password: string,): DataBase {
    if (DataBase.database) return DataBase.database; // se já houver instancia

    DataBase.database = new DataBase(host,user,password);

    return DataBase.database;
  }
}

// não faz sentido ter duas conexões
// const db1 = new DataBase('locahost','root','123456');
// db1.connect();
// const db2 = new DataBase('locahost','root','123456');
// db2.connect();
// console.log(db1 === db2); // false

// quando chamar a classe ou crie se não houver ou retorne uma instacia já criada anteriormente

const db1 = DataBase.getDataBase('locahost','root','123456'); // cria
db1.connect();

const db2 = DataBase.getDataBase('locahost','root','123456'); // so retorna a mesma instancia db1
db2.connect();

console.log(db1 === db2); // true

