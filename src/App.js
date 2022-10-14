import React, { useState } from "react"
import data from "./data"
function App() {
  const [items, setItem] = useState (data)
  const item = items.map(
    function (item)
    {
      return(
        <div key = {item.id}>
          {item.title}
          <strong>&nbsp;
          <button onClick={()=>deleteSingle(item.id)}>x</button>
          </strong>
        </div>
      )
    }
  )
    function refresh(){
      setItem(data)
    }
    
    function deleteSingle (unique)
    {
      const newItems = items.filter(function(ky){
      return ky.id !== unique
      })
      setItem(newItems)
    }
  
    function addNewitem ()
  {
    
    const item = {
      id: `${items.length + 1}`,
     title:`item ${items.length + 1} `}
    setItem ((prevItem) => [...prevItem,item] )
  }

  function clearall ()
  {
    setItem ([])
  }

  
  return (
    <div>
      <button onClick={addNewitem}>Add new item</button>
      {item}
      <button onClick={clearall}>
        Clear All
      </button><br/>
      <button onClick={refresh}>Refresh</button>
    </div>
  );
}

export default App;
