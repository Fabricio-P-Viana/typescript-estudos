// composição é um tipo de associação que indica que uma classe é composta por outra classe

export class Carro {
  private readonly motor = new Motor();

  ligar(): void {
    this.motor.ligar();
  }

  acelerar(): void {
    this.motor.acelerar();
  }

  parar(): void {
    this.motor.parar();
  }

  desligar(): void {
    this.motor.desligar();
  }
}

export class Motor {
  ligar(): void {
    console.log('Motor está ligado...');
  }

  acelerar(): void {
    console.log('Motor está acelerando...');
  }

  parar(): void {
    console.log('Motor está parado...');
  }

  desligar(): void {
    console.log('Motor foi desligado...');
  }
}

// ligação direta { não é recomendado }
// carro.motor.acelerar();

const carro = new Carro();
carro.ligar();
carro.acelerar();
