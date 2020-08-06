import React from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data/data.json';

function App() {
  return (
    <div className="App">
    {/*<h1> Sreenu Reddy</h1>*/}
     { /*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>*/}
      <CardView></CardView>
    </div>
  );
}


let CardView=()=>{
  let profile = data.details;
  console.log(profile);
  return(

  <div className="row justify-content-center">
     {profile.map((cardsData)=>(
        <div className="col-lg-4 col-md-4 col-sm-10 mt-2">
            <div className='card'>
              <div className="card-body">
                <img src={female} alt="profile pic" style={{width:"50%"}}>
                <h1>{cardsData.profile.name}</h1
              </div>
            </div>
        </div>
        ))}
  </div>
  );

}
export default App;
