import React from "react";

function Card(props) {
    let course = props.courseData;
    

    return (
        <div className="card">
            <div className="card-image">
                <img src={course.image.url} alt={course.title} />  
            </div>
            
            <div className="card-content">
                <p className="card-title">{course.title}</p>
                <p className="card-description">
                    {course.description.length > 100 ? 
                        course.description.substr(0, 100) + "..." : 
                        course.description
                    }
                </p>
            </div>
        </div>
    );
}

export default Card;
