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
  att(e) {
    const set = {
      conforto: '',
      sexo: '',
      idade: '',
      peso: '',
      altura: '',

    }
    if (document.getElementById('op2').checked == true) {
      set.conforto = 'confortável'

    }
    else if (document.getElementById('op3').checked == true) {
      set.conforto = 'aceitável'

    }
    else if (document.getElementById('op4').checked == true) {
      set.conforto = 'incômodo'

    } else {
      set.conforto = true
    }



    if (document.getElementById('op6').checked == true) {
      set.sexo = 'masculino'

    }
    else if (document.getElementById('op7').checked == true) {
      set.sexo = 'feminino'

    }
    else {
      set.sexo = true
    }






    const newSeries = [{
      name: "Filtro",
      data: [[,]]
    }
      ,

    {
      name: "Sexo",
      data: [[,]]
    },
    {
      name: "Todos",
      data: [[,]]
    }
      //  {
      //   name: "incomodo",
      //   data: [[,]]
      // }
    ]

    ////brembo linkdin
    const user = this.state.list2
    console.log(this.state.list2)

    const data = user.map(user1 => [user1.px, user1.pz])

    const conforto = user => user.conforto == set.conforto
    const valor1 = user.filter(conforto)
    console.log(valor1)
    const data1 = valor1.map(user => [user.px, user.pz])


    const sexo = valor1 => valor1.sexo == set.sexo
    const valor2 = valor1.filter(sexo)
    console.log(valor2)
    const data2 = valor2.map(user => [user.px, user.pz])
    console.log(data2)



    // console.log(valor1)

    this.state.series.map((s) => {
      if (set.sexo === true && set.conforto === true) {
        newSeries[1].data = data;
      } else {
        // newSeries[0].data = data1;
        newSeries[1].data = data2;
      }
      // newSeries[2].data = data;

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



  // renderTable() {
  //   return (
  //     <div className="col-md-8">
  //       {/* general form elements */}
  //       <div className="box box-primary">
  //         <div className="box-header with-border">
  //           <h3 className="box-title">Tabela</h3>
  //         </div>
  //         <div className="box-body">
  //           {/* <div className="table-responsive"> */}
  //           <table id="example2" class="table table-bordered table-hover">
  //             <thead>
  //               <tr>
  //                 <th>Automóvel avaliado</th>
  //                 <th>Nível de conforto</th>
  //                 <th>Sexo</th>
  //                 <th>Idade</th>
  //                 <th>Peso</th>
  //                 <th>Altura</th>
  //                 <th>Comprimento pernas</th>
  //                 <th>Comprimento braços</th>
  //                 <th>Banco</th>
  //                 <th>Volante</th>
  //                 <th>Pedaleira</th>
  //                 {/* <th>Editar</th>
  //                 <th>Deleta</th> */}




  //               </tr>
  //             </thead>
  //             <tbody >
  //               {this.renderRows()}
  //             </tbody>
  //           </table>
  //           {/* </div> */}
  //         </div> </div> </div>
  //   )
  // }







  // renderRows() {
  //   return this.state.list2.map(user2 => {
  //     return (
  //       < tr key={user2.id} >

  //         <td>{user2.ref_car}</td>
  //         <td>{user2.conforto}</td>
  //         <td>{user2.sexo}</td>
  //         <td>{user2.idade}</td>
  //         <td>{user2.peso}</td>
  //         <td>{user2.altura}</td>
  //         <td>{user2.comp_p}</td>
  //         <td>{user2.comp_b}</td>
  //         <td>{user2.bx}</td>
  //         <td>{user2.vx} - {user2.vangular}º</td>
  //         <td>{user2.px} - {user2.pz}</td>



  //         {/* <td>
  //           <button className="btn btn-warning"
  //             onClick={() => this.load(user2)}>
  //             <i className="fa fa-pencil">

  //             </i>
  //           </button>
  //         </td>
  //         <td>
  //           <button className="btn btn-danger ml-2"
  //             onClick={() => this.remover(user2)}>
  //             <i className="fa fa-trash">
  //             </i>
  //           </button>
  //         </td> */}


  //       </tr >)
  //   })
  // }



  renderGraf() {
    return (

      <div>

        <div className="row">
          <div className="col-md-12">
            <div className="box box-primary">
              <div className="box-header with-border">
                <h4 className="box-title">Filtrar tabela</h4>
              
              <div className="col-md-12">
                {/* general form elements */}
                <div className="box box-primary">
                  <div className="box-header with-border">
                    <h3 className="box-title">Banco</h3>
                  </div>
                  <div className="box-body"></div>



                  <div id="chart">
                    <ReactApexChart options={this.state.options} series={this.state.series} type="scatter" height={350} />
                  </div>

                </div> </div></div></div></div></div></div>

    )
  }




  render() {

    return (


      <div>


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
                    <h4 className="box-title">Filtrar tabela</h4>
                  </div>
                  <div className="box-body">
                    <div className="box-header">
                      <h4 className="box-title">Conforto</h4>
                    </div>
                    <div className="radio">
                      <label>
                        <input type="radio" name="optionsRadios2" id="op1" defaultValue="option1" />
                                Todos
                              </label>
                    </div>

                    <div className="radio">
                      <label>
                        <input type="radio" name="optionsRadios2" id="op2" defaultValue="option1" />
                                Confortável
                              </label>
                    </div>
                    <div className="radio">
                      <label>
                        <input type="radio" name="optionsRadios2" id="op3" defaultValue="option2" />
                                Aceitável
                              </label>
                    </div>
                    <div className="radio">
                      <label>
                        <input type="radio" name="optionsRadios2" id="op4" defaultValue="option3" />
                                Incômodo
                              </label>
                    </div>

                    <div className="box-header">
                      <h4 className="modal-title">Sexo</h4>
                    </div>

                    <td>
                      <div className="radio">
                        <label>
                          <input type="radio" name="optionsRadios" id="op5" defaultValue="masculino" />
                                        Ambos
                                      </label>
                      </div>
                      <div className="radio">
                        <label>
                          <input type="radio" name="optionsRadios" id="op6" defaultValue="masculino" />
                                        Masculino
                                      </label>
                      </div>
                      <div className="radio">
                        <label>
                          <input type="radio" name="optionsRadios" id="op7" defaultValue="feminino" />
                                        Feminino
                                      </label>
                      </div>
                    </td>
                  </div>




                  {/* 
                  <div className="modal-header">
                    <h4 className="modal-title">Peso</h4>
                  </div>



                  <div className="col-xs-8 table-responsive">
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th>Min.</th>
                          <th>Máx.</th>

                        </tr>
                      </thead><tbody>
                        <tr>

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
                      </tbody>
                    </table>
                  </div>


 */}


                  {/* 
                  <div className="col-xs-8 table-responsive">
                    <div className="modal-header">
                      <h4 className="modal-title">Altura</h4>
                    </div>

                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th>Min.</th>
                          <th>Máx.</th>

                        </tr>
                      </thead><tbody>
                        <tr>

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
                      </tbody>
                    </table> */}
                  <div className="col-xs-6">
                    <button className="btn btn-block btn-primary" type="button"
                      onClick={e => this.att("confortável")}>Gerar tabela</button>
                  </div>


                  <div className="modal-footer">

                  </div>

                </div>
                {/* /.modal-content */}
              </div>
              {/* /.modal-dialog */}








            </div>
            {this.renderGraf()}
          </section>



        </div>









      </div>


    )
  }

}

// <section className="content-header">
// <h1>Avaliações</h1>
// <ol className="breadcrumb">
//   <li><a href="#"><i className="fa fa-files-o" /> Banco de dados - Cadastrar - Veículo</a></li>
// </ol>
// </section>



// {this.renderGraf1()}
// {this.renderGraf2()}
// {this.renderGraf3()}