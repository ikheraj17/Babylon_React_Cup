import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import DefaultPlayground from './Components/Cup.jsx';
import BabylonScene from './Components/CupTwo.jsx';

const App = () => {


    return (
        <div>
        <div>This renders properly</div>
        {/* <DefaultPlayground /> */}
        <BabylonScene />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('app'));