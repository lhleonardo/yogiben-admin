Pesquisadores = new Mongo.Collection("pesquisadores");
Pesquisadores.attachSchema(new SimpleSchema({
	nome: {
		type: String, 
		max: 255, 
		optional: false
	}, 
	cpf: {
		type: String, 
		max: 11, 
		optional: false
	}
}));