import {React,useState,useEffect} from 'react'
import '../Styles/Projects.css'

import { BiSolidUpvote  } from "react-icons/bi";

import { FaShare } from "react-icons/fa6";

import { AiOutlineMessage } from "react-icons/ai";
import UseScrollAnimation from './UseScrollAnimation';


function Projects( {data} ) {
    const { user_dp, username, posted_image, upvote_count, content_caption ,content_description, time_and_date_posted } = data;
    const [isHovered, setIsHovered] = useState(false);

  const changeStateOfInnerLayout = (value) => {
    if (value) {
        setIsHovered(true);
    } else {
        setTimeout(() => setIsHovered(false), 10);
    }
    };  
    
    UseScrollAnimation(); //scroll animation hook
    


  return (
      <>
          <div className="outerLayout" onMouseEnter={() => changeStateOfInnerLayout(true)} onMouseLeave={ () =>changeStateOfInnerLayout(false)}>
              <div className="wholeLayerForAnimation">
                  
            
          <div className="innerLayout1">
              <div className="imageByUser">
                  <img src={posted_image} alt="uchichaMadara"/>
              </div>
              </div>
            
                      <div className={`innerLayout2 ${isHovered ? 'visible' : ''}`}>
                          <div className="captionByUser">

                          </div>
                          {isHovered && (
                          <div className="contentByUser">
                      
                      <p className="CaptionOfTheContent">
                              
                              
                              <p>{ content_caption}</p>
                        </p>
                      
                              <p className="realContent">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum autem provident consequatur non accusantium facilis, dolores consectetur nesciunt eos explicabo dignissimos nulla, eaque facere nisi voluptates nostrum repellat ullam sint!
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae veritatis harum excepturi, tempore minima commodi omnis maxime doloribus vel expedita totam praesentium. Expedita dolore facere sint, atque esse eaque quaerat!
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia expedita labore fugiat? Quia magni quisquam, delectus ab aliquid enim autem voluptatum harum. Atque fugiat neque, distinctio suscipit natus velit numquam?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut vero necessitatibus ullam nemo. Temporibus quis sunt tempora iste saepe nobis possimus quisquam, necessitatibus minus sequi maxime sed doloremque dolorum itaque.
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum facilis id, doloremque accusantium sint libero ea odit possimus natus cum veniam, excepturi beatae aliquam facere enim quibusdam ipsa perferendis! Consequatur.
            </p>
                  </div>
                            )
                            }
                  
                  </div>
                  </div>
          </div>
      </>
  )
}

export default Projects


