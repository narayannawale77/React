import React from "react";
import Card from "./Card";

function Cards(props) {
    let courses = props.courses;
    let category = props.category;
    

    function getCourse() {
        let coursesArray = [];
        if(category === "All"){
            Object.values(courses).forEach(courseCategory => {
                courseCategory.forEach(courseData => {
                    coursesArray.push(courseData);
                });
            });
            return coursesArray;
        }
        else return courses[category];
    }

    getCourse();

    return (
        <div className="cards-container">
            {getCourse().map((course, index) => (
                <Card key={index} courseData={course}/>
            ))}
        </div>
    );
}

export default Cards;
