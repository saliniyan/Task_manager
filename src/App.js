import Content from './Content';
import Head from './Header';
import Footer from './Footer';
import './App.css'
import { useState } from 'react';


function App()
{
  const [item,setitem]=useState([
    {
      id:1,
      value:"wake up",
      check:true
    },
    {
      id:2,
      value:"eat",
      check:true
    },
    {
      id:3,
      value:"sleep",
      check:true
    }
  ]
  )
  return(
    <div className="container">
    <Head title="This is heading "/>
    <Content 
      item={item}
      // setitem={setitem} no need to send it because we will also send the function '''not here''' that will take care
    />
    <Footer 
      len={item.length}
    />
    </div>
  );
}
export default App;   