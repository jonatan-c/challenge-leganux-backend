import React from 'react'
import ItemStudent from './ItemStudent'

const ListStudents = ({listStudents}) => {
  return (
    <>
    
    
        {
          listStudents.map(student => (
            <ItemStudent key={student._id} student={student} />
          ))
        }
      
      
    </>
  )
}

export default ListStudents