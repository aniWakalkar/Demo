import {React, useState, useEffect} from 'react';
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";

const getData = ()=>{
    let Db = localStorage.getItem("Db");
    if (Db) {
      return Db = JSON.parse(Db);
    } else {
      return Db = [];
    }
  }

const Form = ()=>{
    const [array, setArray] = useState(getData);
    const [note, setNote] = useState('');
    const [Id, setId] = useState(0);

    useEffect(()=>{
      localStorage.setItem("Db", JSON.stringify(array));
      console.log(array);
   }, [array])

   
    const handelForm = (e)=>{
        e.preventDefault();
        if(note === ''){
          console.log("Type something....");
        }else{
          setArray([...array, {ID: new Date().getTime(), Note :note}])
          setNote('');
        }
      }


// ----------------------------------------------------------------
  
    const handelDelete = (id)=>{
      let newArray = array.filter((e)=>{
        return e.ID !== id
      })

      setArray(newArray);
    }
  

    const handelEdit = (id)=>{
      let editNote = array.filter((e)=>{
        return e.ID === id
      })
      console.log(editNote[0].Note);
      setNote(editNote[0].Note);
      setId(id);
    }


    const editSave = ()=>{
      setArray(array.map((e)=>{
        if (e.ID === Id) {
          return {...e, Note:note}
        }
        return e
      }))
      setNote('')
    }

    return (
    <div className='form'>
        <form className="fields" onSubmit={handelForm}>

            <div className="field">
                <input type="text" placeholder='add a note....' value={note} 
                  onChange={(e)=>{  
                  setNote(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1))}}/>
            </div>

            {/* <div className="field"><textarea rows="3" placeholder='Description' 
                disabled={true}></textarea></div> */}

            <div className="field">
                <button type='submit'>
                    <b>Add </b>
                </button>
                <button type='button' onClick={editSave}>
                    <b> editSave </b>
                </button>
            </div>
        </form>
  
        <div className='itemsContainer'>
            <div className=''>
              { 
                array.length > 0 && 
                array.map((e, i)=> 
                    <div className="itemContainer" key={i}>
                        <span>{i+1 +") " + e.Note} </span>
                        <span id='edit'>
                          <MdEdit onClick={()=>{handelEdit(e.ID)}}/> 
                          <i>______</i>
                          <MdDelete onClick={()=>{handelDelete(e.ID)}}/>
                        </span>
                    </div> )
              }
            </div> 
        </div>
    </div> 
    )}
  


  export default  Form 