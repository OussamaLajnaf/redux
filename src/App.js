
import './App.css';
import AddTask from './Components/AddTask';
import FilterTask from './Components/FilterTask';
import TaskList from './Components/TaskList';

function App() {
  return (
    <div className="App">
      <AddTask/>
      <TaskList/>
      <FilterTask/>
    </div>
  );
}

export default App;
