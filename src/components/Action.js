import React from "react"

const Action=(props)=>(
    <div>
        <button className="big-button" disabled={!props.hasOption} onClick={props.RandomPick}>What Should I do?</button>
    </div>
)
export default Action;