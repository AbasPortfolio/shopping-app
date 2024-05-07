import React, { useState } from 'react'
import { IoAdd } from "react-icons/io5";

const AddItems = ({AddItems}) => {
    const [text,setText] = useState("")
    const [showText,setShowText] = useState(false)

    const toggleBtn = () => {
        setShowText(prevState => !prevState)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        AddItems()
        setText("")
    }
  return (
    <div className='add'>
        {showText &&<form>
            <input type="text" placeholder='Add items' value={text} onChange={(e) => setText(e.target.value)} />
            <button type='submit' onClick={handleSubmit}>add</button>
        </form>}
        {!showText &&<button className='newItem' onClick={toggleBtn}><IoAdd/></button>}
    </div>
  )
}

export default AddItems