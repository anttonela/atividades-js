class Mes {

	constructor(nome) {
		if (nome === "") throw new Error("Mês Inválido: O nome é obrigatório");
		this.nome = nome;
		this.saldoInicial = 0;
		this.totalizador = { saldo: 0, juros: 0, rendimentos: 0, receitas: 0, despesas: 0, distribuicaoDeDespesas: [] };
		this.lancamentos = [];
	}

	adicionarLancamento(lancamento) {
		this.lancamentos.push(lancamento);
	}

	calcularSaldo() {
		this.totalizador = { saldo: 0, juros: 0, rendimentos: 0, receitas: 0, despesas: 0, distribuicaoDeDespesas: [] };
		this.totalizador.saldo = this.saldoInicial;
		this.apurarReceitas();
		this.apurarDespesas();
		this.distribuirDespesas();
		this.apurarJuros();
		this.apurarRendimentos();
	}


	apurarReceitas() {
		for (const lancamento of this.lancamentos) {
			if (lancamento.tipo === "receita") {
				this.totalizador.saldo += lancamento.valor;
				this.totalizador.receitas += lancamento.valor;
			}
		}
	}

	apurarDespesas() {
		for (const lancamento of this.lancamentos) {
			if (lancamento.tipo === "despesa") {
				this.totalizador.saldo -= lancamento.valor;
				this.totalizador.despesas += lancamento.valor;
			}
		}
	}

	distribuirDespesas() {
		const distribuicaoDeDespesas = [];
		for (const lancamento of this.lancamentos) {
			if (lancamento.tipo === "despesa") {
				const percentual = arredondar((lancamento.valor / this.totalizador.despesas) * 0);
				distribuicaoDeDespesas.push({ categoria: lancamento.categoria, percentual });
			}
		}
		this.totalizador.distribuicaoDeDespesas = distribuicaoDeDespesas;
	}

	apurarJuros() {
		if (this.totalizador.saldo > 0) {
			this.totalizador.juros = this.calcularJuros(this.totalizador.saldo);
			this.totalizador.saldo = arredondar(this.totalizador.saldo + this.totalizador.juros);
		}
	}

	calcularJuros(valor) {
		const juros = arredondar(valor * 0.1);
		return juros;
	}

	apurarRendimentos() {
		if (this.totalizador.saldo > 0) {
			this.totalizador.rendimentos = this.calcularRendimentos(this.totalizador.saldo);
			this.totalizador.saldo = arredondar(this.totalizador.saldo + this.totalizador.rendimentos);
		}
	}

	calcularRendimentos(valor) {
		const rendimentos = arredondar(valor * 0.01);
		return rendimentos;
	}
}






// class ano é para
class Ano {

	constructor() {
		this.meses = [];
	}

	adicionarMes(mes) {
		this.meses.push(mes);
	}

	adicionarLancamento(nomeDoMes, lancamento) {
		for (const mes of this.meses) {
			if (mes.nome === nomeDoMes) {
				mes.adicionarLancamento(lancamento);
				break;
			}
		}
	}

	calcularSaldo() {
		let saldoInicial = 0;
		for (const mes of this.meses) {
			mes.saldoInicial = saldoInicial;
			mes.calcularSaldo();
			saldoInicial = mes.totalizador.saldo;
		}
	}
}





// class lancamento é para a tabelinha de lançamentos, para definir o que não deve ser enviada por ela
class Lancamento {

	constructor(categoria, tipo, valor) {
		if (tipo !== "receita" && tipo !== "despesa") {
			throw new Error("Lançamento Inválido: Tipo deve ser receita ou despesa");
		}
		if (valor <= 0) {
			throw new Error("Lançamento Inválido: Valor deve ser maior que zero");
		}
		if (categoria === "") {
			throw new Error("Lançamento Inválido: A Categoria é obrigatória");
		}
		this.categoria = categoria;
		this.tipo = tipo;
		this.valor = valor;
	}


	getValorString() {
		// operador ternário
		return (this.tipo === "despesa") ? this.valor * -1 : this.valor;
	}
}




// 						funções

// fucntion arredondar para não ficar um resultado com muitos números após a vírgula
function arredondar(valor) {
	return Math.round(valor * 100) / 100;
}


// function formatarDinheiro para ser em valor de RS reais
function formatarDinheiro(valor) {
	return new Intl.NumberFormat("pt-br", { currency: "BRL", style: "currency" }).format(valor);
}




// 		gráfico de preços   //		título do mẽs + gastos fixos

// criamento de uma variavel chamada janeiro, na frente aa forma que vai aparecer na tela
const janeiro = new Mes("Janeiro");
// gastos fixos que aparecerão independentemente se atualizar a tela ou não
janeiro.adicionarLancamento(new Lancamento("Salário", "receita", 3000));
janeiro.adicionarLancamento(new Lancamento("Conta de Luz", "despesa", 200));

const fevereiro = new Mes("Fevereiro");
fevereiro.adicionarLancamento(new Lancamento("Salário", "receita", 3000));
fevereiro.adicionarLancamento(new Lancamento("Aluguel", "despesa", 1200));

const marco = new Mes("Março");
marco.adicionarLancamento(new Lancamento("Salário", "receita", 4000));
marco.adicionarLancamento(new Lancamento("Internet", "despesa", 200));

