import React from "react";
function Filter(props){
    let filterData = props.filterData;
    let category = props.category;
    const setCategory = props.setCategory;
    
    
    return(
        <div>
            {
                filterData.map((data) => (
                    <button onClick={() => setCategory(data.title)}>
                        {data.title}
                    </button>
                ))
            }
        </div>
    );
}

export default Filter;