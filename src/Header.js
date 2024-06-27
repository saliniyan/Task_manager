import './App.css'
function Head(props){ //or cn give object directly ({title})
    return(
        <header>
         {props.title}
        </header>
    );
}
Head.defaultProps={
    title:"Title here"
}
export default Head;