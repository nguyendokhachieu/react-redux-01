How to connect react with redux:
  1. npm install react-redux
  2. import your store storing states
  3. then import { Provider } in index.js './src/index.js'
  4. tag <Provider></Provider> wraps the tag <App></App> with props store={store}
  
  5. import { connect } from react-redux in .js file that wants to connect to store to get state
  6. use connect()() and then export default connect()()
  7. from one .js file can export props to another .js file (not recommended)

look at example below:

((
function mapStateToProps literally map state from store to value of props in current class. In this example, the obj returned in this function means create a props named 'appState' which has value 'state', 'state' is exactly state from store we had connected to. (you can see that in render() we call props named appState)
))

import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { Component } from 'react';

class App extends Component {
  
  render() {
    console.log(this.props.appState);
    return (
      <div>
        
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    appState: state
  }
}

export default connect(mapStateToProps, null)(App);
