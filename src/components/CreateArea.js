import React, { useState } from "react";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';


function CreateArea(props) {
  const [note, setNote] = useState({
    
    content: ""
  });

  function handleChange(event) {
    console.log("aaaa");
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }


  function submitNote(event) {
    console.log("..........................");
    props.onAdd("note");
    setNote({
      
      content: ""
    });
    event.preventDefault();
  }
  

    
    
  

  return (
    
      <div>
      <form>
      <Box sx={{ width: '100%' }}>
      <Stack spacing={2}>
      <textarea
      name="content"
      onChange={handleChange}
      value={note.content}
      
      placeholder="Add a task..."
      rows="3"
      />
     </Stack>
      </Box>
        
        <button onClick={submitNote}>Add 1</button>
        
      </form>
    </div>
     
  );
}

export default CreateArea;