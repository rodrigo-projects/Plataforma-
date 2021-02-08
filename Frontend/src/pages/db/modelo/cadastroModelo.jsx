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
    ref_marca: '', },
    list: [],
    list2:[]
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

    cadastro_modelo() {

        const user2 = {
            carro: '', 
            descrição: '',
            bx: '',
            vx: '',
            vangular: '',
            px: '',
            pz: '',
            ref_marca: '',
        }
        user2.carro = document.getElementById('carro').value; 

        user2.descrição = document.getElementById('descrição').value;
        user2.bx = document.getElementById('bx').value;
        user2.vx = document.getElementById('vx').value;

        user2.vangular = document.getElementById('vangular').value;

        user2.px = document.getElementById('px').value;

        user2.pz = document.getElementById('pz').value;

        user2.ref_marca = document.getElementById('ref_marca').value;




        // url = sessionStorage.url
        // const user = this.state.user
        axios.post(`http://localhost:3001/cadastrar_carro`, user2)
            .then(resp => {
                if(resp.data.carro){
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
        const list2 = this.state.list2
        // const list = this.state.list.filter(u => u.id !== user.id)
        list2.unshift(user2)
        return list2
    }

    updateField(event) {
        const user2 = { ...this.state.user2 }
        user2[event.target.carro] = event.target.value
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
                                            <input id="carro" className="form-control" type="text" />
                                            <br />
                                            <label>Descrição</label>
                                            <br />
                                            <textarea id="descrição" className="form-control" rows={3} defaultValue={""} />
                                            <br />
                                            <br />
                                            <label>Eixo X - Banco</label>
                                            <br />
                                            <div className="box-body">
                                                <div className="row">
                                                    <div className="col-xs-4">
                                                        <input id="bx" type="number" className="form-control" placeholder="Eixo X" />
                                                    </div>
                                                </div>
                                            </div>
                                            <br />
                                            <label>Eixos X ; angular - Volante</label>
                                            <br />
                                            <div className="box-body">
                                                <div className="row">
                                                    <div className="col-xs-4">
                                                        <input id="vx" type="number" className="form-control" placeholder="Eixo X" />
                                                    </div>
                                                    <div className="col-xs-4">
                                                        <input id="vangular" type="number" className="form-control" placeholder="angular" />
                                                    </div>
                                                </div>
                                            </div>
                                            <br />
                                            <label>Eixos X ; Z - Pedaleira</label>
                                            <br />
                                            <div className="box-body">
                                                <div className="row">
                                                    <div className="col-xs-4">
                                                        <input id="px" type="number" className="form-control" placeholder="Eixo X" />
                                                    </div>
                                                    <div className="col-xs-4">
                                                        <input id="pz" type="number" className="form-control" placeholder="Eixo Z" />
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
