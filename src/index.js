import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react/cjs/react.production.min';
import App from './routes/App';

ReactDOM.render(<App />, document.getElementById('app'));



const Button = () => {
    const [name, setName] = useState('Hola');
  return (
    <div>
        <h1>{name}</h1>
    </div>
  )
}

export default Button 