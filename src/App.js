//import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Column from './components/Column';

const initialKanban = [
  {
    header: 'Category 1',
    headerColor: 'rgba(155, 180, 220, 1)',
    todos: ['Task 1']
  },
  {
    header: 'Category 2',
    headerColor: 'rgba(255, 99, 71, 1)',
    todos: ['Task 2']
  },
  {
    header: 'Category 3',
    headerColor: 'rgba(124, 252, 0, 1)',
    todos: ['Task 3']
  },
  {
    header: 'Category 4',
    headerColor: 'rgba(0, 191, 255, 1)',
    todos: ['Task 4']
  },
];
function App() {
  const [kanban, setKanban] = useState(initialKanban);
  const handleClick = (colIndex) => {
    const value = window.prompt('Add a new card', '');
    const nextKanban = [...kanban];
    nextKanban[colIndex].todos.push(value);
    setKanban(nextKanban);
  }
  const handleMove = (fromIndex, fromColIndex, toColIndex) => {
    const nextKanban = [...kanban];
    const removedItem = nextKanban[fromColIndex].todos.splice(fromIndex, 1);
    nextKanban[toColIndex].todos.push(removedItem);
    setKanban(nextKanban);
  }
  const handleDelete = (index, colIndex) => {
    const nextKanban = [...kanban];
    nextKanban[colIndex].todos.splice(index, 1);
    setKanban(nextKanban);
  }
  return (
    <div className="App">
      <h1 className="h1-title">Kanban Board</h1>
      <div className="grid-container">
        {kanban.map((value, index) => (
          <Column
            handleClick={handleClick}
            value={value}
            colIndex={index}
            key={index}
            handleMove={handleMove}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
