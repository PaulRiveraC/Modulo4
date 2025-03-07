const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const puerto = 3002;

//El objeto laptop que se utilizará tendrá los atributos:
//id: int,marca: String,procesador: String,memoria: String,disco: String

app.use(bodyParser.json());
const laptops = [
    { id: 1, marca: "Lenovo", procesador: "Intel core i5", memoria: "16 GB", disco: "1 TB" },
    { id: 2, marca: "Azus", procesador: "Intel core i7", memoria: "32 GB", disco: "2 TB" },
    { id: 3, marca: "Dell", procesador: "Intel core i9", memoria: "64 GB", disco: "3 TB" },
    { id: 4, marca: "Toshiba", procesador: "Intel celeron", memoria: "4 GB", disco: "60 GB" },
    { id: 5, marca: "HP", procesador: "Intel core i3", memoria: "8 GB", disco: "128 GB" },

];

app.use("/laptops", (request, response, next) => {  //ejecuta para cualquier funcion
    console.log("headers: ", request.headers);
    console.log("body: ", request.body);
    next();
});


//Crear una laptop
app.post("/laptops", (req, resp) => {
    req.body.id = 6;
    resp.send(req.body);
    console.log(req.body);
})


//Recuperar una laptop

app.get("/laptops/:idParams", (request, response)=>{
    const id = parseInt(request.params.idParams);
    const laptop = laptops.find(item => item.id === id);
    if (laptop) {
        response.send(laptop);
    } else {
        response.send("Laptop no encontrada");
    }
});

//Recuperar todas las laptops
app.get("/laptops",(request, response)=>{
    response.send(laptops);
});

//Actualizar una laptop

app.put("/laptops/:idParams", (request, response)=>{
    const id = request.params.idParams;
    console.log("id: "+id);
    response.send(request.body)
});


//Eliminar una laptop
app.delete("/laptops/:idParams", (request, response)=>{
    const id = request.params.idParams;
    console.log("id: "+id);
    response.send({id:id})
});

app.listen(3002, () => {
    console.log("servidor listo en el puerto " + puerto);
});

