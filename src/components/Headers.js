import React from 'react';

const Headers = (props) => {

    return (
        <section className="jumbotron text-center">
            <h1 className="jumbotron-heading">Go Fund {props.name}</h1>
            <p className="lead text-muted">{props.discription}</p>
        </section>
    )
}

export default Headers;