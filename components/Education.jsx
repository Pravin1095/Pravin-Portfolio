import React from 'react'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import edu from './Eduarr';

const Educations = () => {

    // function sendAttack(params){
    //     console.log(params)

    // }
    return (
        <section id='education'>

            <Education title='My Education' icon={faGraduationCap} earray={edu} />

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
const Education = ({ title, icon, earray }) => {
    // function attack(){
    //     props.sendAttack('This is from child(education) component')
    // }
    return (
        <div>
            <h2>{title}</h2>
            <div className='grad-cap'><FontAwesomeIcon icon={icon} style={{ width: '10%', height: '5%' }}></FontAwesomeIcon></div>

            <div>{earray.map(
                (edua,index) => {
                    return <React.Fragment key={index}><div className='flex-container'><div className='school'>
                        <a href={edua.link}>{edua.institute}</a>
                        <p>{edua.school}</p>
                    </div>
                        <div className='year'>
                            <p>{edua.year}</p>
                        </div></div>
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
