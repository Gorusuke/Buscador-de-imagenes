import React from 'react';

const Error = ({mensaje}) => {
    return (
        <p className="my-3 p-4 text-center alert alert-primary"><b>{mensaje}</b></p>
    );
}
 
export default Error;