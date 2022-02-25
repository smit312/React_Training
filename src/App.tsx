import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import CreateNotes from './components/CreateNotes';
import Header from './components/Header';
import NoteList from './components/NotesList';

import { Note } from './models/note.model';

function App() {
  const [notes , setNote] =  useState<Note[]>([{
    id:(new Date).toString(),
    title : "metting",
    text:"schedule metting at 4",
    color :"#DFDFDF",
    date :(new Date).toString()

  }])
  return (
  <>
    <Header />
    <Container className='mt-5'>
      <Row>
        <Col>
        <NoteList notes={notes} setNote={setNote}/>
        </Col>
      </Row>
      <Row>
        <Col>
        <CreateNotes  notes={notes} setNote={setNote}/>
        </Col>
      </Row>
    </Container>
  </>
  );
}

export default App;
