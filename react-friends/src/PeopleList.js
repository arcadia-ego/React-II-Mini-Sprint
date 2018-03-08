import React from "react";
//console.log(people)

export const PeopleList = (props) => {
    //console.log(props);
    return (
        <div className="People-Wrapper">
        {props.list.map((person => {
            return(
                <div>
                    <h4>{person.first_name}</h4>
                    <h4>{person.last_name}</h4>
                    <div>{person.email}</div>
                </div>
            )
        }))}
        <div>{props.place}</div>
        </div>
    )
};

//export default PeopleList;