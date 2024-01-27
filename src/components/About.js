// import React,{useState} from 'react' 

export default function About(props) {
    // const [mystyle,setmystyle]=useState({
    //     color: (props.mode==='light'?`white`:`black`), 
    //     backgroundColor: (props.mode==='light')?'black':'white',
    //     // border: '2px solid' ,
    //     // borderColor : props.mode==='dark'?'black':'white'
    // })

    // const [btntext,setbtntext]=useState('Enable dark mode ') 

    // const dark = ()=>{
    //     if (mystyle.color==='black'){
    //         setmystyle({
    //             color:'white',
    //             backgroundColor:'black'
    //         })
    //         setbtntext("Enable light mode")
    //     }
    //     else {
    //         setmystyle({
    //             color:'black',
    //             backgroundColor:'white'
    //         })
    //         setbtntext("Enable dark mode")
    //     }

    // }

    let mystyle={
        color: (props.mode==='dark'?`white`:`black`), 
        backgroundColor: (props.mode==='dark')?'black':'white',
        border: '2px solid' ,
        borderColor : props.mode==='light'?'black':'white'
    }


  return (
    <div classNameName='container ' style={{color : props.mode==='dark'?'white':'black'}}>
        <h2 className='my-3' >About us</h2>
        <div className="accordion mx-3" style={mystyle} id="accordionPanelsStayOpenExample">
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                    Accordion Item #1
                </button>
                </h2>
                <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
                <div className="accordion-body" style={mystyle}>
                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                    Accordion Item #2
                </button>
                </h2>
                <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
                <div className="accordion-body" style={mystyle}>
                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                    Accordion Item #3
                </button>
                </h2>
                <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
                <div className="accordion-body" style={mystyle}>
                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
        </div>
    {/* <div className="container my-3">
        <button type="button" onClick={dark} class="btn btn-primary">{btntext}</button>
        </div> */}
    </div>
  )
}
