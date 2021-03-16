How to connect react with redux:
  npm install react-redux
  import your store storing states
  then import { Provider } in index.js './src/index.js'
  tag <Provider></Provider> wraps the tag <App></App> with props store={store}
  
  import { connect } from react-redux in .js file that wants to connect to store to get state
  use connect()() and then export default connect()()
