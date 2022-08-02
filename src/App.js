import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Top from './components/Navbar';
import Body from './components/Body';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App bg-dark">
      <Top className="fixed-top"/>
      <Body />
      <Footer />
    </div>
  );
}

export default App;
