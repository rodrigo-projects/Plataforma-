import React, { Component } from 'react'
import axios from 'axios';

import ReactApexChart from "react-apexcharts";


const initialState = {

  list2: [],
  externalData: null,
}

// var resultado = [[0, 0]]

export default class feedback extends Component {

  ///////////


  constructor(props) {
    super(props);

    this.state = {

      series: [{
        name: "Confortável",
        data: [[,]],
      },

      {
        name: "aceitável",
        data: [[,]]
      }, {
        name: "incomodo",
        data: [[,]]
      }
      ],

      options: {
        chart: {
          height: 350,
          type: 'scatter',
          zoom: {
            enabled: true,
            type: 'xy'
          }
        },
        xaxis: {
          tickAmount: 10,
          labels: {
            formatter: function (val) {
              return parseFloat(val).toFixed(1)
            }
          }
        },
        yaxis: {
          tickAmount: 7
        }
      },


    };
  }



  ///////////
  att() {

    const newSeries = [{
      name: "Confortável",
      data: [[,]]
    },

    {
      name: "aceitável",
      data: [[,]]
    }, {
      name: "incomodo",
      data: [[,]]
    }
    ]
    const user = this.state.list2
    console.log(this.state.list2)
    const conforto1 = user => user.conforto == "confortável"
    const valor1 = user.filter(conforto1)
    const data1 = valor1.map(user1 => [user1.px, user1.pz])

    const conforto2 = user => user.conforto == "aceitável"
    const valor2 = user.filter(conforto2)
    const data2 = valor2.map(user2 => [user2.px, user2.pz])

    const conforto3 = user => user.conforto == "incômodo"
    const valor3 = user.filter(conforto3)
    const data3 = valor3.map(user2 => [user2.px, user2.pz])

    console.log(valor1)
    console.log(valor2)
    console.log(valor3)

    this.state.series.map((s) => {

      // const data1=valor1.map(user1 => [user1.px, user1.pz])
      // const data2=valor2.map(user2 => [user2.px, user2.pz])
      // const data3=valor3.map(user2 => [user2.px, user2.pz])

      // const data = this.state.list2.map(user2 => [user2.px, user2.pz])

      // const data = this.state.list2.map(user2 => [user2.px, user2.pz])
      newSeries[0].data = data1;
      newSeries[1].data = data2;
      newSeries[2].data = data3;
    })

    this.setState({
      series: newSeries
    })
  }

  componentWillMount() {

    axios.get(`http://localhost:3001/cad_av`)
      .then(resp => {
        this.setState({ list2: resp.data })
        // resultado = this.state.list2.map(user2 => [user2.px, user2.pz])
        // this.initialState.externalData = true
        this.att();
      })



  }
  state = { ...initialState }



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
      


<div className="col-md-6">
        {/* general form elements */}
        <div className="box box-primary">
          <div className="box-header with-border">
            <h3 className="box-title">Tabela</h3>
          </div>
          <div className="box-body"></div>



        <div id="chart">
          <ReactApexChart options={this.state.options} series={this.state.series} type="scatter" height={350} />
        </div> 
       
        </div> </div> 
        
    )
  }

  render() {

    return (


      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
          <h1>Avaliações</h1>
          <ol className="breadcrumb">
            <li><a href="#"><i className="fa fa-files-o" /> Banco de dados - Cadastrar - Veículo</a></li>
          </ol>
        </section>



        {this.renderGraf()}


      </div>


    )
  }

}
