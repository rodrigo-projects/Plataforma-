
var os = require('os');
module.exports = app => {
    const { exists } = app.api.validation



    const save_av = async (req, res) => {

        const user = { ...req.body }
        console.log(user) 

        try {
            exists(user.conforto, 'Conforto não informado')
            exists(user.ref_car, 'Automóvel não informado')
            exists(user.sexo, 'Sexo não informado')
            exists(user.idade, 'Idade não informada')
            exists(user.peso, 'Peso não informada')
            exists(user.altura, 'Altura não informada')
            exists(user.comp_p, 'Comprimento da perna não informado')
            exists(user.comp_b, 'Comprimento do braço não informado') 

            app.db('avaliação2')
            .insert(user)
            .then(_ => res.json(user))
            .catch(err =>res.json("falha"))
        } catch (msg) {

            return res.json()
        }

       
    }



    const get_av = (req, res) => {
        app.db('avaliação2')
            // .select('marca', 'descrição')
            .then(users => res.json(users))
            .catch(err => res.status(500).send(err))
    }


   



    return {save_av, get_av }
}