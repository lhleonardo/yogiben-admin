AdminConfig = {
	name: "Delfos - Admin",
	collections: {
		// Posts: {
		// 	tableColumns: [
		// 		{label: "Nome", name: "nome"}, 
		// 		{label: "Apelido", name: "apelido"},
		// 		{label: "Data", name: "dataAlerta"}
		// 	]

		// },
		Pessoas: {
			icon: "smile-o",
			tableColumns: [
				{label: "Nome", name: "nome"},
				{label: "CPF", name: "cpf"}, 
				{label: "E-mail", name: "email"}, 
				{label: "Tipo de Pessoa", name: "tipoPessoa"}
			]
		}, 
		Pesquisas: {
			icon: "book", 
			tableColumns: [
				{label: "Nome da pesquisa", name: "nome"}, 
				{label: "Data de início", name: "dataInicio"}, 
				{label: "Vencimento", name: "vencimento"}
			]
		}
	}
}