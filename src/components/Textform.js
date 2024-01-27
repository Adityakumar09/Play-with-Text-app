import React, {useState} from 'react'

export default function Textform(props) {
    const handleupclick = ()=>{
        // console.log("uppercase was clicked" + text) 
        let newtext=text.toUpperCase();
        setText(newtext);
        props.showalert("Converted to uppercase","primary")
    }
    const handlelowclick = ()=>{
        // console.log("uppercase was clicked" + text) 
        let newtext=text.toLowerCase();
        setText(newtext)
    }
    const handleclearclick = ()=>{
        // console.log("uppercase was clicked" + text) 
        let newtext="";
        setText(newtext)
    }
    const handleonchange = (event)=>{
        // console.log("onchange");
        setText(event.target.value)
    }
    const handlecpy=()=>{
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handlespaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
    }


    const [text,setText]=useState('')
    return (
        <>
    <div>
        <h1>{props.Heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='dark'?'#0005ffb0':'white',color: props.mode==='dark'?'white':'black',border:props.mode==='dark'?'.2rem solid white':'.2rem solid black'}} onChange={handleonchange} id="myBox" rows="8"></textarea>
        </div>
        <button className={`btn btn-${props.btncol==="red"?"danger":"primary"} mx-3 my-3`} onClick={handleupclick} >Convert to Uppercase</button>
        <button className={`btn btn-${props.btncol==="red"?"danger":"primary"} mx-3 my-3`} onClick={handlelowclick} >Convert to lowercase</button>
        <button className={`btn btn-${props.btncol==="red"?"danger":"primary"} mx-3 my-3`} onClick={handleclearclick} >Clear</button>
        <button className={`btn btn-${props.btncol==="red"?"danger":"success"} mx-3 my-3`} onClick={handlecpy} >Copy</button>
        <button className={`btn btn-${props.btncol==="red"?"danger":"success"} mx-3 my-3`} onClick={handlespaces} >Remove Spaces</button>

    </div>
    <div className="container my-3">
        <h1>YOUR TEXT SUMMARY</h1>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words , {text.length} charachters</p>
        <p>{0.008 * (text.split(" ").filter((element)=>{return element.length!==0}).length)} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"ENTER THE TEXT TO PREVIEW "}</p>
    </div>
    </>
  )
}

