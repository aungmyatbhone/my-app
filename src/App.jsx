// src/Components/Main.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Specials from './Components/Specials';
import Testimony from './Components/Testimony';
import BookingPage from './Pages/BookingPage';
import special1 from './assets/special1.png';
import special2 from './assets/special2.png';
import special3 from './assets/special3.png';
import { useReducer, useEffect } from 'react';

const timesReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      // For now, return the same available times regardless of the date
      return ['17:00', '18:00', '19:00', '20:00', '21:00'];
    default:
      return state;
  }
};

const initializeTimes =  ['17:00', '18:00', '19:00', '20:00', '21:00'];

function App() {
  // Function to create initial state for availableTimes

  const [availableTimes, dispatch] = useReducer(timesReducer, initializeTimes);


  // Function to handle state change based on selected date
  const updateTimes = (selectedDate) => {
    // Dispatch action to update available times based on selected date
    dispatch({ type: 'UPDATE_TIMES', date: selectedDate });
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/specials" element={
          <>
            <h2 style={{ textAlign: 'left', marginLeft: '1rem', marginTop: '1rem'}}>Specials</h2>
            <section id="specialSection">
              <Specials imgSource={special1} />
              <Specials imgSource={special2} />
              <Specials imgSource={special3} />
            </section>
          </>
        } />
        <Route path="/reserve" element={<BookingPage availableTimes={availableTimes} updateTimes={updateTimes} />
} />
      </Routes>
      <h3 style={{ textAlign: 'center', marginLeft: '1rem'}}>What our customers say...</h3>
      <section id="testimony">
        <Testimony user={{ name: "Kim", message: "I can't find a better place in this town to hang out with my friends." }} />
        <Testimony user={{ name: "Jhon", message: "I can't find a better place in this town to hang out with my friends." }} />
        <Testimony user={{ name: "Aung", message: "I can't find a better place in this town to hang out with my friends." }} />
        <Testimony user={{ name: "Angela", message: "I can't find a better place in this town to hang out with my friends." }} />
      </section>
      <Footer />
    </Router>
  );
}

export default App;
