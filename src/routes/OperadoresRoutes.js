const express = require('express');
const router =  express.Router();

const Operadores = require('../models/operadores');


router.get('/', async (req,res) =>{
   const oper = await Operadores.find();
   console.log(oper);
   res.json(oper);
});
//reques es toda la info que envia el navegador al servidor
router.post('/', async(req, res) =>{
    const oper = new Operadores(req.body);
    //console.log(new Tasks());
   // console.log(new Tasks(req.body));
   //console.log(task);
    await oper.save();
    //res.json('recibido');
    res.json({
        status: 'Operador Guardado'
    });
});

router.get('/:id', async (req,res) =>{
    const oper = await Operadores.findById(req.params.id);
    res.json(oper);
});

router.put('/:id', async (req,res) =>{
    //console.log(req.params);
    //req.params: ID del objeto a actualizar en la base de datos
    //req.body: Son los datos que queremos actualizar 
    await Operadores.findByIdAndUpdate(req.params.id, req.body);

    res.json({
        status: 'Operador actualizado'
    });
});

router.delete('/:id', async(req, res)=>{
    await Operadores.findByIdAndRemove(req.params.id);

    res.json({
        status: 'Operador actualizado'
    });
});

module.exports = router;