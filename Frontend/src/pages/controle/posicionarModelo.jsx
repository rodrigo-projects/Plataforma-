import React, { Component } from 'react'

import ReactNipple from 'react-nipple';
import DebugView from 'react-nipple/lib/DebugView';
import axios from 'axios'


export default class posicionarVeiculo extends Component {


    state = {
        data: {}
    };


    renderJoy() {

        return (<div>

            <ReactNipple
                options={{ mode: 'static', position: { top: '50%', left: '50%' }, color: "blue" }}
                style={{
                    outline: '1px dashed blue',
                    color: 'blue',
                    width: 250,
                    height: 250,
                    position: 'relative'
                }}
                onStart={this.handleEvent}
                onEnd={this.handleEvent}
                onMove={this.handleEvent}
                onDir={this.handleEvent}
                onPlain={this.handleEvent}
                onShown={this.handleEvent}
                onHidden={this.handleEvent}
                onPressure={this.handleEvent}
            />
            <DebugView data={this.state.data} />

        </div>)


    }
    componentDidMount() {
        this.timerInterval = setInterval(this.tick.bind(this), 2000);
      }
    
      tick= (evt, data) =>  {
        axios.post(`http://localhost:3001/joy`, this.state.data.angle)
    }
    
      componentWillUnmount() {
        clearInterval(this.timerInterval);
      }
    handleEvent = (evt, data) => {
        // console.log(user);
        // axios.post(`http://localhost:3001/joy2`,data.distance)
        this.setState({ data });
           
    };
    render() {
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

                                        {this.renderJoy()}
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
