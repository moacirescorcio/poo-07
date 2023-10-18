class Calculadora2{
    private _operador1: number;
    private _operador2: number;

    constructor(operador1: number, operador2: number){
        this._operador1 = operador1;
        this._operador2 = operador2;
    }

    somar(){
        return this._operador1 + this._operador2;
    }

    //foi preciso adicionar o get para que a sobreclasse conseguisse usar os atributos
    get operador1() {
        return this._operador1;
    }

    get operador2() {
        return this._operador2;
    }

}


class CalculadoraCientifica extends Calculadora2{
    constructor(operador1: number, operador2: number){
        super(operador1,operador2);
    }

    exponiciacao(){
        return this.operador1**this.operador2;
    }

}

let calculadora2: CalculadoraCientifica = new CalculadoraCientifica(2,3);
console.log(calculadora2.exponiciacao());
