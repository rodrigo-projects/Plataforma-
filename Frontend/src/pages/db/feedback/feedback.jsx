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
        name: "",
        data: [[,]],
      },

      ],
      series2: [{
        name: "",
        data: [[,]],
      },

      ],
      series3: [{
        name: "",
        data: [[,]],
      },

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
          tickAmount: 7,
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
      data: [[0, 0], [70, 70]]
    }]
    const newSeries2 = [{
      name: "Filtro",
      data: [[0, 0], [70, 70]]
    }]
    const newSeries3 = [{
      name: "Filtro",
      data: [[0, 0], [80, 70]]
    }]

    ////brembo linkdin
    const user = this.state.list2





    ///filtro de conforto
    const conforto = user => user.conforto == set.conforto
    const valor1 = user.filter(conforto)


    ///filtro de sexo
    const sexo = user => user.sexo == set.sexo
    const valor2 = user.filter(sexo)

    ///filtro de sexo e conforto
    const sexoConforto = valor1 => valor1.sexo == set.sexo
    const valor3 = valor1.filter(sexoConforto)



    this.state.series.map((s) => {
      if (set.sexo === true && set.conforto === true) { ///todos
        newSeries[0].data = user.map(user => [user.px, user.pz]);
        newSeries2[0].data = user.map(user => [user.vx, user.vangular]);
        newSeries3[0].data = user.map(user => [user.bx, 5]);
      } else if (set.sexo === true && set.conforto !== true) { ///filtro de conforto
        newSeries[0].data = valor1.map(user => [user.px, user.pz]);
        newSeries2[0].data = valor1.map(user => [user.vx, user.vangular]);
        newSeries3[0].data = valor1.map(user => [user.bx, 5]);
      } else if (set.sexo !== true && set.conforto === true) { ///filtro de sexo
        newSeries[0].data = valor2.map(user => [user.px, user.pz]);
        newSeries2[0].data = valor2.map(user => [user.vx, user.vangular]);
        newSeries3[0].data = valor2.map(user => [user.bx, 5]);
      } else {                                                  //filtro de sexo e conforto
        newSeries[0].data = valor3.map(user => [user.px, user.pz]);
        newSeries2[0].data = valor3.map(user => [user.vx, user.vangular]);
        newSeries3[0].data = valor3.map(user => [user.bx, 5]);
      }

    })


    this.setState({

      series: newSeries,
      series2: newSeries2,
      series3: newSeries3

    })
  }


  filtros() {

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



  renderGraf(name, serie) {
    return (

      <div>
        <div className="box box-primary">
       
              
          <div className="box-header with-border">
            <h3 className="box-title">{name}</h3>
          </div>
          <div className="box-body"></div>
          <div id="chart">
            <ReactApexChart options={this.state.options} series={serie} type="scatter" height={350} />
          </div>
</div></div>
    )
  }







  render() {

    return (


      <div>


        <div className="content-wrapper">
          {/* Content Header (Page header) */}
          <section className="content-header">
            <h1>
              Análises gráficas
    </h1>
            <ol className="breadcrumb">
              <li><a href="#"><i className="fa fa-laptop" /> Banco de dados &gt; Avaliações</a></li>
            </ol>
          </section>




          <section className="content">


            <div className="row">
              <div className="col-md-6">


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
                        <input type="radio" name="optionsRadios2" id="op1" defaultValue="" defaultChecked />
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
                          <input type="radio" name="optionsRadios" id="op5" defaultValue="" defaultChecked />
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


                  <div className="col-xs-6">
                    <button className="btn btn-block btn-primary" type="button"
                      onClick={e => this.att("confortável")}>Gerar tabela</button>
                  </div>


                  <div className="modal-footer">

                  </div>

                </div>
              </div>

            </div>
            {this.renderGraf("Pedaleira", this.state.series)}
            {this.renderGraf("Volante", this.state.series2)}
            {this.renderGraf("Banco", this.state.series3)}


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