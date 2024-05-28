import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import Specials from './Components/Specials';
import Testimony from './Components/Testimony';
import special1 from './assets/special1.png';
import special2 from './assets/special2.png';
import special3 from './assets/special3.png';
import Nav from './Components/Nav';

function App() {
  return (
    <Router>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/specials" element={
          <>
            <h2 style={{ textAlign: 'left', marginLeft: '1rem' }}>Specials</h2>
            <section id="specialSection">
              <Specials imgSource={special1} />
              <Specials imgSource={special2} />
              <Specials imgSource={special3} />
            </section>
          </>
        } />
        <Route path="/testimony" element={
          <section id="testimony">
            <Testimony user={{ name: "Kim", message: "I can't find a better place in this town to hang out with my friends." }} />
            <Testimony user={{ name: "Jhon", message: "I can't find a better place in this town to hang out with my friends." }} />
            <Testimony user={{ name: "Aung", message: "I can't find a better place in this town to hang out with my friends." }} />
            <Testimony user={{ name: "Angela", message: "I can't find a better place in this town to hang out with my friends." }} />
          </section>
        } />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
