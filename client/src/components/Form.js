import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createNote, updateNote } from '../actions/notes';

const Form = ({ currentId, setCurrentId }) => {

    const [noteData, setNoteData] = useState({ note: '', encryption: ''});
    const note = useSelector((state) => (currentId ? state.notes.find((t) => t._id === currentId) : null));
    const dispatch = useDispatch();
    const [error,setError] = useState("")
    useEffect(() => {
        if (note) setNoteData({...note});
    }, [note]);

    const clear = () => {
        setCurrentId(0);
        setError("")
        setNoteData({ note: '', encryption: '' });
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(noteData.note===""){
            setError("Please enter Note value")
            return
        }
        if(noteData.encryption===""){
            setError("Please select Encryption Type")
            return
        }
        if (currentId === 0) {
            dispatch(createNote(noteData));
            clear();
        } else {
            dispatch(updateNote(currentId, noteData));
            clear();
        }
    }

   

    return (
        <div className="row justify-content-md-center customWidth" >
            <div className="col-sm-7" id="note">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>My Notes</legend>
                    <div className="mb-3">
                        <input type="text" name="note" value={noteData.note}
                         className="form-control"
                          placeholder="Note"
                          onChange={(e)=>setNoteData({...noteData,note:e.target.value})} />
                    </div>
                    <div className="mb-3">
                    <select className="form-select"
                         value={noteData.encryption}
                         onChange={(e)=>setNoteData({...noteData,encryption:e.target.value})} >
                            <option key="" value="">Encryption Type</option>
                            <option key="Backwards" value="Backwards" >Backwards</option>
                            <option key="Emp-gize" value="Emoji" >Emp-gize</option>
                            <option key="Letter-scramble" value="Scramble" >Letter-scramble</option>
                            <option key="Nothing" value="Nothing" >Nothing</option>
                            </select>
                    </div>
                    <div className="mb-3 divAlign">
                    <div className="col-sm-10">
                    <label className="errorMessage">{error}</label>
                    </div>
                    <div className="col-sm-2">
                    <input type="submit" className="btn btn-primary" value={currentId!==0?"Update Note":"Create Note"} />
                        </div>
                        
                    </div>
                </fieldset>
            </form>
        </div>
        </div>
        
    )
}

export default Form