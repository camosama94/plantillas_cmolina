const express = require('express')
const app = express()
app.set('view engine','ejs')
app.get('/', function (req, res) {
    const datos=[
        {nombre:'Ana',apellidos:'Obregón'},
        {nombre:'Ramon',apellidos:'García'}
    ]
  res.render('index',{datos:datos});
})

app.get('/saludo', function (req,res){
    res.render('saludo',{hora:21});
})

app.get('/producto', function (req,res){
    const prod ={id:1,nombre:'Renault Megane',precio:1400,colores:['rojo','verde','plata']}
    res.render('producto',{prod:prod});
})

app.listen(3000)