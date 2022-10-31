import React from 'react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { images } from '../../constants';
import { urlFor, client } from '../../client';
import { AppWrap, MotionWrap } from '../../wrapper';


import "./About.scss"

// const abouts = [
//   { title: 'Backend Development', description: 'A good backend is as important as frontend and I can develop that.', imgURL: images.about01 },
//   { title: 'Frontend Development', description: 'Frontend is what attracts customer, and I can make that awesome, interactive UI/UX.', imgURL: images.about02 },
//   { title: 'Problem Solving', description: 'Aside from Web development, I am a good problem solver, and a programmer.', imgURL: images.about03 },
//   // { title: 'Web Animations', description: 'I am a good animator', imgURL: images.about04 }
// ];

const About = () => {

  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type=="abouts"]';

    client.fetch(query).then(data => setAbouts(data));
  }, [])
  

  return (
    <>
      <h2 className='head-text'>I know That <span>Good Development</span><br/>means <span>Good Business</span>
      </h2>
      <div className='app__profiles'>
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{opacity: 1}}
            whileHover={{scale: 1.1}}
            transition={{ duration: 0.5, type: 'tween' }}
            className='app__profile-item'
            key={about.title+index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className='bold-text' style={{ marginTop: 20 }}>{ about.title }</h2>
            <p className='p-text' style={{ marginTop: 10 }}>{ about.description }</p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about', "app__whitebg");