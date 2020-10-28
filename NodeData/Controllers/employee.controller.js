const express = require ('express');
var router = express.Router();
var ObjectId = require ('mongoose').Types.ObjectId;
var {Product} = require('../Models/employee.model.js');

router.post('/',(req, res) =>
{
   var pro = new Product({
       name : req.body.name,
       description : req.body.description,
       price : req.body.price,
       imageUrl:req.body.imageUrl,
   });
   pro.save((err,doc) =>
   {
       if(!err)
       {
           res.send(doc);
       }
       else
       {
           console.log('Error occures to save the employee'+ JSON.stringify(err,undefined,2));
       }
   });
});

router.get('/',(req, res) =>
{
    Product.find((err, docs) =>
    {
        if(!err)
        {
            res.send(docs);
        }
        else
        {
            console.log('Error in retriving employees' + JSON.stringify(err,undefined,2));
        }
    });
});

// router.get('/:id',(req, res) =>
// {
//     if(!ObjectId.isValid(req.params.id))
//         return res.status(400).send('No record with given id : ${req.params.id}');

//         Employee.findById(req.params.id, (err, doc) =>
//     {
//         if(!err)
//         {
//             res.send(doc);
//         }
//         else
//         {
//             console.log('Error in retriving employee' + JSON.stringify(err,undefined,2));
//         }
//     });
// });

// router.put('/:id',(req, res) =>
// {
//     if(!ObjectId.isValid(req.params.id))
//         return res.status(400).send('No record with given id : ${req.params.id}');

//     var emp = 
//     {
//        name : req.body.name,
//        email : req.body.email,
//        contact : req.body.contact,
//    }
//    Employee.findByIdAndUpdate(req.params.id, { $set : emp }, {new : true}, (err, doc) => 
//     {

//         if(!err)
//         {
//             res.send(doc);
//         }
//         else
//         {
//             console.log('Error in employee update' + JSON.stringify(err,undefined,2));
//         }
//     });


// });

// router.delete('/:id',(req, res) =>
// {
//     if(!ObjectId.isValid(req.params.id))
//     return res.status(400).send('No record with given id : ${req.params.id}');

//     Employee.findByIdAndRemove(req.params.id, (err, doc) =>
//     {
//         if(!err)
//         {
//             res.send(doc);
//         }
//         else
//         {
//             console.log('Error in Deleting employee' + JSON.stringify(err,undefined,2));
//         }
//     });

// });

module.exports = router;
