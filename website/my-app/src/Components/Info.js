import React from 'react';
import { Header, Input, Checkbox, Button, Message, Card } from "semantic-ui-react";

const info = () => {
    const style = {
        backgroundColor: 'white',
        color: 'black',
        font: 'inherit',
        border: '3px solid black',
        padding: '8px',
        textAlign: 'center',
        position: 'fixed', left: '42.5%', top: '10%',
        transform: "translate(-10px, 100px)"
        
    };
    
    return(
        <div style={style}>
            <h1>Zach Bridwell</h1>
            <h2>Software Engineer</h2>
        </div>
    );
}

export default info