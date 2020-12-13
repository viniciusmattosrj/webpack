import React from 'react';
import ReactDOM from 'react-dom';

const myName = 'Fernanda';

ReactDOM.render(
    <div>Nome: {myName}</div>,
    document.querySelector('#app')
)
console.log('Funcionou');