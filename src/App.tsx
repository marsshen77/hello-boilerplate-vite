import React from 'react';
import './App.less';

const App = () => {
    const text = 'boilerplate';
    return (
        <div className="hello-page">
            <h1 data-text={text}>{text}</h1>
            <p>Powered by Basic Platform Department</p>
        </div>
    );
};

export default App;
