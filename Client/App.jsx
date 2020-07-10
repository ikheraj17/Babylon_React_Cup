import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import DefaultPlayground from './Components/Cup.jsx';

const App = () => {


    return (
        <div>
        <div>This renders properly</div>
        <DefaultPlayground />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('app'));