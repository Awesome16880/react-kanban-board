import React, { useDebugValue } from 'react';
import './index.scss';
import './index.js';

function Column({ value, colIndex, handleClick, handleMove, handleDelete }) {
    const isFirstCol = colIndex === 0;
    const isLastCol = colIndex === 3;
    const space = ' '
    return(
        <div className="column-container">
            <div className="header" style={{backgroundColor: value.headerColor }}>
                {value.header}
            </div>
            <div className="list">
                {value.todos.map((todo, index) => (
                    <div className="item" key={index}>
                        {!isFirstCol && <button onClick={() => handleMove(index, colIndex, colIndex - 1)}>Prev</button>}
                        <span>{space + todo + space}</span>
                        {!isLastCol && <button onClick={() => handleMove(index, colIndex, colIndex + 1)}>Next</button>}
                        {<button className='delete-button' onClick={() => handleDelete(index, colIndex)}>Delete</button>}
                    </div>
                ))}
            </div>
            <button className='add-button'
                onClick={() => handleClick(colIndex)}>+ Add a card</button>
        </div>
    )
};

export default Column;