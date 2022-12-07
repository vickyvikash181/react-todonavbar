import React from "react";
 export default function NoteTimeline(props) {
    const displayNotes = (props) => {
        const { notes} = props;
        if(notes.length > 0) {
            return(
                notes.map((note,index)=> {
                    console.log(note);
                    return(
                        <div className="note" key={note._id}>
                         <h3 className="note__title">{note.title}</h3> 
                          <p className="note__description">{note.content}</p>

                        </div>
                    )
                })
            )
        }else {
            return(<h3>no notes</h3>)
        }
    }
return(
    <>
       {displayNotes(props) }
    </>
)

 }