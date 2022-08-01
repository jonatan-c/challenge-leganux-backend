import React from 'react'
import { useEffect } from 'react'

const ItemStudent = ({student}) => {


  return (

    <>
      <ul>

        <li>{student.name}</li>
        <li>{student.age}</li>
        <li>{student.active ? 'Active' : 'No Active'}</li>
      </ul>
    </>
    )
}

export default ItemStudent