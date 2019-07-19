import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import DataList from "./components/DataList"
import Login from "./components/Login"
import PrivateRoute from "./components/PrivateRoute"

function App() {
  return (
    <div className="App">
      <Route 
        exact path="/"
        component={Login}
      />
      <PrivateRoute 
        exact path="/dataList"
        component={DataList}
      />

    </div>
  );
}

export default App;
