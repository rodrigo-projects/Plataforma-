module.exports = app => {



    app.route('/led')
        .post(app.api.user.led)

    // app.route('/validate')
    //     .get(app.api.auth.validate)

    app.route('/signin:log')
        .get(app.api.user.signin)


    //// Marcas

    app.route('/cadastrar_marca')
        .post(app.api.db_marcas.cadastrar_marca)

    app.route('/consultar_marcas')
        .get(app.api.db_marcas.consultar_marcas)

    app.route('/consultar_unica_marca/:marca')
        .get(app.api.db_marcas.consultar_unica_marca)

    app.route('/editar_marca')
        .post(app.api.db_marcas.editar_marca)

    app.route('/remover_marca')
        .post(app.api.db_marcas.remover_marca)




    //// Carros


    app.route('/cadastrar_carro')
        .post(app.api.db_carros.cadastrar_carro)

    app.route('/consultar_carros')
        .get(app.api.db_carros.consultar_carros)


    app.route('/consultar_carro/:carro')
        .get(app.api.db_carros.consultar_carro)

    app.route('/editar_carro')
        .post(app.api.db_carros.editar_carro)


    app.route('/remover_carro')
        .post(app.api.db_carros.remover_carro)

    ////Organizar
    // app.route('/cad_car')
    //     .post(app.api.user.save_car)
    //     .get(app.api.user.get_car) 



    app.route('/cont_car')
        .get(app.api.user.cont_car)


    app.route('/mov_car')
        .post(app.api.user.mov_car)









    //////// Avaliações

    app.route('/cad_av')
        .post(app.api.db_av.save_av)
        .get(app.api.db_av.get_av)

    app.route('/joy')
        .post(app.api.user.joy)



} 