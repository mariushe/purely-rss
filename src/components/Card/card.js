import React from 'react';


const Card = () => {

    const cardStyle = {
        boxShadow: '0 1px 7px rgba(0,0,0,.05)',
        flexBasis: 'auto',
        width: '300px'
};

    return (
        <div style={cardStyle}>
            <div>
            </div>
            <div>
                <div>
                    Java
                </div>
                <div>
                    Java 9: filtering and flatmapping - Two new collectors for your Streams
                </div>
            </div>
            Card
        </div>
    );
};

export default Card