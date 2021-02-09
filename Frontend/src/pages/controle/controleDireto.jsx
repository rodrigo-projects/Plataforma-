import React, { Component } from 'react'
import axios from 'axios'

export default class controleDireto extends Component {
    // componentDidMount(){
    //     const script = document.createElement("script");
    //     script.src='direto.js';
    //     script.async=true;
    //     document.body.appendChild(script);
    // }
    test() {
        // // user=document.getElementById('bx').value ;
        // axios.post(`http://localhost:3001/mov_car`, user).then(resp => {
        //     // const list = this.getUpdatedList(resp.data)
        //     // this.setState({ user: initialState.user, list }) 

        // })

           const user=document.getElementById('bx').value ;
        // const user = 20
        axios.post(`http://192.168.0.105:3001/led`, user).then(resp => {

        })
    }

    salvar() {
        const user = {
            conforto: '',
            sexo: '',
            idade: '',
            peso: '',
            altura: '',
            comp_p: '',
            comp_b: '',
            ref_car: 'Livre',
            bx: '',
            vx: '',
            vangular: '',
            px: '',
            pz: '',
        }
        if (document.getElementById('op1').checked == true) {
            user.conforto = 'confortável'

        }
        else if (document.getElementById('op2').checked == true) {
            user.conforto = 'aceitável'

        }
        else {
            user.conforto = 'incômodo'

        }


        if (document.getElementById('op4').checked == true) {
            user.sexo = 'masculino'

        }
        else {
            user.sexo = 'feminino'

        }
        user.idade = document.getElementById('idade').value
        user.peso = document.getElementById('peso').value
        user.altura = document.getElementById('altura').value
        user.comp_p = document.getElementById('comp_p').value
        user.comp_b = document.getElementById('comp_b').value

        ////////////////////////
        user.bx = document.getElementById('bx').value;
        user.vx = document.getElementById('vx').value;

        user.vangular = document.getElementById('vangular').value;

        user.px = document.getElementById('px').value;

        user.pz = document.getElementById('pz').value;

        axios.post(`http://localhost:3001/cad_av`, user).then(resp => {

        })
    }


    avRender() {

        return (




            <div>




                <button type="button" className="btn btn-info" data-toggle="modal" data-target="#modal-info">
                    Avaliar posição
                    </button>
                <div className="modal modal-info fade" id="modal-info">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span></button>
                                <h4 className="modal-title">Avaliar posição</h4>
                            </div>
                            <div className="modal-body">
                                <div className="radio">
                                    <label>
                                        <input type="radio" name="optionsRadios2" id="op1" defaultValue="option1" />
                                Confortável
                              </label>
                                </div>
                                <div className="radio">
                                    <label>
                                        <input type="radio" name="optionsRadios2" id="op2" defaultValue="option2" />
                                Aceitável
                              </label>
                                </div>
                                <div className="radio">
                                    <label>
                                        <input type="radio" name="optionsRadios2" id="op3" defaultValue="option3" />
                                Incômodo
                              </label>
                                </div>
                            </div>
                            <div className="modal-header">
                                <h4 className="modal-title">Dados do avaliador</h4>
                            </div>
                            <div className="col-xs-12 table-responsive">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>Sexo</th>
                                            <th>Idade</th>
                                            <th>Peso(kg)</th>
                                        </tr>
                                    </thead><tbody>
                                        <tr>
                                            <td>
                                                <div className="radio">
                                                    <label>
                                                        <input type="radio" name="optionsRadios" id="op4" defaultValue="masculino" />
                                        Masculino
                                      </label>
                                                </div>
                                                <div className="radio">
                                                    <label>
                                                        <input type="radio" name="optionsRadios" id="op5" defaultValue="feminino" />
                                        Feminino
                                      </label>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="box-body">
                                                    <div className="row">
                                                        <div className="col-xs-12">
                                                            <input id="idade" type="number" className="form-control" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="box-body">
                                                    <div className="row">
                                                        <div className="col-xs-12">
                                                            <input id="peso" type="number" className="form-control" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>Altura (m)</th>
                                            <th>Comprimento pernas (m)</th>
                                            <th>Comprimento Braços (m)</th>
                                        </tr>
                                    </tbody><tbody>
                                        <tr>
                                            <td>
                                                <div className="box-body">
                                                    <div className="row">
                                                        <div className="col-xs-12">
                                                            <input id="altura" type="number" className="form-control" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="box-body">
                                                    <div className="row">
                                                        <div className="col-xs-12">
                                                            <input id="comp_p" type="number" className="form-control" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="box-body">
                                                    <div className="row">
                                                        <div className="col-xs-12">
                                                            <input id="comp_b" type="number" className="form-control" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-outline pull-left" data-dismiss="modal">Cancelar</button>
                                <button onClick={this.salvar} type="button" className="btn btn-outline" data-dismiss="modal">Confirmar
                              avliação</button>
                            </div>
                        </div>
                        {/* /.modal-content */}
                    </div>
                    {/* /.modal-dialog */}
                </div>


            </div>

        )

    }



















