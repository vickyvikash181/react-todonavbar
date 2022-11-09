import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Toggle from './components/Toggle';
import NestedList from './components/NestedList';
import CreateArea from './components/CreateArea';
import Users from './components/Users';

import Note from './components/Note';



function App() {
 
  const [notes, setNotes] = useState([]);
  
  function addNote(newNote) {
   
    
    console.log("vickyabc");
    setNotes(prevNotes => {
    
      var jsonData = {
        
        
          
       
        "title":newNote,
        "description":newNote
        // "title": "this is my title",
        // "description": "this is my description"
       
      }
    
      console.log("before post");
      console.log(JSON.stringify(jsonData));
     
      // Send data to the backend via POST
      
      fetch("http://localhost:3000/users/",  {  // Enter your IP address here
      method: 'POST',

        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(jsonData) // body data type must match "Content-Type" header

      })
      console.log("after post");
      // fetch("http://localhost:3000/users/").then(res => {
      //   if (res.ok) {
      //     return res.json()
      //   }
      // });
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }
  const [issidebaropen, setsidebaropen] = useState(true)
  console.log("vicky");
  function togglesidebar() {
    setsidebaropen(prevstate => {
      console.log("clicked here");
      return !prevstate;
    })

  }
  return (
    <div className="App">
      <Navbar />
      <Toggle handleclick={togglesidebar} />
      <NestedList issidebaropen={issidebaropen} />
      <CreateArea onAdd={addNote} />
      <Users />
      
      <combined />
      
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
    </div>
  );
}

export default App;
