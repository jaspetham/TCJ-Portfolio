import React from 'react'

function Title(props) {
    return (
        <div className="position-relative d-flex text-center mb-5">
            <h2 className="background-text text-uppercase w-100 mb-0">{props.background}</h2>
            <p className="title-text position-absolute w-100 align-self-center mb-0">{props.title}
            <span className="underline d-block mx-auto"></span> </p>
        </div>
    )
}

export default Title
