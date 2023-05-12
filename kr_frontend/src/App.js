import React from "react";
import {HomePage} from "./Pages/HomePage";
import {LoginAuthPage} from "./Pages/Login(Auth)Page";
import {BrowserRouter, Route} from "react-router-dom";
import {Routes} from "react-router";
import DocumentTitle from 'react-document-title';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <DocumentTitle title = 'KURSA4'>
        <BrowserRouter basename="/" >
          <Routes>
            <Route path={"/"} exact element={<LoginAuthPage/>}/>
            <Route path={"/Home"} element={<HomePage/>}/>
          </Routes>
        </BrowserRouter>
      </DocumentTitle>
    </div>
  );
}

export default App;
