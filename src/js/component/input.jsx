import React, {useState} from 'react';



export const Input = () => {
    const [input, setInput] = useState("");
    const [item, setItem] = useState([]);
    const [styles, setStyles] = useState('hidden');
   
    
    const manager = (e) => {
        setInput(e.target.value)
        if(e.code === "Enter"){
            setItem(item.concat(input))
        }
        
    }
    const deleting = (index) => {
        const newArr = [...item]
        newArr.splice(index,1)
        setItem(newArr)   
    }
 
    return (
        
        <div className="container  border w-50 shadow mt-5 p-3">
        <h1>todos</h1>
        <input type="text" onKeyUp={manager} placeholder="what needs to be done?" />
        <ul style={{ listStyle: "none" }}>
            {item.map((u,index)=>{
                return <li className="border mt-2 d-flex justify-content-between p-1" key={index} id={item.id} onMouseEnter={()=>{setStyles(index)}} onMouseLeave={() => setStyles("hidden")}>{u}<span className={"hidden"} onClick={() => deleting(index)}><i className="fa fa-trash m-2" style={{visibility: styles == index ? "" : "hidden"}}></i></span></li>
            })}
        </ul> 
        <p>{item.length == 0 ? "No items" : item.length + " item left"}</p>
        </div>
    )
}


export default Input
