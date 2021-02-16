import React, { Component } from 'react'


import ReactNipple from 'react-nipple';
import DebugView from 'react-nipple/lib/DebugView';
import axios from 'axios'

const initialState = {
    user: { marca: '', descrição: '' },
    user2: {
        carro: '',
        descrição: '',
        bx: '',
        vx: '',
        vangular: '',
        px: '',
        pz: '',
        ref_marca: '',
    },
    list: [],
    list2: []
}

export default class posicionarVeiculo extends Component {
    state = { ...initialState }




    componentWillMount() {

        axios.get(`http://localhost:3001/consultar_carros`)
            .then(resp => {
                this.setState({ list2: resp.data })
            })

    }


    // renderJoy() {

    //     return (<div>

    //         <ReactNipple
    //             options={{ mode: 'static', position: { top: '50%', left: '50%' }, color: "blue" }}
    //             style={{
    //                 outline: '1px dashed blue',
    //                 color: 'blue',
    //                 width: 250,
    //                 height: 250,
    //                 position: 'relative'
    //             }}
    //             onStart={this.handleEvent}
    //             onEnd={this.handleEvent}
    //             onMove={this.handleEvent}
    //             onDir={this.handleEvent}
    //             onPlain={this.handleEvent}
    //             onShown={this.handleEvent}
    //             onHidden={this.handleEvent}
    //             onPressure={this.handleEvent}
    //         />
    //         <DebugView data={this.state.data} />

    //     </div>)


    // }
    // componentDidMount() {
    //     this.timerInterval = setInterval(this.tick.bind(this), 2000);
    //   }

    //   tick= (evt, data) =>  {
    //     axios.post(`http://localhost:3001/joy`, this.state.data.angle)
    // }

    //   componentWillUnmount() {
    //     clearInterval(this.timerInterval);
    //   }
    // handleEvent = (evt, data) => {
    //     // console.log(user);
    //     // axios.post(`http://localhost:3001/joy2`,data.distance)
    //     this.setState({ data });

    // };

    getUpdatedList2(user2) {
        const list2 = this.state.list2
        // const list = this.state.list.filter(u => u.id !== user.id)
        list2.unshift(user2)
        return list2
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


    att(e) {
        var select = document.getElementById('ref_carro');
        this.setState({ bx: this.state.list2[select.selectedIndex].bx })
        this.setState({ vx: this.state.list2[select.selectedIndex].vx })
        this.setState({ vangular: this.state.list2[select.selectedIndex].vangular })
        this.setState({ px: this.state.list2[select.selectedIndex].px })
        this.setState({ pz: this.state.list2[select.selectedIndex].pz })
    }


    render() {
        const { bx, vx, vangular, px, pz } = this.state
        return (
            <div>
                <div className="content-wrapper">
                    <section className="content-header">
                        <h1>Posicionar</h1>
                        <ol className="breadcrumb">
                            <li><a href="#"><i className="fa fa-files-o" /> Banco de dados - Cadastrar - Marca</a></li>
                        </ol>
                    </section>
                    <section className="content">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="box box-primary">
                                    <div className="box-header with-border">

                                        <h3 className="box-title">Controle</h3>
                                    </div>
                                    <div>



                                        <div className="box-body">
                                            <div className="form-group">
                                                <div id="app" className="form-group">
                                                    <label>Automóvel</label>
                                                    <select  class="ls-select" id="ref_carro" className="form-control select2"
                                                        onChange={e => this.att(e)}
                                                        style={{ width: '100%' }}>
                                                  
                                                        {this.state.list2.map((option) => (
                                                            <option value={option.carro}>{option.carro}</option>
                                                        ))}
                                                          <option value="" ></option> 
                                                    </select>

                                                </div>

                                                <br />
                                                <label>Eixo X - Banco</label>
                                                <br />
                                                <div className="box-body">
                                                    <div className="row">
                                                        <div className="col-xs-4">
                                                            <input id="bx" type="number" className="form-control" placeholder="Eixo X"
                                                                disabled value={bx}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <br />
                                                <label>Eixos X ; angular - Volante</label>
                                                <br />
                                                <div className="box-body">
                                                    <div className="row">
                                                        <div className="col-xs-4">
                                                            <input disabled id="vx" type="number" className="form-control" placeholder="Eixo X" 
                                                            value={vx} />
                                                        </div>
                                                        <div className="col-xs-4">
                                                            <input disabled id="vangular" type="number" className="form-control" placeholder="angular" value={vangular} />
                                                        </div>
                                                    </div>
                                                </div>
                                                <br />
                                                <label>Eixos X ; Z - Pedaleira</label>
                                                <br />
                                                <div className="box-body">
                                                    <div className="row">
                                                        <div className="col-xs-4">
                                                            <input disabled id="px" type="number" className="form-control" placeholder="Eixo X" value={px}/>
                                                        </div>
                                                        <div className="col-xs-4">
                                                            <input disabled id="pz" type="number" className="form-control" placeholder="Eixo Z" value={pz}/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="box-body">
                                                <div className="row">
                                                    <div className="col-xs-2">
                                                        <button className="btn btn-block btn-primary" type="button" onClick={this.mover}>Mover</button>

                                                    </div>
                                                    {this.avRender()}

                                                </div>
                                            </div>



                                        </div>





                                        {/* {this.renderJoy()} */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>


            </div>
        )
    }

}
