import './App.css';
import Dashboard from './layouts/Dashboard';
import Footer from './layouts/Footer';
import Navbar from './layouts/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Dashboard/>
      <Footer/>
    </div>
  );
}

export default App;
