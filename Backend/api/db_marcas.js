
module.exports = app => {

    const { exists } = app.api.validation

    const cadastrar_marca = async (req, res) => {
        const user = { ...req.body }
        console.log("recebido:")
        console.log(user)

        try {

            exists(user.marca, 'Marca não encontrada')
            exists(user.descrição, 'Descrição não encontrada')

            const userFromDB = await app.db('marcas')
                .where({ marca: user.marca }).first()

            // console.log(userFromDB)

            if (userFromDB) {
                res.json('Marca já cadastrada!')
            }
            else {

                app.db('marcas')
                    .insert(user)
                    .then(_ => 
                        console.log("enviado:"),
                        console.log(user),

                        res.json(user))
                    .catch(err => res.json('Falha'))
            }
        } catch (msg) {
            return res.json(msg)
        }



    }





    const consultar_marcas = (req, res) => {
        console.log('Marcas consultadas!')
        app.db('marcas')
            // .select('marca', 'descrição')
            .then(users => res.json(users))
            .catch(err => res.json('falha'))

    }


    const consultar_unica_marca = (req, res) => {
        mar = req.params.marca
        console.log(mar)
        app.db('marcas')
            .where({ marca: mar })
            .first()
            .then(user => res.json(user))
            // .catch(err => res.status(500).send(err))
            .catch(err => res.json('Marca não encontrada!'))

    }

    const editar_marca = async (req, res) => {


        const user = { ...req.body }
        console.log(user)

        try {
            exists(user.edit, 'Marca para editar não informada')
            exists(user.marca, 'Novo nome da marca não informado')
            exists(user.descrição, 'Nova descrição não informada')




            const userFromDB = await app.db('marcas')
                .where({ marca: user.edit }).first()

            console.log(userFromDB)

            if (userFromDB) {
                app.db('marcas')
                    .update({ marca: user.marca, descrição: user.descrição })
                    .where({ marca: user.edit })
                    .then(_ => res.json('ok'))
                    .catch(err => res.json('falha'))
            }
            else {

                res.json('Marca não consta no banco de dados')

            }




        } catch (msg) {
            return res.json(msg)
        }


    }



    const remover_marca = (req, res) => {
        const user = { ...req.body }
        console.log(user)
        try {
            exists(user.marca, 'Marca não informada')
            app.db('marcas')
                .del()
                .where({ marca: user.marca })
                .then(_ => res.json('ok'))
                .catch(err => res.json('falha'))

        } catch (msg) {
            return res.json(msg)

        }

    }





    return { cadastrar_marca, consultar_marcas, consultar_unica_marca, editar_marca, remover_marca }
}