import React, { useState, useEffect } from 'react';

import './App.css';
import Navbar from './components/navbar';
import Toggle from './components/Toggle';
import NestedList from './components/NestedList';
import CreateArea from './components/CreateArea';

import axios from 'axios';
import NoteTimeline from './NoteTimeline';
 
import Note from './components/Note';
import Grid from '@mui/material/Unstable_Grid2';
// import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
export default function App() {


  console.log("vickyvhb b");
  const [notes, getNotes] = useState('');
  const url = 'http://localhost:3000/users';
  useEffect(() => {
    getAllNotes();
  }, []);
  // console.log("abcdef");
  const getAllNotes = () => {
    axios.get(url)

      .then((response) => {
        console.log(response);
        // console.log("vickyvikash");

        const allNotes = response.data;

        getNotes(allNotes);
      })
      .catch(error => console.error((error)));
  }

console.log("cvfgyu8hbvbhj");

  function addNote(newNote) {


    console.log("vickyabc");
    getNotes(prevNotes => {

      var jsonData = {
        "title": newNote,
        "description": newNote
        // "title": "this is my title",
        // "description": "this is my description"

      }

      console.log("before post");
      console.log(JSON.stringify(jsonData));

      // Send data to the backend via POST

      fetch("http://localhost:3000/users/", {  // Enter your IP address here
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
    console.log("aaaaaabbbbb");

    getNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return noteItem.id !== id;
        // return index !== id;
      });
    });
  }

  const [issidebaropen, setsidebaropen] = useState(true)
  function togglesidebar() {
    setsidebaropen(prevstate => {
      console.log("clicked here");
      return !prevstate;
    })
  }

  const [ismainbaropen, setmainbaropen] = useState(true)
  function Nestedmainbar() {
    setmainbaropen(prevstate => {
      console.log("clicked here");
      return !prevstate;
    })
  }



      console.log(notes);
console.log("apple");

  return  (
    
    <div className="App">
    <Navbar />
    <Toggle handleclick={togglesidebar} />
    <Grid container spacing={2}>
  <Grid xs={issidebaropen?3:0}>
    <NestedList issidebaropen={issidebaropen} ismainbaropen={ismainbaropen}/></Grid>
    <Grid xs={issidebaropen?9:12}>
    <CreateArea onAdd={addNote}  />
    <NoteTimeline notes={notes} />

    
      {[...notes].reverse().map((noteItem, index) => {
          console.log(noteItem, index);
          return (
      
  
            <Note
              key={index}
              id={noteItem.id} 
              // id={index}
              title={noteItem.title}
              content={noteItem.content}
              onDelete={deleteNote}
            />
          );
        })}
  </Grid>
  </Grid>

    </div>
  );


}





