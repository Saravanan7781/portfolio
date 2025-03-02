import React from 'react'
import '../Styles/Projects.css'
import '../Styles/ProjectContainer.css'
import post1 from '../assets/Business.jpg'
import post2 from '../assets/Business2.jpg'
import post3 from '../assets/Business3.jpg'
import Projects from './Projects'

function ProjectContainer() {

  // const  {userData}  = useAuth();
  

  const blah = " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum autem provident consequatur non accusantium facilis, dolores consectetur nesciunt eos explicabo dignissimos nulla, eaque facere nisi voluptates nostrum repellat ullam sint!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae veritatis harum excepturi, tempore minima commodi omnis maxime doloribus vel expedita totam praesentium. Expedita dolore facere sint, atque esse eaque quaerat!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia expedita labore fugiat? Quia magni quisquam, delectus ab aliquid enim autem voluptatum harum. Atque fugiat neque, distinctio suscipit natus velit numquam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut vero necessitatibus ullam nemo. Temporibus quis sunt tempora iste saepe nobis possimus quisquam, necessitatibus minus sequi maxime sed doloremque dolorum itaque.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum facilis id, doloremque accusantium sint libero ea odit possimus natus cum veniam, excepturi beatae aliquam facere enim quibusdam ipsa perferendis! Consequatur.";

  const list = [
    {
    user_dp: post1,
      username: "saravanan_msd7",
        posted_image: post1,
      upvote_count: 72,
          content_caption: "k",
            content_description: blah,
              time_and_date_posted: "10/08/2005 ||  8:00pm"
  },
  {
    user_dp: post2,
      username: "shrishalini_",
        posted_image: post2,
    upvote_count: 100,
           content_caption: "ii",
            content_description: blah,
              time_and_date_posted: "31/08/2004 ||  5:00 am"
  },
  {
    user_dp: post3,
      username: "latha somasundaram",
        posted_image: post3,
    upvote_count: 289,
           content_caption: "jj",
            content_description: blah,
              time_and_date_posted: "10/08/2005 ||  8:00pm"
  },
  {
    user_dp: post1,
      username: "saravanan._.7",
        posted_image: post1,
    upvote_count: 1000000,
           content_caption: "ji",
            content_description: blah,
              time_and_date_posted: "10/08/2005 ||  8:00pm"
  }

]

  return (
      
    <>
      <div className="PostsStyling">
     
      {
        list.map((datum,index) => {
          return (
            <Projects data={datum} key={ index} />
              )   
            })
       
      }
        </div>
            </>
  )
}

export default ProjectContainer