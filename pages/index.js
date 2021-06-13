import { useState } from "react";
import { v4 } from "uuid";
const HomePage = () => {

 const [value,setValue]=useState("");
 const [database,setToList]=useState([]);
 
//*******
// get the change text 
//*******
 const onChange=(e)=>{  
    let getval=e.target.value;
    setValue(getval);
    
}
//*******
// add to list
//*******
   const add=()=>{
    if(value!=""){
      setToList([...database,{
      id: v4(),
      name: value,
    }]);
    setValue(""); 
       console.log(database);
    }
  } 

  //*******
// edit the value in the list
//*******
  const editItem = (index) => {
   
    if(value!="")
    {
      database[index].name=value;
      setToList([...database]);
      setValue(""); 
    }
      
}

  //*******
// delete the value in the list
//*******
  const deleteItem = (id) => {
    setToList(database.filter((database) => id != database.id))
  };
 

    return (
      <div>
<h1 className="Title">Todo List</h1>
        <div className="todo">
      
          <div className="inputTextandBtn">
          <input  className="inputText" type="text"  onChange={onChange} value={value} />
        <button onClick={add}>add</button>
          </div>
      
        </div>
        <ul className="ListTodo">
        {database.map((e,index) =>(<div className="listStage" key={e.id} ><li> {e.name }</li><div className="btn-todo"><button onClick={()=>editItem(index)}>Edit</button><button onClick={()=>deleteItem(e.id)}>Delete</button></div></div>)).reverse()}

        </ul>
      
      
      </div>
    );  

    }
 
export default HomePage;