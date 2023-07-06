import React from "react";
import ReactDOM from 'react-dom/client'
import { Provider } from "react-redux";
import { createStore, compose } from "redux";
import reducer from "./reducers";
import { App } from "./routes/App";
import './assets/styles/App.css'

const initialState = {
  "houseFilter": 'Howarts',
  "textFilter": ''
}

const composeEnhacer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(reducer, initialState, composeEnhacer)
console.log(store)

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
