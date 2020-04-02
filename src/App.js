import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './App.css';
import Menu from './components/Menu/Menu';
import routers from './routers';

class App extends Component {
  render() {
    return(
      <Router>
        <div className="App">
          <Menu />
          {
            this.showRouters(routers)
          }
        </div>
    </Router>
    );
  }

  showRouters = (routers) => {
    let result = null;
      if(routers.length > 0) {
        result = routers.map((route, index) => {
          return (
              <Route 
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.main}
                />
          )
        })
      }
    return <Switch> {result} </Switch>;
    
  }
}

export default App;
