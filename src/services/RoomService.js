import http from "../http-common.js"

const getAll = () => {
  return http.get("/room");
}

const get = (id) => {
  return http.get("/room/" + id);
}

const create =(room) =>{
  return http.post("/room", room);
}

const deleteRoom = (id) =>{
  return http.delete("/room/"+ id);
}
const updateRoom =(id,room)=>{
  return http.put("/room/"+ id,room);
}
const RoomService = {
  getAll,
  get,
  create,
  deleteRoom,
  updateRoom
}

export default RoomService;