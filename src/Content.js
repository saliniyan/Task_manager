
function Content()
{
  function random()
  {
    const a=["hai","hello","welcome"];
    const b=Math.floor(Math.random()*3);
    return a[b];
  }
  return(
    <p>Now displays {random()}</p>
  )
}
export default Content;