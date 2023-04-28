import React, {useState,useEffect} from "react";
// import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
// import navarr from "./navarr";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ResumePage2 from "./ResumePage2";
import Navbar from '../components/MyNavbar'
import { connect } from 'react-redux'
import { nameappendData } from '../components/ReduxComponents/action'
// import $ from "jquery";


  
const baseurl='http://api.github.com/users/Pravin1095'
const nav_url='https://gist.githubusercontent.com/Pravin1095/c004366c7781821c4a7c21ba8bd4afc6/raw/b7b6e23b65342e0118385c38b35899eb3fd98af9/Navarray.json'


function NameParent(props) {
  let h=null
  const sendFunction=(params)=>{
    h=params
    // {console.log(params)}
    // {console.log(h)}
  }

  useEffect(
    ()=>{
      props.nameappendData()
    },[]
  )
  {console.log(props.NameComponent)}
  

  

  return (
    <>
    <Row>
      <Col lg={5} className='train-class'>
          <Name names={props.NameComponent} con='Welcome !' clickval={h}/>  
      </Col>
      {/* <Col lg={1} style={{backgroundColor:'#83e3db'}}><Col lg={1} style={{backgroundColor:'deeppink'}}><Image className="my-photo" src='/images/Photo.jpeg' alt="photo-img" width={200} height={250}/> </Col></Col> */}
      <Col lg={2} className='centre-image'><Image className="my-photo" src='/images/Photo.jpeg' alt="photo-img" width={200} height={250}/></Col>
      <Col lg={5} className='train-class'><ResumePage2 sendF={sendFunction}/></Col>
      </Row>
    </>
  );
}


const Name = ({names,con,clickval}) => {

  const [dynamicname, setName] = useState("A Fresher");

  const changeName = () => {
    dynamicname === "A Fresher" && setName("A Developer");
    dynamicname === "A Developer" && setName("A Fresher");
  };
  setInterval(changeName, 5000);

  // $('#dynamicfresher').fadeOut(3000)

  let [posts, setPost] = useState([]);
  let [navjson,setNav]=useState([])


  useEffect(
    () => {
    axios.get(baseurl).then((response) => {
      setPost(response.data);
      // console.log(response.data)
      // console.log(post)
    });
    axios.get(nav_url).then((response)=>{
      setNav(response.data)
    }
    );
    

  },[]);
  // console.log(posts)

  

  // useEffect(
  //   ()=>{
  //     axios.get(nav_url).then((response)=>{
  //       setNav(response.data)
  //     }
  //     )
  //   },[]
  // )
 



  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <section className='top' id='name'>

      <div className="container-fluid">
      <Navbar />
      {/* <button onClick={handleShow} className='nav-but'>
      <FontAwesomeIcon icon={faBars} style={{width:'50px',height:'50px'}}></FontAwesomeIcon>
      </button>

      <div className='bg-nav'>
      <Offcanvas show={show} onHide={handleClose} placement='start'>
        <Offcanvas.Header className='close-button' closeButton>
          
        </Offcanvas.Header>
        {/* {console.log(navjson)}
        {console.log(Array.isArray(navjson) )}
        {console.log(typeof navjson)} */}
       
        {/* {console.log(typeof JSON.parse(navjson))}
        let navjsonarr=[...navjson] */}

        {/* {console.log(navjsonarr)} */}
        
       {/* {navjson.map(
          (n,index)=>{
            return <React.Fragment key={index}><Offcanvas.Title><a href={n.link}><button className='nav-buttons' variant='dark'>{n.title}</button></a></Offcanvas.Title></React.Fragment>
          })}
        
      
      </Offcanvas> */} 
      


        <h1 className='fontsize'>I am {names} </h1>
        <div className='animate-h3'>
          <h3 id='dynamicfresher'>{dynamicname}</h3>
        </div>
        <h2 className='fontsizew'>{con}</h2>
        <h2>{clickval}</h2>
        
        </div>
      
    </section>
  );


}

const mapDispatchToProps = {
  nameappendData,
}

const mapStateToProps = (state) => ({
  NameComponent: state.myName,
})

export default connect(mapStateToProps, mapDispatchToProps)(NameParent)
// export default NameParent
