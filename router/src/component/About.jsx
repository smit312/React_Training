import React, { useEffect } from 'react';
import { useContext } from 'react';
import NoteContext from '../context/notes/noteContext';

function About() {
    const a =  useContext(NoteContext);
    useEffect (() => {
        a.update();
    }, [])
    return (
        <div>
            <h1>This is about {a.state.name} and age is {a.state.age}</h1>
        </div>
    )
}

export default About;
