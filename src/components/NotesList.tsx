import { title } from 'process';
import * as React from 'react';
import { Note } from '../models/note.model';
import Notes from './Notes';

interface INoteListProps {
    notes:Note[],
    setNote :  React.Dispatch<React.SetStateAction<Note[]>>
}

const NoteList: React.FC<INoteListProps> = ({notes , setNote}) => {
    const handleDelete= (id :String) =>{
        // console.log("the notes to be deleted",id);
        setNote(notes.filter(note => note.id !== id ))
        
    }
    const renderNotes= ():JSX.Element[]=>{
       return notes.map(note =>{
         return   <Notes key={note.id} note={note} handleDelete ={handleDelete}/>
        })
    }
  return(
      <>
      <h2 className='mt-3'> Notes</h2>
      <div> {renderNotes()}</div>
      </>
  ) ;
};

export default NoteList;
