import React from 'react'

export const Button = props => {
    const { styles, title, handleClick } = props;

    return (
        <div style={{...styles}} onClick={handleClick}>
            {title}
        </div>
    )
}
