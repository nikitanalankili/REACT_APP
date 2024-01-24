import React from "react";
import TestClassComp from "../class_components/testclassComponents";
//import ReactDOM  from "react-dom/client";

function TestComponent ()
{
    return(
        <div> 
            <TestClassComp/>
            <h1>This is test Functional Component </h1>
            <p>Hi u can easily learn React</p>
        </div>
    )
}

export default TestComponent;
/*const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<TestComponent/>)*/
