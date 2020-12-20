import React from 'react';
import PrivateRoute from "./UI/Components/PrivateRoute";
import Todos from "./UI/Routes/Todos";
import SignIn from "./UI/Routes/SignIn";
import {Switch, Route} from "react-router-dom";
function App() {
  return (
    <div style = {{
      textAlign: "center"
    }}>
      <h1>Todo App</h1>
      <Switch>
        <PrivateRoute path = "/todos">
          <Todos />
        </PrivateRoute>
        <Route path = "/">
        <SignIn />
        </Route>
      </Switch>

    </div>
  );
}
export default App;