import React from 'react';

export const Item = ({item}) => {
    console.log(item.use)

    
    return (
    <div className="grid">
        <span className={item.use ? "red" : null}>{item.date}</span>
        <input type="checkbox" checked={item.use === true ? "checked" : ""}></input>
    </div>
    )
    
    
}