import React from 'react';
import Card from './Card';


const Cards = () => {

    const style = {
        display: 'flex',
        flexDirection: 'row',
        flexGrow: '1'
    };

    return (
        <div style={style}>
            <Card/>
            <Card/>
            <Card/>
        </div>
    );
};

export default Cards