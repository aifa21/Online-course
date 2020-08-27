import React from 'react';
import './Subject.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPointRight } from '@fortawesome/free-solid-svg-icons'

const Subject = (props) => {
    const {name,instructor,img,price}=props.subject;
   
    return (
        <div>
           
           <div className="subject">
            <div className="subject-img">
              <img src={img}/>
            </div>
            <div className="subject-info">
            <h4 className="subject-name">{name}</h4>
            
            <p><small>By:{instructor}</small></p>
            <p>${price}</p>
            <br/>
           
            <button className="main-button" onClick={()=>props.handleSubject(props.subject)}><FontAwesomeIcon icon= { faHandPointRight } />Enroll now</button>
            </div>
        </div>
            
        </div>
    );
};

export default Subject;