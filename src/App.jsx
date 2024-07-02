import Rate_info from './Rate_info/rate_info'
import './App.css'
import NewPage from "./Page_about_rate/new_page";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import React, { Fragment } from "react";
function App() {
return (
    <>
       <div className="block_card">
     <Router>
      <Routes>
   
        <Route path="/" element={<Rate_info/>} />
        <Route path="/new" element={<NewPage/>}/>
       
      </Routes>
    </Router>
    </div>
    
    
    </>
  )
}

export default App
