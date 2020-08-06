import React from 'react';
import './App.css';
import ShowList from './containers/ShowList/ShowList';
import DisplayImage from './containers/DisplayImage/DisplayImage';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Switch>
          <Route path="/viewimage" component={DisplayImage}/>
          <Route path="/homepage" exact component={ShowList}/>
        </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
