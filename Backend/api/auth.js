const { authSecret } = require('../.env')
const jwt = require('jwt-simple')

module.exports = app => {


    const signin = async (req, res) => {

        log = req.params.log
        console.log(log) 
        

        if (!log ) {
            console.log('erro')
            return res.status(400).send("Informe usuário e senha")
        }
           if (log == "ifmg123") {
            console.log('validado!')


            const now = Math.floor(Date.now() / 1000)
            
                const payload = {
                    admin: 'admin',
                    iat: now,
                    exp: now + (60 * 2),
                    token: ''
                }
                payload.token = jwt.encode(payload, authSecret)
        
                res.json({
                    ...payload,
                })
                console.log(payload)
                
                // res.json('admin')       

         } 
        else{ 
            console.log('negado')
            res.json('nok')       
         }
    }


   


    const validate = async (req,res) => {
        log = req.params
        log='ok'
        console.log('fui chamado!',log)
        res.send(log)
    }

    return { signin, validate }
}