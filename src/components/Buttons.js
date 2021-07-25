import React from "react";

const Buttons = ({analyze, newRecipe, data}) => {
    return(
        <div id="change">
            <button className="btn btn-success btn-sm m-2" style={{background:"blue"}} onClick={analyze}>Analyze</button>
            {(data)?<button className="btn btn-success btn-sm m-2"  style={{background:"blue"}} onClick={newRecipe}>New recipe/Item</button>:""}
        </div>
    );
}

export default Buttons;