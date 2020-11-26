import React, { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Adopt from './pages/Adopt';


function App() {
  return (
    <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Adopt} />
                <Route path="/adopt" component={Adopt} />
            </Switch>
    </BrowserRouter>
  );
}
export default App;
