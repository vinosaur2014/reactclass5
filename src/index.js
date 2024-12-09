import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
class Worldcup extends React.Component {
  render() {
const myheaderstyle = {
  color: "skyblue",
backgroundColor: "yellow",
fontFamily: "Arial",
padding: "5px"
};
const mystyle = {
  color: "blue",
  backgroundColor: "pink",
  fontFamily: "Times New Roman",
  Padding: "10px"
};
return (
  <div>
<h1 style={myheaderstyle}>World cup is the hardest trophy</h1>
<p style={mystyle}>Are u sure</p>
<p className="newstyle">Welcome to codingal</p>
  </div>
)
  }
}
root.render(
  <React.StrictMode>
    <Worldcup />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
