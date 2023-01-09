import React from 'react';
import './App.css';
import {TodoList} from "./TodoList";

function App() {
    let tasks1 = [
        {id: 1, title: "css", isDone: true},
        {id: 1, title: "css", isDone: true},
        {id: 1, title: "css", isDone: true},
    ]

    return (
        <div className="App">
            <TodoList title={"What to learn"} tasks={tasks1}/>
        </div>
    );
}

export default App;
