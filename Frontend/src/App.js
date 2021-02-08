import React from 'react'
import Body from './Routes'
import { HashRouter } from 'react-router-dom'


import Header from './componentes/Header'
import Menu from './componentes/Menu'
import Footer from './componentes/Footer'



export default props =>
<HashRouter> 
  <div>
    <Header />
    <Menu />
    <Body/>
    <Footer />
  </div>
  </HashRouter>
 







// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
