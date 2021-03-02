
module.exports = app => {
    const { exists } = app.api.validation


    const cadastrar_carro = async (req, res) => {
        const user = { ...req.body }
        console.log(user)

        try {

            exists(user.ref_marca, 'Marca não informada')
            exists(user.carro, 'Automóvel não informado')
            exists(user.descrição, 'Descrição não informada')
            exists(user.bx, 'Posição do banco não informada')
            exists(user.vx, 'Posição do volante em X não informada')
            exists(user.vangular, 'Posição angular do volante não informada')
            exists(user.px, 'Posição da pedaleira em X não informada')
            exists(user.pz, 'Posição da pedaleira em Z não informada')


            const userFromDB = await app.db('carros')
                .where({ descrição: user.descrição }).first()

            console.log("userFromDB")

            if (userFromDB) {
                res.json('Marca já cadastrada!')
            }

            else {
                app.db('carros')
                    .insert(user)
                    .then(_ => res.json(user), console.log("cadastrado"))
                    .catch(err => res.json('Falha'))
            }
        } catch (msg) {
            return res.json(msg)
        }


    }

    const consultar_carros = (req, res) => {
        console.log('Carros consultadas!')
        app.db('carros')
            // .select('carro', 'descrição')
            .then(users => res.json(users))
            .catch(err => res.json('falha'))
    }

    const consultar_carro = (req, res) => {
        car = req.params.carro
        console.log(car)

        try {
            exists(car, 'Selecione o automóvel para ser editado')

            app.db('carros')
                .where({ carro: car })
                .first()
                .then(user => res.json(user))
                .catch(err => res.json('falha'))

        } catch (msg) {
            return res.json(msg)
        }

    }



    const editar_carro =async (req, res) => {
        const user = { ...req.body }
        console.log(user)

        try {
            exists(user.edit, 'Selecione o automóvel para ser editado')
            exists(user.carro, 'Novo nome do automóvel não informado')
            exists(user.descrição, 'Descrição não informada')
            exists(user.bx, 'Posição do banco não informada')
            exists(user.vx, 'Posição do volante em X não informada')
            exists(user.vangular, 'Posição angular do volante não informada')
            exists(user.px, 'Posição da pedaleira em X não informada')
            exists(user.pz, 'Posição da pedaleira em Z não informada')
            exists(user.ref_marca, 'Selecione o automóvel para ser editado')

            const userFromDB = await app.db('carros')
                .where({ id: user.id }).first()

            console.log(userFromDB)


            if (userFromDB) {

                app.db('carros')
                    .update({
                        carro: user.carro,
                        descrição: user.descrição,
                        bx: user.bx,
                        vx: user.vx,
                        vangular: user.vangular,
                        px: user.px,
                        pz: user.pz,
                        ref_marca: user.ref_marca
                    })
                    .where({ id: user.id })
                    .then(_ => res.json(user))
                    .catch(err => res.json('falha'))


            } else {

                res.json('Marca não consta no banco de dados')

            }
        } catch (msg) {
            console.log("falha editar")
            return res.json(msg)

        }

    }

    // const cont_car = (req, res) => {
    //     app.db('carros')
    //         .count('id').first()
    //         .then(users => res.json(users))
    //         .catch(err => res.status(500).send(err))
    // }








    const remover_carro = (req, res) => {
        const user = { ...req.body }
        console.log(user)
        console.log("removendo")

        try {
            exists(user.descrição, 'Selecione o automóvel para ser removido')
            app.db('carros')
                .del()
                .where({ descrição: user.descrição })
                .then(_ => res.json('ok'))
                .catch(err => res.json('falha'))

        } catch (msg) {
            return res.json(msg)

        }

    }







    // const mov_car = async (req, res) => {

    //     const user = { ...req.body }

    //     console.log('Dados do user: ', user)
    //     // var serialport = require('serialport');

    //     // // list serial ports:
    //     // serialport.list(function (err, ports) {
    //     //     ports.forEach(function (port) {
    //     //         console.log(port.comName);
    //     //     });
    //     // });


    //     var serialport = require('serialport');// include the library 
    //     // get port name from the command line:
    //     var portName = 'COM3';
    //     var myPort = new serialport(portName, 9600);

    //     var Readline = serialport.parsers.Readline; // make instance of Readline parser
    //     var parser = new Readline(); // make a new parser to read ASCII lines
    //     myPort.pipe(parser); // pipe the serial stream to the parser
    //     // var data2 = 'rods';

    //     myPort.on('open', function (err) {
    //         console.log('Porta Serial On');

    //         setTimeout(function () {
    //             myPort.write(user.x1);
    //             console.log('Dado enviado: ' + user.x1);
    //         }, 2000);
    //         if (err) {
    //             console.log('Error when trying to open:');
    //         }

    //         // myPort.on('data', function (data) {
    //         //     console.log("received: " + data);

    //         //         myPort.close(showPortClose);

    //         // });



    //         parser.on('data', readSerialData);


    //     });


    //     //     myPort.on('open', showPortOpen);
    //     //     myPort.write ("Olá\n");


    //     //     myPort.on('close', showPortClose);
    //     //     myPort.on('error', showError);


    //     //     function showPortOpen() {
    //     //         console.log('port open. Data rate: ' + myPort.baudRate);
    //     //     }


    //     function readSerialData(data) {
    //         console.log('Dado recebido: ' + data);

    //         myPort.close(showPortClose);


    //     }
    //     // myPort.on('close', showPortClose);


    //     function showPortClose() {
    //         console.log('Porta fechada');
    //     }

    //     //     function showError(error) {
    //     //         console.log('Serial port error: ' + error);
    //     //     }

    //     // }

    // }






    return { cadastrar_carro, consultar_carros, consultar_carro, editar_carro, remover_carro }
}