// const express = require('express');
import express from 'express';
const app = express(); // NO se pone new express no es una clase es un modulo;
const PORT = 8080;
const server = app.listen(PORT,()=>{
    console.log(`Listening on PORT ${PORT}`);
    //console.log(`Server running on: ${__dirname}${server.address().port}/`)
})
server.on('error', (error) => console.log(`Server error: ${error}`))
app.use(express.json()); // Servidor acepta peticiones en formato JSON
app.use(express.urlencoded({ extended: true })) // Servidor acepta peticiones en formato URLENCODED




app.get('/',(req,res)=>{
    //res.send('Finalmente, Bienvenido a Expess')
    res.send('<h1>Desafio 01 - Complementario</h1>')
})

let sentence = "Hola mundo como estan"

app.get('/api/frase',(req,res)=>{
    
    res.send({sentence});
})

// //http://localhost:8080/api/letras/2
// //
app.get('/api/letras/:num',(req,res)=>{

    if( isNaN(req.params.num) ) return res.status(400).send(`El parametro : ${req.params.num}, debe ser un numero`)
    if( parseInt(req.params.num)<1 || parseInt(req.params.num)> sentence.length ) return res.status(400).send(`El parametro : ${req.params.num}, debe ser un numero entre 1 y ${sentence.length}`)
    let num = parseInt(req.params.num)
    res.send({letter:sentence.charAt(num-1)})

        // let letras = sentence.split('')
        // let letras2 = letras.slice(0,num).join('')
        // res.send({letras2}

    
})

app.post('/api/palabra',(req,res)=>{

    let newWord = req.body;
    if(!newWord) return res.status(400).send('El parametro frase es obligatorio')
    console.log(newWord)
    res.send({newWord})

    // let frase = req.body.frase;
    // if(!frase) return res.status(400).send('El parametro frase es obligatorio')
    // res.send({frase})
})

app.get('/api/palabras/:pos',(req,res)=>{
    if(isNaN(req.params.pos)) return res.status(400).send(`El parametro : ${req.params.pos}, debe ser un numero`)
    if( parseInt(req.params.pos)<1 || parseInt(req.params.pos)> sentence.split(' ').length ) return res.status(400).send(`El parametro : ${req.params.pos}, debe ser un numero entre 1 y ${sentence.length}`)
    res.send({word:sentence.split(' ')[parseInt(req.params.pos)-1]})
    // let pos = parseInt(req.params.pos)
    // let newWord = req.body;
    // if(!newWord) return res.status(400).send('El parametro frase es obligatorio')
    // let letras = sentence.split('')
    // letras[pos-1] = newWord.frase;
    // let frase = letras.join('')
    // res.send({frase})

})

// Body , RAW
// {
//     "word":"anticonstitucionalismo"
// }
app.post('/api/palabras/',(req,res)=>{
    let newWord = req.body.word;
    if(!newWord) return res.status(400).send('El parametro frase es obligatorio')
    console.log(newWord)
    sentence = sentence.concat(` ${newWord}`)
    res.send({added:sentence})
})

// app.put('/api/palabras/:pos',(req,res)=>{
//     let newWord = req.body.word;
//     console.log(newWord);
//     res.send({new:newWord})

// })

app.put('/api/palabras/:pos',(req,res)=>{
    let newWord = req.body.word;
    console.log(newWord);
    if(isNaN(req.params.pos)) return res.status(400).send(`El parametro : ${req.params.pos}, debe ser un numero`)
    if( parseInt(req.params.pos)<1 || parseInt(req.params.pos)> sentence.split(' ').length ) return res.status(400).send(`El parametro : ${req.params.pos}, debe ser un numero entre 1 y ${sentence.length}`)    

    let newSentence = sentence.split(' ');
    let oldWord = newSentence[parseInt(req.params.pos)-1];
    newSentence[parseInt(req.params.pos)-1] = newWord;
    let sentenceArray = newSentence;
    sentence = newSentence.join(" ");

    console.log(oldWord);
    console.log(newWord);
    console.log(sentenceArray);
    console.log(sentence);
    res.send({previous:oldWord, new:newWord, allInArray:sentenceArray, all:sentence}); 
})


app.delete('/api/palabras/:pos',(req,res)=>{
    if(isNaN(req.params.pos)) return res.status(400).send(`El parametro : ${req.params.pos}, debe ser un numero`)
    if( parseInt(req.params.pos)<1 || parseInt(req.params.pos)> sentence.split(' ').length ) return res.status(400).send(`El parametro : ${req.params.pos}, debe ser un numero entre 1 y ${sentence.length}`)    
    let newSentence = sentence.split(' ');
    newSentence.splice(parseInt(req.params.pos)-1,1);
    sentence = newSentence.join(' ');
    res.send({message: "word deleted ".concat(sentence)})
})


// const sentence = "Hola mundo cómo están";

// app.get('/api/frase',(req,res)=>{
//     res.send({sentence})
// })

// app.get('/api/letras/:num',(req,res)=>{
//     if(isNaN(req.params.num)) return res.status(400).send({error:"El valor no es numérico"});
//     if(parseInt(req.params.num)<1||parseInt(req.params.num)>sentence.length) return res.status(404).send("No hay letra con este índice");
//     let num = parseInt(req.params.num);
//     res.send({letter:sentence.charAt(num-1)})
// })
