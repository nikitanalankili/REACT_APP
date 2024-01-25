// import "../css/PropComponent.css"; this is for external css
function PropsComponent (props)
{
    /*const styleAttrs={
        backgroundColor :"pink",
        color : "black"

    }this is for internal css */
    return(
        // <div style= {styleAttrs}>
        <div>
            Hello, <b>{props.Name}</b> <br></br>This is {props.course} class.
        </div>
    )
}

export default PropsComponent;