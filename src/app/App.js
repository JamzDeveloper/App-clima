import React, { useState } from "react";
import {
  BrowserRouter as Router,
  HashRouter,
  Switch,
  Route,
} from "react-router-dom";
import WeatherForm from "../components/WeatherForm";
import WeatherInfo from "../components/WeatherInfo";
import "./App.css";

const initialState = {
  longitude: "",
  latitude: "",
  city: "",
  country: "",
};

const App = () => {
  const [data, setData] = useState(initialState);

  return (
    <div className="container--app">
      <HashRouter>
        <Switch>
          <Route exact path="/clima">
            {console.log("/clima" + data)}

            <WeatherInfo data={data}  />
          </Route>
          <Route path="/">
            <WeatherForm data={data} setData={setData}></WeatherForm>
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
};

export default App;
