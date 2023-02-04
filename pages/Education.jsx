import React,{useState,useEffect} from 'react'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import edu from '../components/Eduarr';
import Navbar from '../components/Navbar';
import axios from 'axios';

import Link from 'next/link';


const eduurl='https://gist.githubusercontent.com/Pravin1095/cfef0014701516609f1c59bce19ea6a3/raw/cff44eabb5352e228ae705a24f7038996b2e8999/EducationArray.json'
const Educations = () => {

    // function sendAttack(params){
    //     console.log(params)

    // }

    const[edujson,setedujson]=useState([])

    useEffect(
        ()=>{
            axios.get(eduurl).then((response)=>{
                setedujson(response.data)
            }
            )
        },[]
    )


    return (
        <section id='education'>

            <Education title='My Education' icon={faGraduationCap} earray={edu} edujson={edujson} />

        </section>
    )


    //     Eduarr.map((eduarray) =>{
    //         return(<Education
    //           key={eduarray.id}
    //           Link={eduarray.link}
    //           Institute={eduarray.institute}
    //           Programme={eduarray.school}
    //           Year={eduarray.year} />
    //         //   sendAttack={sendAttack} 
    //       )    
    // })
}
const Education = ({ title, icon, earray,edujson}) => {
    // function attack(){
    //     props.sendAttack('This is from child(education) component')
    // }
    return (
        <div>
        <Navbar className='edu-nav' />
            <h2 className='edu-h2'>{title}</h2>
            <div className='grad-cap'><FontAwesomeIcon icon={icon} style={{ width: '10%', height: '5%' }}></FontAwesomeIcon></div>

            <div>{edujson.map(
                (edua,index) => {
                    return <React.Fragment key={index}>
                    
                    <div className='row container-fluid'>
                    
                    <div className='col-lg-4 school'>
                        <a href={edua.link}>{edua.institute}</a>
                        <p>{edua.school}</p>
                        <p>{edua.percent}</p>
                    </div>
                        <div className='col-lg-4 year'>
                            <p>{edua.year}</p>
                        </div>
                        <div className='col-lg-4'>
                            <Link href={edua.downloadlink} download><button className='edu-button'>Download Certificate</button></Link>
                        </div>
                        </div>
                        <hr className='hor-line'></hr></React.Fragment>

                }
            )}
            </div>
        </div>

    )
}
{/* <div className='school'>
                    <a href={props.Link}>{props.Institute}</a>
                    <p>{props.Programme}</p>
                </div>
                <div className='year'>
                    <p>{props.Year}</p>
                </div> */}



{/* <button onClick={attack}>Button</button> */ }

{/* <hr className='hor-line'></hr> */ }



export default Educations
