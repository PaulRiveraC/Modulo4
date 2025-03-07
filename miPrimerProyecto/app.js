//importo express
const express = require("express");
const bodyParser = require("body-parser");
//valido espress
const app = express();
const puerto = 3001;

//contacto: id, nombre apellido, celular

//funcion middleware
app.use(bodyParser.json ());

//funcion middleware
app.use("/contactos", (request, response, next) => {  //ejecuta para cualquier funcion
    console.log("ingresa a middleware");
    //recuperar headers
    console.log("headers: ", request.headers);
    //recuperar body
    console.log("body: ", request.body);
    next();
});

//para que responda 
app.get("/contactos", (request, response) => {
    const contactos = [
        { id: 1, nombre: "Santiago", apelllido: "Mosquera", celular: "0979368666" },
        { id: 2, nombre: "Paul", apelllido: "Rivera", celular: "0988386699" },
        { id: 3, nombre: "Jorge", apelllido: "Ramirez", celular: "0987654321" }
    ];
    console.log("ingresa a get");
    //respuesta de codigo 200
    response.send(contactos);//codigo 200
});

app.post("/contactos", (req, resp) => {
    req.body.id=99;
    resp.send(req.body);
})

app.put("/contactos/:idParam", (req, resp) => {
    const id=req.params.idParam;
    console.log("id",id);
    resp.send(req.body);

    //resp.send("put contactos");
});


app.delete("/contactos/:id", (req, resp) => {
    const id=req.params.id;
    console.log("id",id);
    resp.send();

    //resp.send("delete contactos");
});

//levanta servidor web en mi computador local
app.listen(3001, () => {
    console.log("servidor listo en el puerto " + puerto);
});