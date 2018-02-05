import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Layout from "./components/Layout";


class App extends React.Component {
  render() {
    return (
		<Layout />
    );
  }
}


ReactDOM.render(<App />, document.getElementById('root'));


registerServiceWorker();
