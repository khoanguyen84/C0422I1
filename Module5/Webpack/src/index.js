import React from "react";
import ReactDOM  from "react-dom";

// có 2 cách để tạo component
// cách 1: function component (recommender)
// cách 2: class component

function App(){
    return (
        <div>
            <h1>Hello anh em C0422</h1>
            <h3>Learing ReactJS</h3>
            <input type={"text"} />
            <input type="checkbox" /> agree?
        </div>
    )
}

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App/>);