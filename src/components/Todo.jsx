import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
const Todos=(props)=>{
    function handelDelete()
        {
            props.onDelete(props.id);
        }
    function handelEdit()
        {
           props.onEdit({
                   title:props.title,
                   note:props.note,
                   id:props.id
           })
        }    
    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.note}</p>
            <button onClick={handelEdit}>
                 <EditIcon/>
            </button>
            <button onClick={handelDelete}>
                <DeleteIcon/>
            </button>
        </div>
    )
}
export default Todos;