import React, { useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import MainLayout from "../layouts/MainLayout";
import BookingService from '../services/BookingService';
import swal from 'sweetalert';

const EditBooking = () => {
    let navigate = useNavigate();
    let params = useParams();
    let id = params.id;
    let [booking, setBooking] = useState({});

    //let inputRoomNumber = useRef();
    //let inputPrince = useRef();
    //let inputFloor = useRef();
    useEffect(() => {
        fetchBooking();
      }, []);

      const fetchBooking = () => {
        BookingService.get(params.id)
          .then((res) => {
            setBooking(res.data.data);
            console.log(res);
          })
          .catch((e) => {
            console.log(e);
          });
      };
      const saveBooking = (e) => {
        e.preventDefault();
        BookingService.update(id, booking)
            .then((res) =>{
                swal({
                    icon:"success",
                    text:"Insert complete",
                    title: "Result"
                })
                navigate("/bookingslip")
            })
            .catch((e)=>{
                swal({
                    icon:"error",
                    text:"Insert failed",
                    title: "Result"
                })
                console.log(e)
            });
        
    }
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setBooking({ ...booking, [name]: value });
      };
  return (
   <MainLayout>
    <h1 className="mt-3"> 𝗘𝗱𝗶𝘁 𝗕𝗼𝗼𝗸𝗶𝗻𝗴</h1>
    <hr />
    <div className="row">
        <div className="col-md-8 offset-md-2">
          <form onSubmit={saveBooking}>
          <div className="mb-3 row">
              <label htmlFor="inputName" className="col-4 col-form-label">
                Room Number
              </label>
              <div className="col-8">
                <input
                  type="text"
                  className="form-control"
                  name="room_number"
                  id="room_number"
                  placeholder="Please enter the room number you want to book."
                  onChange={handleInputChange}
                  value={booking.room_number}
                />
              </div>
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
  )
}

export default EditBooking