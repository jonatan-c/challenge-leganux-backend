import React, { useEffect, useState } from 'react'
import clientAxios from '../config/axios';
import ListClassRoom from './ListClassRoom';
 


const initialStateTask = {
  className: "",
  order: "",
  numberOfStudent: 0,
  active: true,
  students: [],
};

const FormStudents = () => {


  const [formClassRoom, setFormClassRoom] = useState(initialStateTask);
  const { className, order, numberOfStudents, active, students } = formClassRoom;

  
  const handleChange = (e) => {
    setFormClassRoom({
      ...formClassRoom,
      [e.target.name]: e.target.value, 
    });
  };


  const onSubmit = async (e) => {
    e.preventDefault();
 
    try {
      const result = await clientAxios.post("/classRooms", formClassRoom);
      getClassRooms()
    } catch (error) {
      console.log(error);
    }
    
  }
  
  // STUDENTS
  const [listStudentsClassRoom, setListStudentsClassRoom] = useState([]);
  const getStudents = async () => {
    const result = await clientAxios.get("/students");
    setListStudentsClassRoom(result.data);
    getClassRooms();
  };
  useEffect(() => {
    getStudents();
  }, [  ]);
      
  // CLASSROOM       
  const [listClassRoom, setListClassRoom] = useState([])
  const getClassRooms = async () => {
    const result = await clientAxios.get("/classrooms");
    setListClassRoom(result.data);
    
  }
  useEffect(() => {
    getClassRooms();
  }, [])
  


  return (
    <>
      <div>Form Class Room</div>

      <form onSubmit={onSubmit}>
        <label htmlFor="classRoom">Clase</label>
        <input
          id='classRoom'
          type="text"
          placeholder="CLASE"
          autoComplete="off"
          name="className"
          value={className}
          onChange={handleChange}
        />
        <label htmlFor="order">Order</label>
        <input
          id='order'
          autoComplete="off"
          type="number"
          placeholder="Order"
          name="order"
          value={order}
          onChange={handleChange}
        />
        <label htmlFor="numberOfStudents">Numero de estudiante</label>
        <input
          id='numberOfStudents'
          autoComplete="off"
          type="number"
          placeholder="Numero de estudiante"
          name="numberOfStudents"
          value={numberOfStudents}
          onChange={handleChange}
        />

        <label htmlFor="active">Active</label>
        <select name="active" id="active" value={active} onChange={handleChange}>
          <option value={false}>No Active</option>
          <option value={true}>Active</option>
        </select>

        <label htmlFor="students">Students</label>
        <select onChange={handleChange} id="students" name="students">
          {listStudentsClassRoom?.map((student) => (
            <option key={student._id} value={student._id}>
              {student.name}
            </option>
          ))}
        </select>

        <input
          type="submit"
          className="input-button" 
        />
      </form>

      <ListClassRoom listClassRoom={listClassRoom} />
    </>
  );
}

export default FormStudents