import './App.css'
function Content()
{
  function random()
  {
    const a=["hai","hello","welcome"];
    const b=Math.floor(Math.random()*3);
    return a[b];
  }
  const click=(name)=>{
    console.log(`clicked ${name}`)
  }
  return(
    <main>Now displays {random()}
    <button onClick={()=>click("saliniyan")}>Click here</button>
    </main>
  )
}
export default Content; 