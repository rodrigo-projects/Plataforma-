import React, { Component } from 'react'
import axios from 'axios';
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
export default class cadastroModelo extends Component {
    state = { ...initialState }

    componentWillMount() {

        axios.get(`http://localhost:3001/consultar_carros`)
            .then(resp => {
                this.setState({ list2: resp.data })
            })
        axios.get(`http://localhost:3001/consultar_marcas`)
            .then(resp => {
                this.setState({ list: resp.data })
            })
    }

    load(user2) {
        this.setState({ user2 })
    }



    cadastro_modelo() {

        const user2 = this.state.user2
        // const metodo = user2.id ? false : true




        axios.post(`http://localhost:3001/cadastrar_carro`, user2)
            .then(resp => {
                if (resp.data.carro) {
                    const list2 = this.getUpdatedList2(resp.data)
                    this.setState({ user2: initialState.user2, list2 })
                }
            })

    }

    remover(user2) {

        axios.post(`http://localhost:3001/remover_carro`, user2)
            .then(resp => {
                const list2 = this.state.list2.filter(u => u !== user2)
                this.setState({ list2 })
            })

    }

    getUpdatedList2(user2) {
        // const list2 = this.state.list2
        const list2 = this.state.list2.filter(u => u.id !== user2.id)
        list2.unshift(user2)
        return list2
    }

    updateField(event) {
        const user2 = { ...this.state.user2 }
        user2[event.target.id] = event.target.value
        this.setState({ user2 })
    }


    renderTable() {
        return (
            <div className="col-md-6">
                {/* general form elements */}
                <div className="box box-primary">
                    <div className="box-header with-border">
                        <h3 className="box-title">Tabela</h3>
                    </div>
                    <div className="box-body">
                        {/* <div className="table-responsive"> */}
                        <table id="example2" class="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th>Marca</th>
                                    <th>Modelo</th>
                                    <th>Descrição</th>
                                    <th>Banco</th>
                                    <th>Volante</th>
                                    <th>Pedaleira</th>
                                    <th>Editar</th>
                                    <th>Remover</th>



                                </tr>
                            </thead>
                            <tbody >
                                {this.renderRows()}
                            </tbody>
                        </table>
                        {/* </div> */}
                    </div> </div> </div>
        )
    }

    renderRows() {
        return this.state.list2.map(user2 => {
            return (
                < tr key={user2.id} >

                    <td>{user2.ref_marca}</td>
                    <td>{user2.carro}</td>
                    <td>{user2.descrição}</td>
                    <td>{user2.bx}</td>
                    <td>{user2.vx},{user2.vangular}º</td>
                    <td>{user2.px},{user2.pz}</td>




                    <td>
                        <button className="btn btn-warning"
                            onClick={() => this.load(user2)}>
                            <i className="fa fa-pencil">

                            </i>
                        </button>
                    </td>
                    <td>
                        <button className="btn btn-danger ml-2"
                            onClick={() => this.remover(user2)}>
                            <i className="fa fa-trash">
                            </i>
                        </button>
                    </td>
                </tr >)
        })
    }













    render() {
        return (
            <div>
                {/* Content Wrapper. Contains page content */}
                <div className="content-wrapper">
                    {/* Content Header (Page header) */}
                    <section className="content-header">
                        <h1>Cadastros</h1>
                        <ol className="breadcrumb">
                            <li><a href="#"><i className="fa fa-files-o" /> Banco de dados - Cadastrar - Veículo</a></li>
                        </ol>
                    </section>
                    <section className="content">
                        <div className="row">
                            {/* left column */}
                            <div className="col-md-6">
                                {/* general form elements */}
                                <div className="box box-primary">
                                    <div className="box-header with-border">
                                        <h3 className="box-title">Dados do veículo</h3>
                                    </div>
                                    {/* /.box-header */}
                                    {/* form start */}
                                    <div className="box-body">
                                        <div className="form-group">
                                            <div id="app" className="form-group">
                                                <label>Marca</label>
                                                <select id="ref_marca" className="form-control select2" style={{ width: '100%' }}>

                                                    {this.state.list.map((option) => (
                                                        <option value={option.marca}>{option.marca}</option>
                                                    ))}
                                                </select>

                                            </div>
                                            <label>Modelo</label>
                                            <br />
                                            <input className="form-control" type="text"
                                                carro="carro"
                                                value={this.state.user2.carro}
                                                onChange={e => this.updateField(e)}
                                            />
                                            <br />
                                            <label>Descrição</label>
                                            <br />
                                            <textarea className="form-control" rows={3} defaultValue={""}
                                                descrição="descrição"
                                                value={this.state.user2.descrição}
                                                onChange={e => this.updateField(e)}
                                            />
                                            <br />
                                            <br />
                                            <label>Eixo X - Banco</label>
                                            <br />
                                            <div className="box-body">
                                                <div className="row">
                                                    <div className="col-xs-4">
                                                        <input type="number" className="form-control" placeholder="Eixo X"
                                                            bx="bx"
                                                            value={this.state.user2.bx}
                                                            onChange={e => this.updateField(e)}
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
                                                        <input type="number" className="form-control" placeholder="Eixo X"
                                                            vx="vx"
                                                            value={this.state.user2.vx}
                                                            onChange={e => this.updateField(e)}
                                                        />
                                                    </div>
                                                    <div className="col-xs-4">
                                                        <input type="number" className="form-control" placeholder="angular"
                                                            vangular="vangular"
                                                            value={this.state.user2.vangular}
                                                            onChange={e => this.updateField(e)}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <br />
                                            <label>Eixos X ; Z - Pedaleira</label>
                                            <br />
                                            <div className="box-body">
                                                <div className="row">
                                                    <div className="col-xs-4">
                                                        <input type="number" className="form-control" placeholder="Eixo X"
                                                            px="px"
                                                            value={this.state.user2.px}
                                                            onChange={e => this.updateField(e)}
                                                        />
                                                    </div>
                                                    <div className="col-xs-4">
                                                        <input type="number" className="form-control" placeholder="Eixo Z"
                                                            pz="pz"
                                                            value={this.state.user2.pz}
                                                            onChange={e => this.updateField(e)}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-6">
                                            <button type="submit" onClick={e => this.cadastro_modelo(e)} className="btn btn-block btn-primary">cadastrar</button>
                                        </div>
                                    </div>
                                    {/* /.box-body */}

                                </div>
                            </div>
                            <section>   {this.renderTable()}</section>
                        </div>


                    </section>


                </div>
            </div>


        )
    }
}
