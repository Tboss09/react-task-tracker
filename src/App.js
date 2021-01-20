import logo from './logo.svg';
import './App.css';

function App() {
  const name = "Tayo"
  let x = false;
  return (
    <div className="container">
      <h1>Hello From React</h1>
      <h1>Hello {x ? "Tayo" : "Akosile"}</h1>
    </div>
  );
}

export default App;
