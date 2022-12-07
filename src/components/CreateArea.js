import React, { useState } from "react";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import GradeIcon from '@mui/icons-material/Grade';
import ListItemButton from '@mui/material/ListItemButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import { List } from "@mui/material";



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
      <Stack spacing={0}>
      
      
      <textarea
      name="content"
      onChange={handleChange}
      value={note.content}
      
      placeholder="Add a task..."
      rows="3" 
     
      />
      <List>
      <LightModeIcon   />
       
      <GradeIcon />
      </List>
     </Stack>
      </Box>
     
        <button onClick={submitNote}>Add </button>
      
        
      </form>
    </div>
     
  );
}

export default CreateArea;