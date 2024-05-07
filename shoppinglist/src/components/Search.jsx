import React, { useState } from 'react'
import { IoSearchOutline } from "react-icons/io5";

const Search = () => {
    const [search,setSearch] = useState("")
  return (
    <form className='search_form'>
        <label htmlFor="search"><IoSearchOutline/></label>
        <input type="search" id='search' placeholder='search items' value={search} onChange={(e) => setSearch(e.target.value)} />
    </form>
  )
}

export default Search