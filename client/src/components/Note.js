import React,{useState,useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { deleteNote } from '../actions/notes';
import moment from 'moment';
import {cipherRot13,reverseString,encryptEmoji,decryptEmoji} from '../utils/util'


const Note = ({note,setCurrentId}) =>{
    const dispatch = useDispatch();
    var date = moment(note.createdAt).format('lll')
    const [localNote,setLocalNote] = useState(note.note)
    const [hidden,setHidden] =useState(true)
    useEffect(() => {
        encryptNote();
      }, []);
    
      const handleRead = () => {
          if(hidden) decryptNote()
          else encryptNote()
          setHidden(!hidden)
      }
    const encryptNote = () => {
        if(note.encryption==="Backwards") {
            setLocalNote(reverseString(localNote));
        } else if(note.encryption==="Scramble"){
            setLocalNote(cipherRot13(localNote));
        }else if(note.encryption==="Emoji"){
            setLocalNote(encryptEmoji(localNote));
        }
    }
    const decryptNote = () => {
        if(note.encryption==="Backwards") {
            setLocalNote(reverseString(localNote));
        } else if(note.encryption==="Scramble"){
            setLocalNote(cipherRot13(localNote));
        }else if(note.encryption==="Emoji"){
            setLocalNote(decryptEmoji(localNote));
        }
    }
    return(
        <div className="row list-group-item rowMiddle">
            <div className="col-md-9 col-sm-12">
                <span >{localNote}</span>
                <span className="label">{ date.toLocaleString()}</span>
                
            </div>
            <div className="col-md-1 col-sm-2">
            <button type="button"
            onClick={handleRead}
             className="btn btn-success btn-sm">{hidden ? "Read" : "Hide"}</button>
            </div>
            <div className="col-md-1 col-sm-2">
            <button type="button"
            onClick={() => setCurrentId(note._id)}
             className="btn btn-primary btn-sm">Edit</button>
            </div>
            
            <div className="col-md-1 col-sm-2">
            <button type="button" 
            onClick={() => dispatch(deleteNote(note._id))}
             className="btn btn-danger btn-sm deleteStyle">Delete</button>
            </div>
    </div>
    )
}

export default Note