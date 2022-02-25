import { title } from 'process';
import * as React from  'react';
import { Alert, Button, Form } from 'react-bootstrap';
import { Note } from '../models/note.model';

interface ICreateNotesProps {
  notes:Note[],
  setNote :  React.Dispatch<React.SetStateAction<Note[]>>
} 

const CreateNotes: React.FunctionComponent<ICreateNotesProps> = ({notes,setNote}) => {
  const [error,setError] = React.useState<String>("");
  const titleRef = React.useRef<HTMLInputElement | null>(null);
  const textRef = React.useRef<HTMLTextAreaElement | null>(null);
  const colorRef = React.useRef<HTMLInputElement | null>(null);
  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    if(titleRef.current?.value === "" || textRef.current?.value === "" ){
      return setError("all filed are mendatory")
    }
    setError("");
    setNote([...notes,{
        id : (new Date).toString(),
        title : (titleRef.current as HTMLInputElement).value,
        text : (textRef.current as HTMLTextAreaElement).value,
        color : (colorRef.current as HTMLInputElement).value,
        date : (new Date).toString()
    }]);
    (titleRef.current as HTMLInputElement).value = "";
    (textRef.current as HTMLTextAreaElement).value ="";
    color : (colorRef.current as HTMLInputElement).value = "#dfdfdf"
  }
  
  
  
  return (
    <>
    {error && <Alert variant='danger'> {error}</Alert>}
    <h2>Create notes</h2>
    <Form className='mt-3 mb-3' onSubmit={(e)=>handleSubmit(e)}>
      <Form.Group className='mb-3' controlId='formBasicTitle'>
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder='enter title' ref={titleRef}/>
      </Form.Group>
      <Form.Group className='mb-3' controlId='formBasicText'>
        <Form.Label>Text</Form.Label>
        <Form.Control type="text" placeholder='enter your notes' as="textarea" rows={3} ref={textRef}/>
      </Form.Group>
      <Form.Group className='mb-3'>
        <Form.Label htmlFor='colorInput'>Notes color </Form.Label>
        <Form.Control type="color" id="colorInput" defaultValue="#dfdfdf" title='choose your color' ref={colorRef}/>
      </Form.Group>
      <Button type="submit" variant='primary'>submit</Button>
    </Form>
    </>
  );
};  

export default CreateNotes;
