import React,{ useState } from 'react';
import './App.css';
import Header from './components/Header';
import Createtodo from './components/Createtodo';
import Todos from './components/Todo';
import Footer from './components/Footer';

function App() {
  const [note,setNote]=useState({title:"",note:""});
  const [editID,setEditID]=useState(0);
  const[todoList,setTodolist]=useState([]);
  const[expandIt,setExpand]=useState(false);
  function onChange(e)
    {
       const{name,value}=e.target;
       setNote((preValue)=>{
            return {
                       ...preValue,
                       [name]:value
                  }
       }
       )
    }
 function onEdit(val)
    {
      setNote({
           title:val.title,
           note:val.note
      });
      setEditID(val.id+1);
      setExpand(true);
    }   
  function onExpand(val)
      {
        setExpand(val);
      }
  function onAdd(e)
         {   if(note.title!==''||note.note!=='')
               {
                e.preventDefault();
                  if(editID)
                     {

                          const afterChange=todoList.map((curr,index)=>
                                                  {
                                                     return editID-1===index?{title:note.title,note:note.note}:curr;
                                                  } );
                          setNote({
                                 title:'',
                                 note:''
                          })
                          setTodolist(afterChange);    
                          setEditID(0);                     
                     }
                 else{
                       setTodolist([...todoList,note]);
                       setNote({title:'',note:''});
                     }
               }
           

         }
  function onDelete(id)
          {
             const afterDelete=todoList.filter((curr,index)=>{
                  return id!==index;   
             })
             setTodolist(afterDelete);           
          }       
  return (
    <div className="App">
     <Header/> 
     <Createtodo onAdd={onAdd} expandIt={expandIt} onExpand={onExpand} title={note.title} note={note.note} editID={editID}  onChange={onChange}/>
    { todoList.map((curr,index) => {
  return (<Todos key={index} id={index} title={curr.title} note={curr.note} onDelete={onDelete} onEdit={onEdit}/>)
})
    }
     <Footer/>
    </div>
  );
}

export default App;
