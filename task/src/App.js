import logo from './logo.svg';
import './App.css';
import Task from './components/Task';

function App() {
  return (
    <div className="container">
      <h1 className="title">Tasky</h1>
      <Task title="Dishes" deadline="Today">
      wash dishes, load the dishwasher
      </Task>
      <Task title="Laundry" deadline="Tomorrow" >
        do some laundry, fold some clothes </Task>
      <Task title="Tidy" deadline="Today">
        tidy up the mess </Task>
    </div>
  );
}

export default App;
