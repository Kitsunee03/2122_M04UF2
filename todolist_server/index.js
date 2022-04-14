#!/usr/bin/node

const http = require("http");

let mongo_client = require("mongodb").MongoClient;
let url = "mongodb://localhost/";
let ObjectId = require("mongodb").ObjectID;
let db;

console.log("Iniciando server mongo-http");

mongo_client.connect(url, function(error, conn){
	console.log("Dentro de MongoDB");
		if (error){
			console.log("No se ha podido acceder a Mongo :\(");
			return;
		}
		db = conn.db("todolist");
});

http.createServer(function(req, res) {
	res.writeHead(200, {
      		'Content-Type': 'application/json',
      		'Access-Control-Allow-Origin': '*',
      		'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
	});

	if (req.method == "POST") {
		let task = [];
		req.on('data', function(chunk) {
			task += chunk;
		});

		req.on('end', function() {
			task = JSON.parse(task);		
			
			if (task.remove == "false") {
				db.collection("tasks").insertOne({"task":task.tasks});				
				let new_obj = db.collection("tasks").find().sort({"_id":-1}).limit(1);			
				let obj_id;
				new_obj.toArray(function(err,doc) {
					obj_id  = JSON.stringify(doc);
					res.end(obj_id);
					return;
				});
			}
			else {
				let idd = new ObjectId(task.task_id);	
				let id =  {_id: idd};
				db.collection("tasks").deleteOne(id);
			}	
		});
		return;
	}	

	let task_obj = db.collection("tasks").find();
	let task_json;
	task_obj.toArray(function(err,data){
		task_json = JSON.stringify(data);
		res.end(task_json);
		return;
	});
	return;
}).listen(3030);
