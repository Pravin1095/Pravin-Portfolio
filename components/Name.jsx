import React, {useState,useEffect} from "react";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import navarr from "./navarr";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";


  
const baseurl='http://api.github.com/users/Pravin1095'
const nav_url='https://gist.githubusercontent.com/Pravin1095/c004366c7781821c4a7c21ba8bd4afc6/raw/77f51bba9e709f894e29f806676f566eee814cdf/Navarray.json'

function NameParent() {

  return (
    <>
      {['start'].map((placement, idx) => (
        <Name key={idx} placement={placement} names='I am Pravin.' con='Welcome !'/>
      ))}
    </>
  );
}
const Name = ({names,con,...props}) => {

  var [posts, setPost] = useState([]);
  useEffect(
    () => {
    axios.get(baseurl).then((response) => {
      setPost(response.data);
      // console.log(response.data)
      // console.log(post)
    });
  },[]);
  // console.log(posts)

  var [navjson,setNav]=useState([])

  useEffect(
    ()=>{
      axios.get(nav_url).then((response)=>{
        setNav(response.data)
      }
      )
    },[]
  )
 



  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <section className='top' id='name'>

      <div className="container-fluid">
      <button onClick={handleShow} className='nav-but'>
      <FontAwesomeIcon icon={faBars} style={{width:'50px',height:'50px'}}></FontAwesomeIcon>
      </button>

      <div className='bg-nav'>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header className='close-button' closeButton>
          
        </Offcanvas.Header>
        {console.log(navjson)}
       { navarr.map(
          (n,index)=>{
            return <React.Fragment key={index}><Offcanvas.Title><a href={n.link}><button className='nav-buttons' variant='dark'>{n.title}</button></a></Offcanvas.Title></React.Fragment>
          })}
        
      
      </Offcanvas>
      </div>
        <h1 className='name fontsize'>I am {posts.name}</h1>
        <div className='animate-h3'>
          <h3>A Fresher</h3>
        </div>
        <h2 className='name fontsizew'>{con}</h2>
      </div>
    </section>
  );
}
export default NameParent;