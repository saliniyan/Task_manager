function Footer()
{
  const date=new Date(); 
  return(
    <p>Date is {date.getDate()} {date.getFullYear()}</p>
  )
}
export default Footer;