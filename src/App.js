import Header from './components/Header';
import Button from './components/Button';

const App = () => {
  return (
    <div className="container">
      <Header title="Task Runner" />
      <Button name="Add" color="green"  />
    </div>
  )
}
export default App;