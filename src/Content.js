import './App.css'
function Content()
{
  function random()
  {
    const a=["hai","hello","welcome"];
    const b=Math.floor(Math.random()*3);
    return a[b];
  }
  const click=(e)=>{
    console.log(e)
  }
  return(
    <main>Now displays {random()}
    <button onClick={(e)=>click(e)}>Click here</button>  {/*passing events*/}
    </main>
  )
}
export default Content; 