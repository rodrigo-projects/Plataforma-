import React from 'react'
import { Link } from 'react-router-dom'

export default props =>
    <div>
        <aside className="main-sidebar">
            {/* sidebar: style can be found in sidebar.less */}
            <section className="sidebar">
                {/* Sidebar user panel */}
                {/* /.search form */}
                {/* sidebar menu: : style can be found in sidebar.less */}
                <ul className="sidebar-menu" data-widget="tree">
                    <li className="header">Menu de opções</li>
                 

                    <li className="treeview">
                        <Link Link to="fake_url">
                            <i className="fa fa-th" />
                            <span>Painel de controle</span>
                            <span className="pull-right-container">
                                <i className="fa fa-angle-left pull-right" />
                            </span>
                        </Link>
                        <ul className="treeview-menu">
                            <li><Link Link to="/painelControle"><i className="fa fa-circle-o" /> Painel de control</Link>
                            </li>
                           
                        </ul>
                    </li>
                    <li className="treeview">
                        <Link Link to="fake_url">
                            <i className="fa fa-laptop" />
                            <span>Controle de posições</span>
                            <span className="pull-right-container">
                                <i className="fa fa-angle-left pull-right" />
                            </span>
                        </Link>
                        <ul className="treeview-menu">
                            <li><Link Link to="/posicionarModelo"><i className="fa fa-circle-o" /> Posicionar veículo</Link>
                            </li>
                            <li><Link Link to="/controleDireto"><i className="fa fa-circle-o" /> Controle direto</Link> </li>
                        </ul>
                    </li>
                    <li className="treeview">
                        <Link Link to="fake_url">
                            <i className="fa fa-files-o" /> <span>Banco de dados</span>
                            <span className="pull-right-container">
                                <i className="fa fa-angle-left pull-right" />
                            </span>
                        </Link>
                        {/* <ul className="treeview-menu">
                                    <li className="treeview">
                                        <Link Link to="fake_url"><i className="fa fa-circle-o" /> Cadastrar
              <span className="pull-right-container">
                                                <i className="fa fa-angle-left pull-right" />
                                            </span>
                                        </Link> 
                                        <ul className="treeview-menu">
                                            <li><Link Link to="/cadastrarMarca"><i className="fa fa-circle-o" /> Marca</Link> </li>
                                            <li><Link Link to="/cadastrarModelo"><i className="fa fa-circle-o" /> Veículo</Link> </li>
                                        </ul>
                                    </li>
                                    
                                  
                                </ul> */}




                        <ul className="treeview-menu">
                            {/* <li className="treeview"> */}
                                <li>   <Link Link to="/cadastrarMarca"><i className="fa fa-circle-o" /> Marca</Link>  </li>
                                <li>   <Link Link to="/cadastrarModelo"><i className="fa fa-circle-o" /> Veículo</Link> </li>
                                <li>   <Link Link to="/feedback"><i className="fa fa-circle-o" /> Avaliações</Link> </li>

                            {/* </li> */}


                        </ul>
                    </li>
                    <li className="header">Status</li>
                    <li><Link Link to="fake_url"><i className="fa fa-circle-o text-green" /> <span>Controlador</span></Link> </li>
                    <li><Link Link to="fake_url"><i className="fa fa-circle-o text-green" /> <span>Sensores</span></Link> </li>
                    <li><Link Link to="fake_url"><i className="fa fa-circle-o text-green" /> <span>Motores</span></Link> </li>

                </ul>

            </section>
            {/* /.sidebar */}
        </aside>







    </div>
