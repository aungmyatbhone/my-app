import React, { useState } from 'react';

const BookingForm = ({ availableTimes, updateTimes }) => {
  // Define state variables for each field in the form
  const [date, setDate] = useState('');
  const [time, setTime] = useState('17:00'); // Default time
  const [numGuests, setNumGuests] = useState(1); // Default number of guests
  const [occasion, setOccasion] = useState('');

  // Handle change in date field
  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    // Call the updateTimes function from props to update available times based on selected date
    updateTimes(selectedDate);
  };


  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform form validation or submit the data to an API here
    console.log('Form submitted:', { date, time, numGuests, occasion });
  };

  return (
    <form id='form' style={{ display: 'grid', maxWidth: '200px', gap: '20px' }} onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date
      <br />
      <input className="inputs"  onChange={handleDateChange} type="date" id="res-date" value={date} onChange={(e) => setDate(e.target.value)} />
      </label>
      

      <label htmlFor="res-time">Choose time
      <br />
      <select className="inputs" id="res-time" value={time} onChange={(e) => setTime(e.target.value)}>
        {availableTimes.map((t, index) => (
          <option key={index} value={t}>{t}</option>
        ))}
      </select>
      </label>

      <label htmlFor="num-guests">Number of guests
      <br />
      <input className="inputs" type="number" id="num-guests" value={numGuests} onChange={(e) => setNumGuests(parseInt(e.target.value))} />
      </label>

      <label htmlFor="occasion">Occasion<small><i>(optional)</i></small>
      <br />
      <input className="inputs" type="text" id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)} />
      </label> 
      <input type="submit" value="Book now" />
    </form>
  );
};

export default BookingForm;





    // <form id="form">
    //   <div>
    //     <p>Join us for a memorable meal.</p>
    //     <h3> Reserve your spot now!</h3>
    //   </div>
    //   <label htmlFor="res-date">Date <br />
    //     <input className="inputs" type="date" id="res-date" onChange={handleDateChange} />
    //   </label>
    //   <label htmlFor="res-time">Time <br />
    //     <select className="inputs" id="res-time">
    //       {availableTimes.map(time => (
    //         <option key={time} value={time}>{time}</option>
    //       ))}
    //     </select>
    //   </label>
    //   <label htmlFor="guests">How many people?
    //     <br />
    //     <input className="inputs" type="number" placeholder="1" min="1" max="10" id="guests" />
    //   </label>
    //   <label htmlFor="occasion">Occasion <small><i>(optional)</i></small><br />
    //     <select className="inputs" id="occasion">
    //       <option>None</option>
    //       <option>Birthday</option>
    //       <option>Anniversary</option>
    //     </select>
    //   </label>
    //   <input type="submit" value="Book now" />
    // </form>