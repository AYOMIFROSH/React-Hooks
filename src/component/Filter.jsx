import React from "react";

const Filter = ({ setFilter }) => {
    return (
        <div>
            <input type="text" placeholder="Title" onChange={(e) => setFilter(e.target.value)} />
            <input type="number" placeholder="Rating" onChange={(e) => setFilter(e.target.value)} />
        </div>
    );
};


export default Filter;