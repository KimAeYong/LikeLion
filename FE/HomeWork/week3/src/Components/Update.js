import { useState } from "react"

const Update = (props)=>{
    const [title, setTitle] = useState(props.title);
    const [body, setBody] = useState(props.body);
  
    const handleTitleChange = (e) => {
      setTitle(e.target.value);
    };
  
    const handleBodyChange = (e) => {
      setBody(e.target.value);
    };
  
    const handleUpdate = () => {
      props.onUpdate(title, body);
    };
  
    return (
      <>
        <input value={title} onChange={handleTitleChange} />
        <input value={body} onChange={handleBodyChange} />
        <button onClick={handleUpdate}>Submit</button>
      </>
    );
}
export default Update