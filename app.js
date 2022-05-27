const express = require('express')
const app = express()
const path = require('path')

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.set('view engine','ejs')
app.set('views',path.join(__dirname,"/views"))
app.use(express.static(path.join(__dirname,"/static")))
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/pagina.html"))
})


app.listen(3000,()=>{
    console.log('app is listening at 3000');
})

app.get("/read",(req,res)=>{
    res.render("read")
})

app.get("/create",(req,res)=>{
    res.render("create")
    
})

app.get("/update",(req,res)=>{
    res.render("update")
})

app.patch("/update",(req,res)=>{
    let variabila=req.body;
    res.render("update");
    let {index,obiect111}=variabila
    if(index>=0 && index<obiect.length)
    obiect[index]=obiect111
})

app.get("/delete",(req,res)=>{
    res.render("delete")
    
})

app.delete("/delete",(req,res)=>{
    let variabila=req.body;
    res.render("delete");
    let {index2}=variabila
    if(index2>=0 && index2<obiect.length)
    obiect.splice(index2)
})

app.get("/sendObject",(req,res)=>{
    res.send(JSON.stringify(obiect))
})


app.post("/create",(req,res)=>{
    let variabila=req.body;
    obiect.push(variabila);
    res.render("create");
})

app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/Error404.html"))
})


