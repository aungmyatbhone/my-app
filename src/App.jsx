import React, { useReducer } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import Specials from './Components/Specials';
import Testimony from './Components/Testimony';
import BookingPage from './Pages/BookingPage';
import special1 from './assets/special1.png';
import special2 from './assets/special2.png';
import special3 from './assets/special3.png';

// Assuming fetchAPI is available globally from the script included in index.html
const initializeTimes = () => {
  const today = new Date().toISOString().split('T')[0];
  return fetchAPI(today);
};

const timesReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return fetchAPI(action.date);
    default:
      return state;
  }
};


function App() {
  const [availableTimes, dispatch] = useReducer(timesReducer,[], initializeTimes);

  const updateTimes = (selectedDate) => {
    dispatch({ type: 'UPDATE_TIMES', date: selectedDate });
  };

  const navigate = useNavigate();

  // Function to submit the form data
  const submitForm = async (formData) => {
    // Submit form data to API
    const isSubmitted = await submitAPI(formData); // Assuming submitAPI is available globally
    if (isSubmitted) {
      // If booking is successful, navigate to confirmation page
      navigate('/confirmed');
    } else {
      // Handle submission failure
      console.log('Booking submission failed.');
    }
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/specials" element={
          <>
            <h2  aria-label="Specials" style={{ textAlign: 'left', marginLeft: '1rem', marginTop: '1rem' }}>Specials</h2>
            <section id="specialSection"  aria-label="Specials">
              <Specials imgSource={special1} />
              <Specials imgSource={special2} />
              <Specials imgSource={special3} />
            </section>
          </>
        } />
        <Route path="/reserve" element={<BookingPage availableTimes={availableTimes} updateTimes={updateTimes}  submitForm={submitForm} />} />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
      <h3 aria-label="Tesitmony"  style={{ textAlign: 'center', marginLeft: '1rem' }}>What our customers say...</h3>
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
