import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { getNotes } from './actions/notes';
import Notes from './components/Notes';
import Form from './components/Form';

function App() {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNotes());
  }, [currentId, dispatch]);

  return (
    <div className="App">
      <Form currentId={currentId} setCurrentId={setCurrentId}/>
      <Notes setCurrentId={setCurrentId}/>
    </div>
  );
}

export default App;