    render() {
        return (
            <div>
                {/* Content Wrapper. Contains page content */}
                <div className="content-wrapper">
                    {/* Content Header (Page header) */}
                    <section className="content-header">
                        <h1>
                            Controle direto
    </h1>
                        <ol className="breadcrumb">
                            <li><a href="#"><i className="fa fa-laptop" /> Controle de posições &gt; Controle direto</a></li>
                        </ol>
                    </section>
                    <section className="content">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="box box-primary">
                                    <div className="box-header with-border">
                                        <h3 className="box-title">Inserir posições</h3>
                                        <div className="box-tools pull-right">
                                            <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus" />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="box-body">
                                        <div className="row">
                                            <div className="col-md-12">
                                                {/* Custom Tabs (Pulled to the right) */}
                                                <div className="nav-tabs-custom">
                                                    <ul className="nav nav-tabs pull-right">
                                                        <li className="active"><a href="#tab_1-1" data-toggle="tab">Banco</a></li>
                                                        <li><a href="#tab_2-2" data-toggle="tab">Volante</a></li>
                                                        <li><a href="#tab_3-3" data-toggle="tab">Pedaleira</a></li>
                                                        <li className="pull-left header"> Selecionar equipamento</li>
                                                    </ul>
                                                    <div className="tab-content">
                                                        <div className="tab-pane active" id="tab_1-1">
                                                            <div className="box box-primary">
                                                                <div className="box-header with-border">
                                                                    <h3 className="box-title">Eixo X - Banco</h3>
                                                                </div>
                                                                <div className="box-body">
                                                                    <div className="row">
                                                                        <div className="col-xs-6">
                                                                            <input type="number" id="bx" className="form-control" placeholder="Eixo X" />
                                                                        </div>
                                                                        {/* <div class="col-xs-6">
                            <input type="number" id="rbx" class="form-control" placeholder="Eixo X"
                              onchange="atualizaRangeRbx(this)">
                            <form class="multi-range-field my-5 pb-5">
                              <input id="multi1" class="multi-range" type="range" onchange="atualizaRbx(this)" />
                            </form>
                          </div> */}
                                                                    </div>
                                                                </div>
                                                                {/* /.box-body */}
                                                            </div>
                                                            {/* /.box */}
                                                        </div>
                                                        {/* /.tab-pane */}
                                                        <div className="tab-pane" id="tab_2-2">
                                                            <div className="box box-primary">
                                                                <div className="box-header with-border">
                                                                    <h3 className="box-title">Eixos X ; Angular - Volante</h3>
                                                                </div>
                                                                <div className="box-body">
                                                                    <div className="row">
                                                                        <div className="col-xs-6">
                                                                            <input type="number" id="vx" className="form-control" placeholder="Eixo X" />
                                                                        </div>
                                                                        {/* <div class="col-xs-6">
                            <input type="number" id="rvx" class="form-control" placeholder="Eixo X"
                            onchange="atualizaRangeRbx(this)">
                            <form class="multi-range-field my-5 pb-5">
                               <input id="multi1" class="multi-range" type="range" onchange="atualizaRbx(this)" />
                            </form>
                          </div> */}
                                                                        <div className="col-xs-6">
                                                                            <input type="number" id="vangular" className="form-control" placeholder="Eixo angular" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {/* /.box-body */}
                                                            </div>
                                                        </div>
                                                        {/* /.tab-pane */}
                                                        <div className="tab-pane" id="tab_3-3">
                                                            <div className="box box-primary">
                                                                <div className="box-header with-border">
                                                                    <h3 className="box-title">Eixos X ; Z - Pedaleira</h3>
                                                                </div>
                                                                <div className="box-body">
                                                                    <div className="row">
                                                                        <div className="col-xs-6">
                                                                            <input type="number" id="px" className="form-control" placeholder="Eixo X" />
                                                                        </div>
                                                                        <div className="col-xs-6">
                                                                            <input type="number" id="pz" className="form-control" placeholder="Eixo Z" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {/* /.box-body */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="box-body">
                                                        <div className="row">
                                                            <div className="col-xs-2">
                                                                <button className="btn btn-block btn-primary" type="button" onClick={this.test}>Mover</button>

                                                                {/* <button type="button" onclick="test()" className="btn btn-block btn-primary">Mover</button> */}
                                                            </div>
                                                            {this.avRender()}

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div></div></section>
                </div>


            </div>
        )
    }
}
