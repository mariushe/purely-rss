import React from 'react';
import extractImage from '../../utils/extractImage';


const Card = ({post}) => {

    const cardStyle = {
        boxShadow: '0 1px 7px rgba(0,0,0,.05)',
        flexBasis: 'auto',
        width: '300px'
};

    console.log(extractImage(post.content));

    return (
        <div style={cardStyle}>
            <div>
            </div>
            <div>
                <p>
                    {post.title}
                </p>
                <p>by {post.creator}</p>
            </div>
        </div>
    );
};

export default Card