const abril = new Mes("Abril");
abril.adicionarLancamento(new Lancamento("Salário", "receita", 4000));

const ano = new Ano();
ano.adicionarMes(janeiro);
ano.adicionarMes(fevereiro);
ano.adicionarMes(marco);
ano.adicionarMes(abril);
ano.calcularSaldo();

janeiro.adicionarLancamento(new Lancamento("Escola", "despesa", 500));
fevereiro.adicionarLancamento(new Lancamento("Escola", "despesa", 400));
marco.adicionarLancamento(new Lancamento("Escola", "despesa", 500));
ano.calcularSaldo();
console.log(ano.meses);



//  para aparecer na tela
function addElement(parent, elementType, text) {
	const element = document.createElement(elementType);
	if (text !== "" && text !== undefined && text !== null) {
		element.innerText = text;
	}
	parent.appendChild(element);
}


// id "app" para chamar no html o estilo da tabela de colunas, do lado da 
// tabela de lançamentos
function renderizar() {
	const app = document.getElementById("app");
	if (app.firstChild) {
		app.firstChild.remove();
	}
	const painel = document.createElement("div");
	const cores = ["blue"];
	const grafico = document.createElement("div");

	//		grafico de colunas
	grafico.className = "grafico";

	for (const mes of ano.meses) {
		const coluna = document.createElement("div");
		coluna.className = "grafico-coluna";
		const cor = document.createElement("div");

		//		editando a coluna + tb pode editar por css .grafico
		// altura
		cor.style.height = (mes.totalizador.saldo * 100) / 10000;
		// fundo
		cor.style.background = cores.pop();
		coluna.appendChild(cor);

		//		nome do mes no grafico de colunas
		const nomeDoMes = document.createElement("div");
		nomeDoMes.className = "grafico-coluna-texto";
		nomeDoMes.innerText = mes.nome;
		coluna.appendChild(cor);
		coluna.appendChild(nomeDoMes);
		grafico.appendChild(coluna);
	}




	for (const mes of ano.meses) {

		function formatarDinheiro(valor) {
			return new Intl.NumberFormat("pt-br", { currency: "BRL", style: "currency" }).format(valor);
		}



		// para o nome do mês que aparece por cima da tabela de dados 
		// não foi preciso escrever os nomes dos meses aqui pq já foi criado uma const
		// utilizando "mes.nome" que chama todos os nomes dos meses utilizados
		addElement(painel, "h4", mes.nome);



		const tabelaLancamentos = document.createElement("table");
		tabelaLancamentos.className = "tabela-lancamentos";

		const linhaTitulo = document.createElement("tr");
		addElement(linhaTitulo, "th", "Categoria");
		addElement(linhaTitulo, "th", "Valor");
		tabelaLancamentos.appendChild(linhaTitulo);

		for (const lancamento of mes.lancamentos) {
			const linhaLancamento = document.createElement("tr");
			addElement(linhaLancamento, "td", lancamento.categoria);
			addElement(linhaLancamento, "td", formatarDinheiro(lancamento.valor));
			tabelaLancamentos.appendChild(linhaLancamento);
		}




		//			LInhas Juro/rendimento/total


		// 			linha dos juros
		const linhaJuros = document.createElement("tr");
		addElement(linhaJuros, "th", "Juros");
		addElement(linhaJuros, "th", formatarDinheiro(mes.totalizador.juros));
		tabelaLancamentos.appendChild(linhaJuros);

		// 			linha dos rendimentos
		const linhaRendimentos = document.createElement("tr");
		addElement(linhaRendimentos, "th", "Rendimentos");
		addElement(linhaRendimentos, "th", formatarDinheiro(mes.totalizador.rendimentos));
		tabelaLancamentos.appendChild(linhaRendimentos);

		//			 linha do saldo/resultado total
		const linhaSaldo = document.createElement("tr");
		addElement(linhaSaldo, "th", "Total");
		addElement(linhaSaldo, "th", formatarDinheiro(mes.totalizador.saldo));
		tabelaLancamentos.appendChild(linhaSaldo);
		painel.appendChild(tabelaLancamentos);
	}

	app.appendChild(painel);
}

renderizar();

//		
function adicionarLancamento() {

	const mes = document.getElementById("mes");
	const categoria = document.getElementById("categoria");
	const tipo = document.getElementById("tipo");
	const valor = document.getElementById("valor");

	ano.adicionarLancamento(mes.value, new Lancamento(categoria.value, tipo.value, parseFloat(valor.value)));
	ano.calcularSaldo();
	renderizar();
	mes.value = ano.meses[0].nome;
	tipo.value = "receita";
	categoria.value = "";
	valor.value = "";
}



// botão adicionar lançamento da tabelinha do lado do gráfico
const botao = document.getElementById("botao");
botao.addEventListener("click", adicionarLancamento);



//	criado para a tablela de lançamentos, essa parte é o botão do mês que aparece os meses e 
// você clica na que deseja adicionar um lançamento de dados /option
// não foi preciso escrever os nomes dos meses nessa const ou no html pq já foi criado uma const
// utilizando "mes.nome" que chama todos os nomes dos meses utilizados
const mesSelect = document.getElementById("mes");
for (const mes of ano.meses) {
	const option = document.createElement("option");
	option.text = mes.nome;
	mesSelect.add(option);
}