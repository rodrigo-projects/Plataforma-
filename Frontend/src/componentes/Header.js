import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div>

                <header className="main-header">
                    {/* Logo */}
                    <a className="logo">
                        {/* mini logo for sidebar mini 50x50 pixels */}
                        <span className="logo-mini"><b>IF</b>ca</span>
                        {/* logo for regular state and mobile devices */}
                        <span className="logo-lg"><b>Projeto IFMG-FCA</b></span>
                    </a>
                    {/* Header Navbar: style can be found in header.less */}
                    <nav className="navbar navbar-static-top">
                        <a href="fake_url" className="sidebar-toggle" data-toggle="push-menu" role="button">
                            <span className="sr-only">Toggle navigation</span>
                        </a>
                    </nav>
                </header>

            </div>
        )
    }
}
