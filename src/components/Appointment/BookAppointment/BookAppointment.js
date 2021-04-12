import React from 'react';
import BookingCard from './../BookingCard/BookingCard';

const bookingData = [
    {
        subject:'Teeth Orthodontics',
        visitingHour: '8.00 AM - 9.00AM',
        totalSpace:10
    },
    {
        subject:'Cosmetic Dentistry',
        visitingHour: '10.50 AM - 11.30 AM',
        totalSpace:10
    },
    {
        subject:'Teeth Orthodontics',
        visitingHour: '8.00 AM - 9.00AM',
        totalSpace:10
    },
    {
        subject:'Cavity Protection',
        visitingHour: '8.00 AM - 9.00AM',
        totalSpace:10
    },
    {
        subject:'Teeth Orthodontics',
        visitingHour: '8.00 AM - 9.00AM',
        totalSpace:10
    },
    {
        subject:'Teeth Whitening',
        visitingHour: '8.00 AM - 9.00AM',
        totalSpace:10
    },
]

const BookAppointment = ({date}) => {
    return (
      <section>
          <h2 className="text-center text-brand mb-5">Available Appointments on {date.toDateString()}</h2>
          <div className="row">
               {
                   bookingData.map(booking => <BookingCard booking={booking} date={date} key={booking.id}></BookingCard>)
               }
          </div>
      </section>
    );
};

export default BookAppointment;