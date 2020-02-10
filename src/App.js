import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import Main from "./components/Main/Main";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Main}></Route>
        </Switch>
        {/* <Main /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
