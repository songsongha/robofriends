import React from 'react'; // view library, core of the package that does DOM manipulation for us
import ReactDOM from 'react-dom'; // used for website, native will be for mobile phones
import './index.css'; 
import Card from './Card.js';
import 'tachyons';
import { robots } from './robots';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
   <div>
    <Card id={robots[0].id} name={robots[0].name} email={robots[0].email} />
    <Card id={robots[1].id} name={robots[1].name} email={robots[1].email} />
    <Card id={robots[2].id} name={robots[2].name} email={robots[2].email} />
    <Card id={robots[3].id} name={robots[3].name} email={robots[3].email} />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your Hello, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
