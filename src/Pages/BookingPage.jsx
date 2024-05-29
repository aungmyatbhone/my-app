// src/Pages/BookingPage.jsx
import BookingForm from '../Components/BookingForm';

function BookingPage({ availableTimes, updateTimes ,  submitForm}) {
  return <BookingForm availableTimes={availableTimes} updateTimes={updateTimes}   submitForm={submitForm}/>;
}

export default BookingPage;
