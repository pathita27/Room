import React , {useState,useEffect} from "react";
import MainLayout from '../layouts/MainLayout';
import { NavLink } from "react-router-dom";
import RoomService from "../services/RoomService";
import logo from "../assets/react.svg";

const Room = () => {
  const [rooms,setRooms]=useState([]);

  const fetchRooms = () => {
    RoomService.getAll()
      .then((res)=>{
        console.log(res.data.data)
        setRooms(res.data.data)
      })
      .catch((e)=>{
        console.log(e);
      });
  }

  useEffect(()=>{
    fetchRooms()
  },[]);

  return (
    <MainLayout>
      <h1 className="mt-3">Room</h1>
      <hr />
      <div className="row">
        <div className="col d-flex justify-content-end">
          <NavLink to="/room/new" className="btn btn-success">
            Add Room
          </NavLink>
        </div>
      </div>
      <div className="row mt-2 row-cols-lg-4 row-cols-3 g-2">
        {
          rooms.map((menu)=>(
              <RoomCard menu={menu}/>
          ))
        }
      </div>
    </MainLayout>
  );
};

const RoomCard = (props) => {
  return (
    <>
      <div className="col">
        <div className="card">
          <div className="card-body">
            <img src={"../image"+ props.menu.imageroom} alt="" />
            <div className="card-text">
              <h5>{props.menu.name}</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Fugiat, saepe!
              </p>
              <h5>สถานะ: {props.menu.status}</h5>
              <h6>{props.menu.category}</h6>
              <NavLink
                to={"/room/" + props.menu._id}
                className="btn btn-primary"
              >
                Learn More
              </NavLink>{" "}
              <NavLink
                to={"/room/" + props.menu._id}
                className="btn btn-success"
              >
                Buy Now
              </NavLink>{" "}
              <NavLink
                to={"/room/edit/" + props.menu._id}
                className="btn btn-warning"
              >
                Edit
              </NavLink>{" "}
              <NavLink
                to={"/room/delete/" + props.menu._id}
                className="btn btn-danger"
              >
                Delete
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Room;
