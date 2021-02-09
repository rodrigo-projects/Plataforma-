
var os = require('os');
var Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO
var LED = new Gpio(13, 'out'); //use GPIO pin 4, and specify that it is output


module.exports = app => {
    const { existsOrError, notExistsOrError, equalsOrError } = app.api.validation


    const joy = async (req) => {
        const user = { ...req.body }
        // console.log("-")

        console.log(user.degree)
    }


    const led = async (req, res) => {
        const user = { ...req.body }
        console.log(user)
        const a=0;

        // while (10>a) {
            setTimeout(function () {
                    LED.writeSync(1); //set pin state to 1 (turn LED on)
                
             }, 1000);
             LED.writeSync(0); //set pin state to 0 (turn LED off)

            //     a=a+1;
        // }
        // if (LED.readSync() === 0) { //check the pin state, if the state is 0 (or off)
        //     LED.writeSync(1); //set pin state to 1 (turn LED on)
        // } else {
        //     LED.writeSync(0); //set pin state to 0 (turn LED off)
        // }

        return res.json("ok")

    }

    const save_car = async (req, res) => {
        const user = { ...req.body }
        console.log(user)

        try {
            existsOrError(user.carro, 'Automóvel não informado')
            existsOrError(user.descrição, 'Descrição não informado')
            existsOrError(user.x1, 'Posição não informada')
            existsOrError(user.x2, 'Posição não informada')
            existsOrError(user.x3, 'Posição não informada')
            existsOrError(user.y1, 'Posição não informada')
            existsOrError(user.y2, 'Posição não informada')
            existsOrError(user.y3, 'Posição não informada')
            existsOrError(user.z1, 'Posição não informada')
            existsOrError(user.z2, 'Posição não informada')
            existsOrError(user.z3, 'Posição não informada')
            existsOrError(user.ref_marca, 'Marca não informada')


            const userFromDB = await app.db('carros')
                .where({ descrição: user.descrição }).first()
            if (!user.id) {
                notExistsOrError(userFromDB, 'Automóvel já cadastrado')
            }
        } catch (msg) {
            return res.status(400).send(msg)
        }

        app.db('carros')
            .insert(user)
            .then(_ => res.status(204).send())
            .catch(err => res.status(500).send(err))
    }

    const get_car = (req, res) => {
        app.db('carros')
            // .select('carro', 'descrição')
            .then(users => res.json(users))
            .catch(err => res.status(500).send(err))
    }

    const consult_car = (req, res) => {
        car = req.params.carro
        app.db('carros')
            .where({ carro: car })
            .first()
            .then(user => res.json(user))
            .catch(err => res.status(500).send(err))

    }

    const consult_mar = (req, res) => {
        mar = req.params.marca
        app.db('marcas')
            .where({ marca: mar })
            .first()
            .then(user => res.json(user))
            .catch(err => res.status(500).send(err))

    }

    const save_mar = async (req, res) => {
        const user = { ...req.body }
        console.log(user)

        try {
            existsOrError(user.marca, 'Marca não informado')
            existsOrError(user.descrição, 'Descrição não informado')

            const userFromDB = await app.db('marcas')
                .where({ marca: user.marca }).first()
            if (!user.id) {
                notExistsOrError(userFromDB, 'Marca já cadastrado')
            }
        } catch (msg) {
            return res.status(400).send(msg)
        }

        app.db('marcas')
            .insert(user)
            .then(_ => res.status(204).send())
            .catch(err => res.status(500).send(err))
    }

    const get_mar = (req, res) => {
        app.db('marcas')
            // .select('marca', 'descrição')
            .then(users => res.json(users))
            .catch(err => res.status(500).send(err))
    }

    const cont_car = (req, res) => {
        app.db('carros')
            .count('id').first()
            .then(users => res.json(users))
            .catch(err => res.status(500).send(err))
    }


    const edit_mar = (req, res) => {
        const user = { ...req.body }

        console.log(user)
        app.db('marcas')
            .update({ marca: user.marca, descrição: user.descrição })
            .where({ marca: user.edit })
            .then(_ => res.status(204).send())
            .catch(err => res.status(500).send(err))
    }

    const edit_car = (req, res) => {
        const user = { ...req.body }

        console.log(user)
        console.log('carro editado!')
        app.db('carros')
            .update({
                carro: user.carro,
                descrição: user.descrição,
                x1: user.x1,
                x2: user.x2,
                x3: user.x3,
                y1: user.y1,
                y2: user.y2,
                y3: user.y3,
                z1: user.z1,
                z2: user.z2,
                z3: user.z3
            })
            .where({ carro: user.edit })
            .then(_ => res.status(204).send())
            .catch(err => res.status(500).send(err))
    }

    const remover_mar = (req, res) => {
        const user = { ...req.body }

        console.log(user)
        console.log('Marca removida!')
        app.db('marcas')
            .del()
            .where({ marca: user.marca })
            .then(_ => res.status(204).send())
            .catch(err => res.status(500).send(err))
    }

    const remover_car = (req, res) => {
        const user = { ...req.body }

        console.log(user)
        console.log('Marca removida!')
        app.db('carros')
            .del()
            .where({ carro: user.carro })
            .then(_ => res.status(204).send())
            .catch(err => res.status(500).send(err))
    }





    const save_av = async (req, res) => {

        const user = { ...req.body }
        console.log(user)

        try {
            existsOrError(user.conforto, 'Automóvel não informado')
            existsOrError(user.sexo, 'Descrição não informado')
            existsOrError(user.idade, 'Posição não informada')
            existsOrError(user.peso, 'Posição não informada')
            existsOrError(user.altura, 'Posição não informada')
            existsOrError(user.comp_p, 'Posição não informada')
            existsOrError(user.comp_b, 'Posição não informada')


        } catch (msg) {
            return res.status(400).send(msg)
        }

        app.db('avaliação')
            .insert(user)
            .then(_ => res.status(204).send())
            .catch(err => res.status(500).send(err))
    }



    const get_av = (req, res) => {
        app.db('avaliação')
            // .select('marca', 'descrição')
            .then(users => res.json(users))
            .catch(err => res.status(500).send(err))
    }

    ////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////// 
    ////////////////////////////////////////////////////////
    const mov_car = async (req, res) => {

        const user2 = { ...req.body }
        const user = { x1: 360, x2: 0 }
        console.log('Dados do user: ', user)
        // var serialport = require('serialport'); 

        // // list serial ports:
        // serialport.list(function (err, ports) {
        //     ports.forEach(function (port) {
        //         console.log(port.comName);
        //     });
        // });


        var serialport = require('serialport');// include the library 
        // get port name from the command line:
        var portName = 'COM3';
        var myPort = new serialport(portName, 9600);

        var Readline = serialport.parsers.Readline; // make instance of Readline parser
        var parser = new Readline(); // make a new parser to read ASCII lines
        myPort.pipe(parser); // pipe the serial stream to the parser
        // var data2 = 'rods';

        myPort.on('open', function (err) {
            console.log('Porta Serial On');

            setTimeout(function () {
                myPort.write(user.x1 + '\n' + user.x2);


                console.log('Dado enviado: ' + user.x1);
            }, 2000);
            if (err) {
                console.log('Error when trying to open:');
            }


            // myPort.on('data', function (data) {
            //     console.log("received: " + data);

            //         myPort.close(showPortClose);

            // });

            parser.on('data', readSerialData);

        });




        //     myPort.on('open', showPortOpen);
        //     myPort.write ("Olá\n");


        //     myPort.on('close', showPortClose);
        //     myPort.on('error', showError);


        //     function showPortOpen() {
        //         console.log('port open. Data rate: ' + myPort.baudRate);
        //     }


        function readSerialData(data) {
            console.log('Dado recebido: ' + data);
            myPort.close(showPortClose);


        }
        // myPort.on('close', showPortClose);


        function showPortClose() {
            console.log('Porta fechada');
        }

        //     function showError(error) {
        //         console.log('Serial port error: ' + error);
        //     }

        // }

    }


    const signin = async (req, res) => {

        log = req.params.log
        console.log(log)
        // 'use strict';
        // var ifaces = os.networkInterfaces();
        // Object.keys(ifaces).forEach(function (ifname) {
        //   var alias = 0;

        //   ifaces[ifname].forEach(function (iface) {
        //     if ('IPv4' !== iface.family || iface.internal !== false) {
        //       // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
        //       return;
        //     }

        //     if (alias >= 1) {
        //       // this single interface has multiple ipv4 addresses
        //       console.log(ifname + ':' + alias, iface.address);
        //     } else {
        //       // this interface has only one ipv4 adress
        //       console.log(ifname, iface.address);
        //     }
        //     ++alias;
        //   });
        // });

        if (!log) {
            console.log('erro')
            return res.status(400).send("Informe usuário e senha")
        }
        if (log == "ifmg@123") {
            console.log('aceito')
            res.json('admin')
        }
        else {
            console.log('negado')
            res.json('negado')
        }
    }



    return { led, joy, signin, mov_car, save_car, get_car, save_mar, get_mar, cont_car, edit_mar, edit_car, remover_mar, remover_car, consult_car, consult_mar, save_av, get_av }
}