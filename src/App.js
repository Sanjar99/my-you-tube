import './App.scss';
import React from 'react';


// pages//
import Glavniy from "./Page/Glavniy/Glavniy";
// components //
import Sidebar from './components/Sidebar/Sidebar'
import Header from './components/Header/Header'





function App() {
  return (
        <div className="App">
            <Header/>
            <div className='screen'>
                <Sidebar/>
                <Glavniy/>
            </div>
           
            
        </div>
    );
}


export default App;


