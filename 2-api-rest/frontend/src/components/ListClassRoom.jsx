import React from 'react'
import ItemClassRoom from './ItemClassRoom'

const ListClassRoom = ({listClassRoom}) => {
 

  return (
    <>
    
    
  
    

         
    {
          listClassRoom.map(classRoom => (
            <ItemClassRoom key={classRoom._id} classRoom={classRoom} />
          ))
        }

    </>
  )
}

export default ListClassRoom