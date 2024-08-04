import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { SiLeetcode } from 'react-icons/si';

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <a href='https://github.com/Ishan7015' target='_blank'>
        <div >
            <BsGithub />
        </div>
      </a>
      <a href='https://www.linkedin.com/in/ishan017/' target='_blank'>
        <div>
          <BsLinkedin />
        </div>
      </a>
      <a href='https://leetcode.com/IshanDev/' target='_blank'>
        <div>
          <SiLeetcode />
        </div>
      </a>
    </div>
  )
}

export default SocialMedia;