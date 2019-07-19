import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import DataList from "./components/DataList"
import Login from "./components/Login"
import PrivateRoute from "./components/PrivateRoute"
import { useLocalStorage } from "./components/customHooks"


function App() {
  const [storedValue, setValue] = useLocalStorage("token");

  return (
    <div className="App">
      <Route
          exact path='/'
          render={(props) => <Login {...props} storedValue={storedValue} setValue={setValue} />}
      />
      <PrivateRoute 
        exact path="/dataList"
        component={DataList}
      />

    </div>
  );
}

export default App;
