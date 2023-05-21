import React from "react";

export function CurrentDate(props) {
    return (
        <div className="date">
            <div>{props.date}</div>
        </div>
    )
}