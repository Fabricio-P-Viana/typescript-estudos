// classe abstrata usada para ter um tipo padrão

// ESSA CLASSE SO FOI CRIADA PARA SER HERDADA
// então podemos transformar ela em uma classe abstrata

export abstract class Character {
  protected abstract emoji: string; // protected é um modificador de acesso que permite que as classes filhas acessem essa propriedade

  constructor(
    protected name: string,
    protected attack: number,
    protected life: number,
  ){}

  attackThe(character:Character): void{
    this.bordao();
    console.log(`${this.name} está atacando!`);
    character.loseLife(this.attack);
  }

  loseLife(attackPower: number):void {
    this.bordao();
    this.life -= attackPower;
    console.log(`${this.emoji} - ${this.name} agora tem ${this.life} de vida!`);
  }

  abstract bordao(): void; // método abstrato é um contrato que as classes filhas devem implementar obrigatoriamente
}
export class Guerreira extends Character{
  protected emoji = '\u{1F9DD}';
  bordao(): void {
    console.log(`GUERREIRA ${this.emoji}`);
  }
}
export class Monstro extends Character{
  protected emoji = '\u{1F9DF}';
  bordao(): void {
    console.log(`MONSTRO ${this.emoji}`);
  }
}

const guerreira = new Guerreira('Guerreira',100,1000);
const monstro = new Monstro('Monstro',87,1000);

guerreira.attackThe(monstro);
monstro.attackThe(guerreira);
guerreira.attackThe(monstro);
monstro.attackThe(guerreira);
