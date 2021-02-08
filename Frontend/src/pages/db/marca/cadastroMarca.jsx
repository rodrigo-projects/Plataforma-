import React, { Component } from 'react'
import './seta.css'
import axios from 'axios'
import Swal from 'sweetalert2'

const initialState = {
    user: { marca: '', descrição: '' },
    list: []
} 




export default class cadastroMarca extends Component {
    state = { ...initialState }

    componentWillMount() {
        axios.get(`http://localhost:3001/consultar_marcas`)
            .then(resp => {
                this.setState({ list: resp.data })
            })

    }
    clear() {
        this.setState({ user: initialState.user })
    }

    editar_m() {
        const user = {
            marca: '',
            descrição: '',
        }
        user.marca = document.getElementById('marca').value;

        user.descrição = document.getElementById('descrição').value;

        // url = sessionStorage.url
        axios.put(`http://localhost:3001/editar_marca`, user)
            .then(resp => {
                const list = this.getUpdatedList(resp.data)
                this.setState({ user: initialState.user, list })

            })
    }
    cadastro_m() {

        const user = {
            marca: '',
            descrição: '',
        }
        user.marca = document.getElementById('marca').value;

        user.descrição = document.getElementById('descrição').value;

        // url = sessionStorage.url
        // const user = this.state.user
        axios.post(`http://localhost:3001/cadastrar_marca`, user)
            .then(resp => {
                if(resp.data.marca){
                const list = this.getUpdatedList(resp.data)
                this.setState({ user: initialState.user, list })
                Swal.fire({
                    title: 'Cadastrado',
                    text: 'Cadastro efetuado',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  })
                }else{
                    Swal.fire({
                        title: 'Erro',
                        text: 'Cadastro não efetuado',
                        icon: 'error',
                        confirmButtonText: 'Ok'
                      }) 
                }
            })

    }


    remover(user) {

        axios.post(`http://localhost:3001/remover_marca`, user)
            .then(resp => {
                const list = this.state.list.filter(u => u !== user)
                this.setState({ list })
                Swal.fire({
                    title: 'Excluído',
                    text: 'Banco de dados',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  })
            })

    }

    getUpdatedList(user) {
        const list = this.state.list
        // const list = this.state.list.filter(u => u.id !== user.id)
        list.unshift(user)
        return list
    }

    updateField(event) {
        const user = { ...this.state.user }
        user[event.target.marca] = event.target.value
        this.setState({ user })
    }

    rods() {
        return (
            <div>
                <div className="box-body">
                    <div className="form-group">
                        <label>Marca</label>

                        <input id="marca" type="text" className="form-control"
                            marca="marca"
                            // value={this.state.user.marca}
                            onChange={e => this.updateField(e)}
                            placeholder="Digite a marca" />

                        <label>Descrição</label>

                        <input id="descrição" type="text" className="form-control"
                            descrição="descrição"
                            // value={this.state.user.descrição}
                            onChange={e => this.updateField(e)}
                            placeholder="Digite a descrição"
                        />


                        <div className="col-xs-3">
                            <button className="btn btn-primary"
                                onClick={e => this.cadastro_m(e)}
                            >Cadastrar
                            </button>


                        </div>

                    </div>

                </div>
            </div>
        )
    }


    //   if (user == 'ok') {
    //     Swal.fire({
    //       // position: 'top-end',
    //       icon: 'success',
    //       title: 'Banco de dados atualizado!',
    //       showConfirmButton: false,
    //       timer: 3000
    //     })
    //     setTimeout(function(){
    //       window.location.href = window.location.href
    //   }, 3000)
    //   }
    //   else {
    //     Swal.fire({
    //       icon: 'error',
    //       title: user,
    //       text: 'Não foi possível atualizar o banco de dados!',
    //     })
    //   }

    // })

    // }

    load(user) {
        this.setState({ user })
    }

    renderTable() {
        return (
            <div className="box-body">
                <div className="table-responsive">
                    <table id="example1" className="table no-margin">
                        <thead>
                            <tr>
                                <th>Marca</th>
                                <th>Descrição</th>
                                <th>Editar</th>
                                <th>Excluir</th>


                            </tr>
                        </thead>
                        <tbody >
                            {this.renderRows()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

    renderRows() {
        return this.state.list.map(user => {
            return (
                < tr key={user.id} >

                    <td>{user.marca}</td>
                    <td>{user.descrição}</td>
                    <td>
                        <button className="btn btn-warning"
                            onClick={() => this.editar_m(user)}>
                            <i className="fa fa-pencil">

                            </i>
                        </button>
                    </td>
                    <td>
                        <button className="btn btn-danger ml-2"
                            onClick={() => this.remover(user)}>
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
                    <div className="content-wrapper">
                        <section className="content-header">
                            <h1>Cadastros</h1>
                            <ol className="breadcrumb"> 
                                <li><a href="#"><i className="fa fa-files-o" /> Banco de dados - Cadastrar - Marca</a></li>
                            </ol>
                        </section>
                        <section className="content">
                            <div className="row">
                                {/* left column */}
                                <div className="col-md-6">
                                    {/* general form elements */}
                                    <div className="box box-primary">
                                        <div className="box-header with-border">
                                            <h3 className="box-title">Dados da marca</h3>
                                        </div>
                                        <div>

                                            {this.rods()}

                                        </div>
                                        {this.renderTable()} 
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>


                </div>
        )
    }
}
