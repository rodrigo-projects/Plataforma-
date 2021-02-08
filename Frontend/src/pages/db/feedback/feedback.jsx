import React, { Component } from 'react'
import axios from 'axios';

import { Chart } from "react-google-charts";


const initialState = {

  list2: []
}
export default class feedback extends Component {


  state = { ...initialState }

  componentWillMount() {

    axios.get(`http://localhost:3001/cad_av`)
      .then(resp => {
        this.setState({ list2: resp.data })
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
      <div className="col-md-8">
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
                  <th>Automóvel avaliado</th>
                  <th>Nível de conforto</th>
                  <th>Sexo</th>
                  <th>Idade</th>
                  <th>Peso</th>
                  <th>Altura</th>
                  <th>Comprimento pernas</th>
                  <th>Comprimento braços</th>
                  <th>Banco</th>
                  <th>Volante</th>
                  <th>Pedaleira</th>
                  {/* <th>Editar</th>
                  <th>Deleta</th> */}




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

          <td>{user2.ref_car}</td>
          <td>{user2.conforto}</td>
          <td>{user2.sexo}</td>
          <td>{user2.idade}</td>
          <td>{user2.peso}</td>
          <td>{user2.altura}</td>
          <td>{user2.comp_p}</td>
          <td>{user2.comp_b}</td>
          <td>{user2.bx}</td>
          <td>{user2.vx} - {user2.vangular}º</td>
          <td>{user2.px} - {user2.pz}</td>



          {/* <td>
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
          </td> */}


        </tr >)
    })
  }


  renderGraf() {
    return (
      <Chart
      width={'600px'}
      height={'400px'}
      chartType="Scatter"
      loader={<div>Loading Chart</div>}
      data={[
        ['Altura', 'Hours Studied', 'Final'],
        [0, 0, 67],
        [1, 1, 88],
        [2, 2, 77],
        [3, 3, 93],
        [4, 4, 85],
        [5, 5, 91],
        [6, 6, 71],
        [7, 7, 78],
        [8, 8, 93],
        [9, 9, 80],
        [10, 10, 82],
      ]}
      options={{
        // Material design options
        chart: {
          title: "Students' Final Grades",
          subtitle: 'based on hours studied',
        },
        width: 800,
        height: 500,
        series: {
          0: { axis: 'hours studied' },
          1: { axis: 'final grade' },
        },
        axes: {
          y: {
            'hours studied': { label: 'Hours Studied' },
            'final grade': { label: 'Final Exam Grade' },
          },
        },
      }}
      rootProps={{ 'data-testid': '4' }}
      legendToggle
    />
    );
  }

  render() {
    return (
        <div>

          <div className="content-wrapper">
            {/* Content Header (Page header) */}
            <section className="content-header">
              <h1>Avaliações</h1>
              <ol className="breadcrumb">
                <li><a href="#"><i className="fa fa-files-o" /> Banco de dados - Cadastrar - Veículo</a></li>
              </ol>
            </section>
            <section>   {this.renderTable()}</section>




            <div className="col-md-8">
              {/* general form elements */}
              <div className="box box-primary">
                <div className="box-header with-border">
                  <h3 className="box-title">Tabela</h3>
                </div>
                <div className="box-body">
                  <section>   {this.renderGraf()}</section>
                </div>

              </div>      </div> </div>      </div>


    )
  }

}
