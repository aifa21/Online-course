import React from 'react';
import { useState } from 'react';
import fakedata from '../../fakedata';
import './Course.css';
import Subject from '../Subject/Subject';
import Cart from '../Cart/Cart';


const Course = () => {
    const total = fakedata;

    const [subjects, setSubjects] = useState(total);
    const [cart,setCart]=useState([]);

    const handleSubject=(subject)=>{

       
        const newCart=[...cart,subject];
        setCart(newCart);
  }
    


    return (
        <div className="course-container">
            <div className="subject-container">
            
                {
                subjects.map(sb=><Subject handleSubject={handleSubject}
                     subject={sb} ></Subject>)
                }
            
            </div>

            <div className="cart-container">
            <Cart cart={cart}></Cart>
            </div>
           
        </div>
    );
};

export default Course;