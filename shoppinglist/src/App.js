import { useState } from "react";
import AddItems from "./components/AddItems";
import Content from "./components/Content";
import Header from "./components/Header";
import Search from "./components/Search";
import { v4 as uuid } from 'uuid'


function App() {
  const [item,setItem] = useState([])
  const AddItems = (list) =>{
    const id = item.length ? item[item.length - 1].id + 1 : 1
    const myNewItem = {id, list}
    setItem(myNewItem)
  }

  
  return (
    <div className="App">
      <Header/>
      <Search/>
      <AddItems AddItems={() => AddItems(list)}/>
      <Content item={item}/>
    </div>
  );
}

export default App;
