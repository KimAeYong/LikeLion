import React, {useState} from 'react'
const ChildComponent = (props)=>{
    
    const [state, setState ]= useState('아기사자')
    // console.log(state)
    // console.log(setState)
    // setState("아기사자2")
    return (
        <p>
            {props.name} 자식 컴포넌트임 <br/>
            {state}
        </p>
    )
}

const MyComponent = ()=>{
    return (
        <>
        <p>
            수정됨 컴포넌트임
        </p>
        <ChildComponent name="멋사"></ChildComponent>
        </>
    )
}

export default MyComponent