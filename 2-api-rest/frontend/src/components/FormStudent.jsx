
import React, { useState } from 'react'
import { useEffect } from 'react';
import clientAxios from '../config/axios';
import ListStudents from './ListStudents';


const initialStateTask = {
  name: "",
  age: "",
  active: false,
 
};

const FormStudent = () => {
  const [formStudent, setFormStudent] = useState(initialStateTask);
  const [listStudents, setListStudents] = useState([])
 
  const { name, age, active} = formStudent;


  const handleChange = (e) => {
    setFormStudent({
      ...formStudent,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await clientAxios.post("/students", formStudent);
      getStudents();
    } catch (error) {
      console.log(error);
    }
  };

  const getStudents = async () => {
    const result = await clientAxios.get("/students");
    setListStudents(result.data);
  };

  useEffect(() => {
    getStudents();
  }, []);
  



  return (

    <>
    <div>Form Students</div>
    
    <form onSubmit={onSubmit}>
      <label  htmlFor="">Name</label>
        <input
          autoComplete='off'
          type="text"
          placeholder="name"
          name="name"
          value={name}
          onChange={handleChange}
        />
      <label  htmlFor="">Age</label>
        <input
          autoComplete='off'
          type="number"
          placeholder="age"
          name="age"
          value={age}
          onChange={handleChange}
        />
 
        <label htmlFor="">Active</label>
        <select 
            name="active" 
            id=""
            value={active}
            onChange={handleChange}
        >
          <option value={false}>No Active</option>
          <option value={true}>Active</option>
        </select>

        <input
          type="submit"
          className="input-button"
        />
      </form>


    
      <ListStudents  listStudents={listStudents} />

 
     
 
    </>
  )
}

export default FormStudent