import React from 'react';
import extractImage from '../../utils/extractImage';


const Card = ({post}) => {


    const image = {
        backgroundImage: `url(${extractImage(post.content)})`,
        backgroundSize: '100%',
        height: '150px',
        borderTopRightRadius: '4px',
        borderTopLeftRadius: '4px',
    };

    const author = {
        fontSize: '15px',
        marginLeft: '10px',
        marginRight: '10px',
        marginTop: '20px',
        color: '#2b313e',
        opacity: '0.9'
    };

    const title = {
        fontSize: '21px',
        marginLeft: '10px',
        marginRight: '10px',
        marginTop: '10px',
        marginBottom: '20px',
        color: '#2b313e'
    };

    const card = {
        borderRadius: '4px',
        boxShadow: '0 1px 7px rgba(0,0,0,.05)',
        border: '1px solid rgba(0,0,0,.04)!important',
        background: '#fff',
        flexBasis: '300px',
        marginBottom: '20px',

    };

    return (
        <div style={card}>
            <a href={post.link}>
                <div style={image}>
                </div>
                <div style={author}>
                    by {post.creator}
                </div>
                <div style={title}>
                    {post.title}
                </div>
            </a>
        </div>
    );
};

export default Card