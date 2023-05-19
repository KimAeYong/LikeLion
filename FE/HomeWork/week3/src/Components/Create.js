import { useState } from "react"

const Create = ({onCreate}) =>{
    const [titleValue, setTitleValue] = useState('')
    const [bodyValue, setBodyValue] = useState('')

    const handleTitleValue = (e) =>{
        setTitleValue(e.target.value)
    }

    const handleBodyValue = (e) =>{
        setBodyValue(e.target.value)
    }
    
    const submitValue = () =>{
        onCreate(titleValue, bodyValue)
    }

    return(
        <>
            <input value={titleValue} onChange={handleTitleValue}></input>
            <input value={bodyValue} onChange={handleBodyValue}></input>
            <button onClick={submitValue}>Submit</button>
        </>
    )
}
export default Create