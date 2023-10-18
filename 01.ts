class veciculo{
    placa: String;
    ano: number;

    constructor(placa: String, ano: number){
        this.placa = placa;
        this.ano = ano;
    }
}

class carro extends veciculo{
    modelo: String;

    constructor(placa: String, ano: number, modelo: String){
        super(placa, ano);
        this.modelo = modelo;
    }
}

class CarroEletrico extends carro{
    
    autonomiaBateria: number;

    constructor(placa: String, ano: number, modelo: String, autonomiaBateria: number){
        super(placa, ano, modelo);
        this.autonomiaBateria = autonomiaBateria;
    }
}