import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { Component } from 'react';
import Test from './Test';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

// methods to map state from store to props in component
const mapStateToProps = state => {
  return {
    testState: state
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleChangeName: () => {
      dispatch({type: 'CHANGE_NAME', name: 'hieu nguyen'})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Test);
