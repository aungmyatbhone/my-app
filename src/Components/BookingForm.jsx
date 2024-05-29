import React, { useState, useEffect } from "react";

const BookingForm = ({ availableTimes, updateTimes, submitForm }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('17:00');
  const [numGuests, setNumGuests] = useState(1);
  const [occasion, setOccasion] = useState('');
  const [dateValid, setDateValid] = useState(false);
  const [timeValid, setTimeValid] = useState(false);
  const [guestsValid, setGuestsValid] = useState(false);

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    const isValid = selectedDate !== '';
    setDateValid(isValid);
  };

  const handleTimeChange = (e) => {
    const selectedTime = e.target.value;
    setTime(selectedTime);
    const isValid = selectedTime !== '';
    setTimeValid(isValid);
  };

  const handleGuestsChange = (e) => {
    const guests = parseInt(e.target.value);
    setNumGuests(guests);
    const isValid = guests >= 1; // Assuming minimum guests required is 1
    setGuestsValid(isValid);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (dateValid && timeValid && guestsValid) {
      const formData = { date, time, numGuests, occasion };
      submitForm(formData);
    }
  };

  return (
    <form id="form" onSubmit={handleSubmit} aria-label="Booking form">
      <label htmlFor="res-date">Choose date
        <br />
        <input className="inputs" type="date" id="res-date" value={date} onChange={handleDateChange} aria-label="Choose date" />
      </label>

      <label htmlFor="res-time">Choose time
        <br />
        <select className="inputs" id="res-time" value={time} onChange={handleTimeChange} aria-label="Choose time">
          {availableTimes.map((t, index) => (
            <option key={index} value={t}>{t}</option>
          ))}
        </select>
      </label>

      <label htmlFor="num-guests">Number of guests
        <br />
        <input onChange={handleGuestsChange} className="inputs" min={1} max={10} type="number" id="num-guests" value={numGuests} aria-label="Number of guests" />
      </label>

      <label htmlFor="occasion">Occasion<small><i>(optional)</i></small>
        <br />
        <input className="inputs" type="text" id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)} aria-label="Occasion (optional)" />
      </label>
      <input type="submit" value="Book now" aria-label="Submit booking" />
    </form>
  );
};

export default BookingForm;
