class Produto{
    private _identificador: number;
    private _descricao: String;
    private _qtdProduto: number;
    private _valorUnitario: number;
    private _nome: String;

    constructor(identificador: number, descricao: String, qtdProduto: number, valorUnitario:number, nome: String){
        this._identificador = identificador;
        this._descricao = descricao;
        this._qtdProduto = qtdProduto;
        this._valorUnitario = valorUnitario;
        this._nome = nome;

    }
    
    get nome(){
        return this._nome;
    }

    get identificador(){
        return this._identificador
    }

    get descricao(){
        return this._descricao
    }

    get qtdProduto(){
        return this._qtdProduto
    }

    get valorUnitario(){
        return this._valorUnitario
    }

    repor(valor:number){
        this._qtdProduto += valor;
    }

    darBaixa(valor: number){
        this._qtdProduto -= valor;
    }
}

class ProdutoPerecivel extends Produto{
    private _dataValidade: Date;
    private _dataAtual: Date;

    constructor(identificador: number, descricao: String, qtdProduto: number, valorUnitario: number,dataValidade: Date, nome: String) {
        super(identificador,descricao,qtdProduto,valorUnitario, nome)
        this._dataValidade = new Date(dataValidade);
        this._dataAtual = new Date();
    }

    

    validoOuNao(): boolean{
        if(this._dataValidade > this._dataAtual){
            return true
        }else{
            return false
        }
    }
}

class Estoque {
    private produtos: Produto[] = [];

    public toString(): String{
        let lista =''
        for(let p of this.produtos){
            lista += `Identificador: ${p.identificador}, Nome: ${p.nome}, Descrição: ${p.descricao}, Valor Unitário: ${p.valorUnitario}, Quantidade: ${p.qtdProduto}\n`;
        }

        return lista;
    }

    public inserir(p: Produto): void{
        let indice = this.consultarIndice(p.identificador);
        let nomeExistente: boolean = false;

        for (let item of this.produtos){
            if(item.nome == p.nome){
                nomeExistente = true;
                console.log("Nome já existente!");
                break
            }
        
        }
        if(indice == -1 && nomeExistente == false){
            this.produtos.push(p);
            console.log("Produto inserido!");
            
        }else if(indice != -1){
            console.log("Identificador do produto já existente!");
            
        }
    }

    private consultarIndice(numero: number): number{
        let indice: number = -1;
        for(let i: number = 0; i<this.produtos.length; i++){
            if(this.produtos[i].identificador == numero){
                indice = i;
                break;
            }
        }
        return indice;
    }

    public consultar(numero: number): Produto{
        let ProdutoProcurado!: Produto;
        for(let p of this.produtos){
            if(p.identificador == numero){
                ProdutoProcurado = p;
                break
            }
        }
        return ProdutoProcurado;
    }

    public excluir(numero: number){
        let indice = this.consultarIndice(numero)
        if(indice != -1){
            for(let i: number = indice; i<this.produtos.length; i++){
                this.produtos[i] = this.produtos[i+1]
            }
            this.produtos.pop();
            console.log("Produto excluído!");
            
        }

    }

    repor(numero: number, valor: number){
        let indice = this.consultarIndice(numero)
        //let valor = Number(prompt("Quantos produtos repor? "));
        
        if( indice != -1){
            this.produtos[indice].repor(valor);
        }else{
            console.log("Produto não encontrado!");
            
        }
    }

    darBaixa(numero: number, valor: number){
        let indice = this.consultarIndice(numero)

        if( indice != -1){
            //let valor: number = Number(prompt("Quantos produtos dar baixa? "));
            this.produtos[indice].darBaixa(valor);
        }else {
            console.log("Produto não encontrado!");
            
        }
    }

        produtosVencidos(): String{
            let produtosVencidos = ''
            for(let p of this.produtos){
                if(p instanceof ProdutoPerecivel && !p.validoOuNao()){
                    produtosVencidos += p.nome + '\n'
                }
            }
            return produtosVencidos;
            }
    }

//teste
let estoque1: Estoque = new Estoque();
let produto1: Produto = new Produto(111,"arroz marca tal", 5, 5.00,"Arroz");
let produto2: Produto = new Produto(222, "feijão marca tal", 6, 6.00, "Feijão")
let produto3: ProdutoPerecivel = new ProdutoPerecivel(333,"mmmmm", 10, 7,'2022-10-16T22:33:48.281Z',"Macarrão")
let produto4: ProdutoPerecivel = new ProdutoPerecivel(444,"AAA", 10, 7,'2019-09-16T22:33:48.281Z',"Açúcar")
let produto5: ProdutoPerecivel = new ProdutoPerecivel(555,"bbbb", 10, 7,'2024-11-16T22:33:48.281Z',"Sorvete")

//testando produto já existente
let produto6: Produto = new Produto(6,"Arroz", 5, 5.00,"Arroz");


//inserir no estoque
estoque1.inserir(produto1);
estoque1.inserir(produto2);
estoque1.inserir(produto3);
estoque1.inserir(produto4);
estoque1.inserir(produto5);
estoque1.inserir(produto6);
console.log(estoque1.toString());


//listar produtos vencidos
console.log(estoque1.produtosVencidos());//macarrão e açúcar

//repor e darbaixa
estoque1.repor(111, 10);
estoque1.darBaixa(222, 5);
console.log(estoque1.toString());

//consulta
console.log(estoque1.consultar(222));

//exluir
estoque1.excluir(222);
console.log(estoque1.toString());






