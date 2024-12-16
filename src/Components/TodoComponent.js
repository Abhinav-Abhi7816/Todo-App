
import useDeleteContext from './Contexts/DeleteContext';
import useEditContext from './Contexts/EditContext';
import './TodoComponent.css';
function TodoComponent({innerText,id}) {
  const{setDeleteValue}=useDeleteContext();
  const{editValue,setEditValue}=useEditContext();
   function deleteClick()
   {
    setDeleteValue(id);
   }
   function edictClick()
   {
    setEditValue(id);
    console.log(editValue);
   }
  return (
    <>
    
    <div id="text-con2">
      {/* <textarea name="" id="text-id" value={innerText}></textarea> */}
      <ul id="text-para">
        <li >{innerText}</li>
      </ul>
      <div className="btn-con">
      <button className="com-btn" id="edit-btn" onClick={edictClick}>Edit</button>
      <button className="com-btn" id="delete-btn" onClick={deleteClick}>delete</button>
      </div>
    </div>
    </>
  )
}


export default TodoComponent
