import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import BookingService from "../services/BookingService";
import { useNavigate, NavLink } from "react-router-dom";
import swal from "sweetalert";

const Booking = () => {
  const navigate = useNavigate();
  const [booking, setBooking] = useState({});

  const saveBooking = (e) => {
    e.preventDefault();
    BookingService.create(booking)
      .then((res) => {
        swal({
          icon: "success",
          text: "Booking successful",
          title: "Result",
        }).then(() => {
          navigate("/bookingslip"); // เมื่อบันทึกสำเร็จ นำไปยังหน้า "Booking Slip"
        });
      })
      .catch((error) => {
        swal({
          icon: "error",
          text: "Booking failed",
          title: "Result",
        });
        console.log(error);
      });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBooking({ ...booking, [name]: value });
  };

  return (
    <MainLayout>
      <h1 className="mt-3">Booking</h1>
      <hr />
      <div className="col d-flex justify-content-end ">
        <NavLink to="/bookingslip" className="btn btn-success">
          See Booking Slip
        </NavLink>
      </div>
      <div className="row mt-3 ">
        <div className="col-md-7"></div>
        <div className="col-md-5">
          <form onSubmit={saveBooking}>
          <div className="col-md- d-flex align-items-center justify-content-center"> 
            <img src="/image/A2.jpg" width="550" height="450" alt="รูปเด็ก" />         
      </div>
            <div className="mb-3 row">
              <label htmlFor="room_number" className="col-4 col-form-label">
                Room Number
              </label>
              <div className="col-8 text-center">
                <input
                  type="text"
                  className="form-control"
                  name="room_number"
                  id="room_number"
                  placeholder="Enter the room number you want to book"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label htmlFor="name" className="col-4 col-form-label">
                Name
              </label>
              <div className="col-8">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  id="name"
                  placeholder="Enter the booker's name"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label htmlFor="email" className="col-4 col-form-label">
                E-mail
              </label>
              <div className="col-8">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="Enter the booker's email"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label htmlFor="contract" className="col-4 col-form-label">
                Contract
              </label>
              <div className="col-8">
                <input
                  type="text"
                  className="form-control"
                  name="contract"
                  id="contract"
                  placeholder="Enter the contract you want to rent"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label htmlFor="date" className="col-4 col-form-label">
                Date
              </label>
              <div className="col-8">
                <input
                  type="date"
                  className="form-control"
                  name="date"
                  id="date"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label htmlFor="startTime" className="col-4 col-form-label">
                Start Time
              </label>
              <div className="col-8">
                <input
                  type="time"
                  className="form-control"
                  name="startTime"
                  id="startTime"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label htmlFor="endTime" className="col-4 col-form-label">
                End Time
              </label>
              <div className="col-8">
                <input
                  type="time"
                  className="form-control"
                  name="endTime"
                  id="endTime"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <div className="offset-sm-4 col-sm-8">
                <button type="submit" className="btn btn-primary">
                  SAVE
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </MainLayout>
  );
};

export default Booking;
