// src/Pages/BookingPage.jsx
import BookingForm from '../Components/BookingForm';

function BookingPage({ availableTimes, dispatch }) {
  return <BookingForm availableTimes={availableTimes} dispatch={dispatch} />;
}

export default BookingPage;
