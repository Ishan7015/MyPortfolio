import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { SiLeetcode } from 'react-icons/si';

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <a href='https://github.com/Ishan7015'>
        <div >
            <BsGithub />
        </div>
      </a>
      <a href='https://www.linkedin.com/in/ishanpandey2001/'>
        <div>
          <BsLinkedin />
        </div>
      </a>
      <a href='https://leetcode.com/IshanDev/'>
        <div>
          <SiLeetcode />
        </div>
      </a>
    </div>
  )
}

export default SocialMedia;