import './App.css';
import Header from './components/header/header';
import Hello from './components/hello/hello';
import Problem from './components/problem/problem';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hello/>
      <Problem/>
    </div>
  );
}

export default App;
