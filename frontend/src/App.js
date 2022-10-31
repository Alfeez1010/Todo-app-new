import './App.css';
import Banner from './components/Banner';
import Header from './components/Navbar';
import Todos from './components/Todos';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Todos />
    </div>
  );
}
export default App;
