import Header from './components/Header';
import Footer from './components/Footer';

const navLinks = [
  {id: '1', label: 'Our work'},
  {id: '2', label: 'About us'},
  {id: '3', label: 'What we do'},
  {id: '4', label: 'Get in touch'}
]

function App() {
  return (
    <div className="App">
      <Header x={navLinks}/>
      <Footer/>
    </div>
  );
}

export default App;
