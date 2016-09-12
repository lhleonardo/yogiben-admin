Posts = new Mongo.Collection("posts");
Posts.attachSchema(new SimpleSchema({
	nome: {
		type: String, 
		label: "Nome da postagem", 
		optional: false
	}, 
	apelido: {
		type: String, 
		label: "Apelido da postagem",
		optional: true
	}, 
	dataAlerta: {
		type: Date, 
		label: "Data de Alerta", 
		optional: false
	}
}));