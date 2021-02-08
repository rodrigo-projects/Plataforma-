import React from 'react'
import { Switch,Route,Redirect } from 'react-router'

import Home from './Home'
import pag01 from './pages/controle/posicionarModelo'
import pag02 from './pages/controle/controleDireto'
import pag03 from './pages/db/marca/cadastroMarca'
import pag04 from './pages/db/modelo/cadastroModelo'
import pag05 from './pages/db/feedback/feedback'




export default props =>

    <Switch>

        <Route exact path='/' component={Home} />

        <Route exact path='/posicionarModelo' component={pag01} />
        <Route exact path='/controleDireto' component={pag02} />

        <Route exact path='/cadastrarMarca' component={pag03} />
        <Route exact path='/cadastrarModelo' component={pag04} />
        <Route exact path='/feedback' component={pag05} />

        

        <Redirect from='*' to='/' />

    </Switch>

 