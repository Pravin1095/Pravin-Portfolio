import React, {useState,useEffect} from "react";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import Link from "next/link";



const nav_url='https://gist.githubusercontent.com/Pravin1095/c004366c7781821c4a7c21ba8bd4afc6/raw/f551b01f295b8ac15f6434f3322f6abc8732dcfa/Navarray.json'
const Navbar=()=>{

    const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

let [navjson,setNav]=useState([])

useEffect(
    () => {
    axios.get(nav_url).then((response)=>{
      setNav(response.data)
    }
    )
  },[]);


  const [style,setStyle]=useState('nav-but')
  // const navItems=['Home','About','Education','Skill and Hobby','Contact','Footer']
  const navStyles=['nav-but','about-nav','edu-nav','skill-nav','contact-nav','footer-nav']

  const changeNavstyle=(buttonval)=>{
    {console.log(buttonval)}
    // setStyle(navStyles[buttonval])

  }
    return <div>
    <button onClick={handleShow} className={style}>
      <FontAwesomeIcon icon={faBars} style={{width:'50px',height:'50px'}}></FontAwesomeIcon>
      </button>

      
      <Offcanvas show={show} onHide={handleClose} placement='start'>
        <Offcanvas.Header className='close-button' closeButton>
          
        </Offcanvas.Header>
        {/* {console.log(navjson)}
        {console.log(Array.isArray(navjson) )}
        {console.log(typeof navjson)} */}
       
        {/* {console.log(typeof JSON.parse(navjson))}
        let navjsonarr=[...navjson] */}

        {/* {console.log(navjsonarr)} */}
        
       {navjson.map(
          (n,index)=>{
            return <React.Fragment key={index}><Offcanvas.Title><Link href={n.link}><button value={n.val} onClick={changeNavstyle(n.value)} className='nav-buttons' variant='dark'>{n.title}</button></Link></Offcanvas.Title></React.Fragment>
          })}
        
      
      </Offcanvas>
      </div>

}

export default Navbar