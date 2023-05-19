// import { useState } from "react"

const Update = (props)=>{

    return (
        <>
            <input></input>
            <input></input>
            <button onClick={props.onUpdate(props.title, props.body)}>Submit</button>
        </>
    )
}
export default Update