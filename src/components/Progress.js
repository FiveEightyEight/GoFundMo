import React from 'react';

const Progress = (props) => {

    const barStyle = {
        width: `${(props.raised / props.reach) * 100}%`
    };

    return (
        <>
            <h2 className='mb-4'>Raised $ {props.raised} of <span className='text-muted'>$ {props.reach}</span></h2>
            <div className="progress">
                <div className="progress-bar bg-success" role="progressbar" style={barStyle} aria-valuenow="25"
                    aria-valuemin="0" aria-valuemax="100">{Math.round((props.raised / props.reach) * 100)}%
                </div>

            </div>
        </>
    )
}

export default Progress;