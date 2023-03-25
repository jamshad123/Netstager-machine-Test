import TodoList from './components/TodoList';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Details from './components/Details';
import { createContext } from 'react';
import AddTodo from './components/AddTodo';

const newcontext = createContext();
function App() {

  const [array, setarray] = useState([])
  return (
    <div className="todo">
     <newcontext.Provider value={{array, setarray}}>
      <BrowserRouter>

        <Routes>
        <Route path="/" element={<TodoList/>}/>
          <Route path="/addTodo" element={<AddTodo/>}/>
          <Route path="/details/:id" element={<Details/>}/>
        </Routes>
      </BrowserRouter>
      </newcontext.Provider>

      
    </div>
  );
}

export default App;
export {newcontext}
