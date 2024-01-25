import React from "react";

class StateComponent extends React.Component{
    constructor(){
        super()
        this.state = {
            Name:"KEC",
            course:"mern"
        }
    }
    ChangeState = () =>{
        console.log( "KONGU ENGINEERING COLLEGE")//use statewhen we come to hooks

    }
    render(){
        return(
            <div>
                <h1>This is state compoment</h1>
                <h2><p>Hello, <b>{this.state.Name}</b> <br></br>This is {this.state.course} class.</p></h2>
                <h1>I am changing the state of the {this.state.Name} to {this.ChangeState}</h1>
                {/* <button onClick={this.ChangeState}><h2>Click me to change state</h2></button> */}
                <button onMouseOver={this.ChangeState}><h4>Click me to change state</h4></button>
                
            </div>
        )
    }
}

export default StateComponent;