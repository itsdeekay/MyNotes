import React from 'react';
import { useSelector } from 'react-redux';
import Note from './Note';

const Notes = ({setCurrentId}) => {
    const notes = useSelector((state) => state.notes);
    return (
        <div className="container">
          
            <div className="row justify-content-md-center">
                <div className="col-md-8">
                    {notes.length>0?
                        <ul className="list-group">
                        
                    {notes.map((note) => (
                        <Note note={note} key={note.note} setCurrentId={setCurrentId} />
                    ))}
                    </ul> : <div className="loading">Loading Notes...</div>
                    }
                
                
                </div>
                
            </div>
        </div>
    )
}

export default Notes