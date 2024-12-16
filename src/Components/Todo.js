import React, { useEffect, useState } from 'react'
import './/Todo.css';
import TodoComponent from './TodoComponent';
import useDeleteContext from './Contexts/DeleteContext';
import useEditContext from './Contexts/EditContext';
function Todo() {
    const [todoArr,setTodoArr]=useState([]);
    const{deleteValue,setDeleteValue}=useDeleteContext();
    const{editValue,setEditValue}=useEditContext();
    const[tempArr,setTempArr]=useState([]);
    const [buttonValue,setButtonValue]=useState("Add");

    useEffect(()=>{
      if(deleteValue===-1)
      {
        return;
      }
      let temp=todoArr;
      temp=temp.filter((el,index)=>{  
        return index!==deleteValue;
      })
      setTodoArr(temp);
      localStorage.setItem("arr", JSON.stringify(temp));
      setDeleteValue(-1);
      
    },[deleteValue,setDeleteValue,todoArr])

    const [text,setText]=useState('');

    useEffect(() => {
      // localStorage.setItem("arr",[]);
      const savedTodos = localStorage.getItem("arr");
      if (savedTodos) {
        setTodoArr(JSON.parse(savedTodos));
      }
    }, []); 

    useEffect(()=>{
      if(editValue===-1)
      {
        return;
      }
      const savedTodos=localStorage.getItem("arr");
      let temp=[];
      if(savedTodos)
      {
        temp=JSON.parse(savedTodos);
      }
      setButtonValue("Save");
      setText(temp[editValue]);
      setTempArr(temp);
    },[editValue])
    function saveClick()
    {
      let arrTemp=tempArr;
      arrTemp[editValue]=text;
      localStorage.setItem("arr",JSON.stringify(arrTemp));
      setTodoArr(arrTemp);
      setText("");
      setButtonValue("Add");
      setEditValue(-1);
    }
    function addButton()
    {
        
        if(text.trim() === '')
        {
            alert("Text cannot be Empty!");
            return;
        }
        
        setTodoArr((prev)=>{
          const updated=[...prev,text]
          localStorage.setItem("arr",JSON.stringify(updated))
          return updated;
        });
        console.log(localStorage.getItem("arr"))
        setText('');
    }
    function buttonClick()
    {
      if(buttonValue==="Add")
      {
        addButton();
      }
      else{
        saveClick();
      }
    }
   
  return (
    <>
    <div className="content"><nav>
    <h1>TODO LIST</h1>
    </nav>
    <div className="todos-list" id="todo-list-id">
    <div id="text-con">
      <textarea name="" id="text-id" placeholder='Create a new Todo...' value={text} onChange={(e)=>setText(e.target.value)}></textarea>
      <button onClick={buttonClick} id="add-btn">{buttonValue}</button>
      {/* <button id="save-btn" className='displayClass' onClick={saveClick}>Save</button> */}
    </div>
    <div className="todos">
        {todoArr.map((el, index) => (
            <TodoComponent key={index} innerText={el} id={index}></TodoComponent>
        ))}
    </div>
    </div></div>
    </>
  )
}

export default Todo
