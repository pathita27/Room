import React, { useState, useEffect } from 'react'
import MainLayout from '../layouts/MainLayout';
import BookingService from '../services/BookingService';
import { NavLink } from 'react-router-dom';

const BookingRoom = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBooking();
  }, []);

  const fetchBooking = () => {
    BookingService.getAll()
      .then((res) => {
        setBookings(res.data.data)
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <MainLayout>
      <h1 className="mt-3">Booking Information</h1>
      <hr />
      <div className="row mt-2 row-cols-lg-1 row-cols-3 g-2">
        {bookings.map((booking) => (
          <BookingList key={booking._id} booking={booking}/>
        ))}
      </div>
    </MainLayout>
  );
};

const BookingList = (props) => {
  return (
    <div className="col">
      <div className="card">
        <div className="card-body">
          <div className="card-text">
            <h6>Room Number: {props.booking.room_number}</h6>
            <hr />
            <h6>Name: {props.booking.name}</h6>
            <hr />
            <h6>Contract: {props.booking.contract}</h6>
            <hr />
            <h6> Date: {props.booking.date}</h6>
            <hr />
            <h6> StartTime: {props.booking.startTime}</h6>
            <hr />
            <h6> EndTime: {props.booking.endTime}</h6>
            <hr />
            <NavLink to={'/booking/edit/' + props.booking._id} className="btn btn-warning">
              Edit
            </NavLink>{' '}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingRoom;
