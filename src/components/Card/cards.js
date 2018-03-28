import React from 'react';
import Card from './Card';


const Cards = ({posts}) => {

    const style = {
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'space-around',
    };

    const CardsToDisplay = posts.slice(0, 3).map(post => {
        return <Card key={post.guid} post={post}/>;
    });

    return (
        <div style={style}>
            {CardsToDisplay}
        </div>
    );
};

export default Cards