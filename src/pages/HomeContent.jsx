import React , {useState,useEffect} from "react";
import MainLayout from '../layouts/MainLayout';
import { NavLink } from "react-router-dom";
import RoomService from "../services/RoomService";
import logo from "../assets/react.svg";

const HomeContent = () => {
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
    <>
      
      <div className="row mt-2 row-cols-lg-4 row-cols-3 g-2">
        {
          rooms.map((menu)=>(
              <RoomCard menu={menu}/>
          ))
        }
      </div>
    </>
  );
};

const RoomCard = (props) => {
  return (
    <>
      <div className="col">
        <div className="card">
          <div className="card-body">
            <img src={logo} alt="" />
            <div className="card-text">
              <h5>{props.menu.name}</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Fugiat, saepe!
              </p>
              <h5>{props.menu.price}</h5>
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HomeContent;
