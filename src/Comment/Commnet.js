import React from 'react';

const Commnet = (props) => {
    const {name, email} = props.comment;
    return (
        <div>
            <p>
                {name}:{email}
            </p>
        </div>
    );
};

export default Commnet;