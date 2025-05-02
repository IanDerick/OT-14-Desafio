let variavelAleatoria;

let pessoa = {
    nome: "Ian Derick",
    sobrenome: "Silva Mota",
    sexo: "masculino",
    idade: 22,
    peso: 95,
    altura: 1.85,
    andando: false,
    caminhouQuantosMetros: 0,
    fazerAniversario: function () {
        this.idade += 1;
    },
    andar: function (quantidadeMetros) {
        this.caminhouQuantosMetros += quantidadeMetros;
        this.andando = true;
        console.log(`${this.nome} andou ${quantidadeMetros} metros. Distancia total: ${this.caminhouQuantosMetros} metros`);
    },
    parar: function () {
        this.andando = false;
    },
    nomeCompleto: function () {
        return `${this.nome} ${this.sobrenome}`;
    },
    mostrarIdade: function () {
        return `Olá, eu tenho ${this.idade} anos.`;
    },
    mostrarPeso: function () {
        return `Eu peso ${this.peso}Kg.`;
    },
    mostrarAltura: function() {
        return `Minha altura é ${this.altura}m.`;
    },
    apresentacao: function () {
        let pronome = this.sexo === "feminino" ? "a" : "o";
        let textoIdade = this.idade === 1 ? "anos" : "anos";
        let textoDistancia = this.caminhouQuantosMetros === 1 ? "metro" : "metros";
        return `Olá, eu sou ${pronome} ${this.nome} ${this.sobrenome}, tenhos ${this.idade} ${textoIdade}, ${this.altura}m, meu peso é ${this.peso}kg e, só hoje, eu já caminhei ${this.caminhouQuantosMetros} ${textoDistancia}.`
    }
}
console.log(pessoa.nome);   // "Ian"
console.log(pessoa.idade);  // 22
console.log(pessoa.peso);   // 95
console.log(pessoa.altura); //1.85
pessoa.fazerAniversario();
pessoa.fazerAniversario();
pessoa.fazerAniversario();
console.log(pessoa.idade);  //25
pessoa.andar(1);
pessoa.andar(2);
pessoa.andar(3);            // 6 metros
pessoa.parar();             //Não
console.log(pessoa.apresentacao());