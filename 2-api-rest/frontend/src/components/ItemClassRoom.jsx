import React from 'react'

const ItemClassRoom = ({classRoom}) => {
  return (
    <>
    <ul>

        <li>{classRoom.name}</li>
        <li>{classRoom.active ? 'Active' : 'No Active'}</li>
        <li>{classRoom.order}</li>
        <li>{classRoom.numberOfStudents}</li>
        <li>{classRoom.students.map(student => student.name)}</li>
        

    </ul>
    </>
    )
}

export default ItemClassRoom