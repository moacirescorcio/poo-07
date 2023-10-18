class Calculadora{
    private _operador1: number;
    private _operador2: number;

    constructor(operador1: number, operador2: number){
        this._operador1 = operador1;
        this._operador2 = operador2;
    }

    somar(){
        return this._operador1 + this._operador2;
    }
}

let calculadora1: Calculadora = new Calculadora(1,2);
console.log(calculadora1.somar());

