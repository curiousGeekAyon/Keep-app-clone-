import React from "react";
import DoneIcon from '@mui/icons-material/Done';
const Createtodo=(props)=>{
   
    function handelChange(e)
        {
           props.onChange(e);
        }
    function handelClick(e)
        {      
            props.onAdd(e);
        }
    function handelExpand()
                {
                    props.onExpand(true);
                }
    function handelShrink()
                {
                    props.onExpand(false);
                }            
    return (
        <form className="create-note" onDoubleClick={handelShrink}>
        {props.expandIt?
        (<input type="text"placeholder="title" name="title"  value={props.title} onChange={handelChange} onDoubleClick={handelShrink}/>):null}
        <textarea 
        rows=""
        column=""
        placeholder="note" name="note" onChange={handelChange} value={props.note} onClick={handelExpand} />
        {props.expandIt?(<button onClick={handelClick}>{props.editID?<DoneIcon/>:'➕'}</button>):null}
          </form>
    )}

export default Createtodo;    