How to connect react with redux:
  1. npm install react-redux
  2. import your store storing states
  3. then import { Provider } in index.js './src/index.js'
  4. tag <Provider></Provider> wraps the tag <App></App> with props store={store}
  
  5. import { connect } from react-redux in .js file that wants to connect to store to get state
  6. use connect()() and then export default connect()()
