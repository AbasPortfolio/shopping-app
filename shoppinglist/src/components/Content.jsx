import React, { useState } from 'react'
import { TiTrash } from "react-icons/ti";

const Content = ({item}) => {
    const [inputBox,setInputBox] = useState(false)

    
  return (
    <>
    {item.map(i => (
        <div className="item_list" key={i.id}>
        <div>
        <input type="checkbox" value={inputBox} onChange={(e)=> setInputBox(e.target.value)} />
            <h3>{i.list}</h3>
        </div>
        <button><TiTrash/></button>
    </div>
    ))}
    </>
  )
}

export default Content