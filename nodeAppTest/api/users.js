const db = require('../models');
const {Router} = require('express');
const router = Router();

/*router.get('/',(req,res)=>{
    res.send({Title:'hello Users'});
  });*/
  //metodo get users
  router.get('/',async(req,res)=>{
    try {
        let users = await db.User.findAll();
        res.status(200).send({Data:users,msg:'user all'})
        
    } catch (error) {
        res.status(400).send({Data:null,msg:'user error'})
    }
  });

  router.get('/:id', async(req,res)=>{
    try{
    let id = req.params.id;
    let user =await db.User.findByPk(id);
    res.status(200).send({user});

    }catch(error) {
        res.status(400).send({Data:null,msg:'user error'})
        console.log(error)
    }

  });

  //metodo put - actualizar 
  router.put('/:id', async(req, res)=>{
    try {
        let id = req.params.id;
        let {name, email, password} = req.body;
        let user = await db.User.update(
                {name,email,password},{where:{id}}
        )
        res.status(200).send({Data:user,msg:'user updated'})  
    } catch (error) {
        res.status(400).send({Data:null,msg:'user updated error'});
    }
  });

  // metodo delete

  router.delete('/:id', async(req,res)=>{
    try {
        let id = req.params.id;
        let user = await db.User.destroy({
            where:{id}
        });
        res.status(200).send({Data:user,msg:'user delete'})
        
    } catch (error) {
        console.log(error)
        res.status(400).send({Data:null,msg:'user delete error'})
    }
  });


  
  //metodo post
  router.post('/',async(req,res)=>{
   /* let name = req.body.name;
    let email = req.body.email;
    let password = req.body.password;*/
    let{name,email,password} = req.body;
    try{
        await db.User.create({
            name,
            email,
            password,
        });
        res.status(200).send('Usuario creado');
    }catch(error){
        res.status(400).send('Usuario no pudo ser creado');
    }
  });
  module.exports = router