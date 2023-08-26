import React from 'react';
// import icons
import {
  ImFacebook,
  ImTwitter,
  ImPinterest,
  ImInstagram,
  ImYoutube,
} from 'react-icons/im'

const Socials = () => {
  return <div className="hidden ml-24 xl:flex">
    <ul className="flex gap-x-4">
      <li>
        <a href="http://www.facebook.com" target='_blanck'>
          <ImFacebook/>
        </a>
      </li>
      <li>
        <a href="http://www.tiwitter.com" target='_blanck'>
          <ImTwitter/>
        </a>
      </li>
      <li>
        <a href="http://www.pinterest.com" target='_blanck'>
          <ImPinterest/>
        </a>
      </li>
      <li>
        <a href="http://www.Instagram.com" target='_blanck'>
          <ImInstagram/>
        </a>
      </li>
      <li>
        <a href="http://www.Youtub.com" target='_blanck'>
          <ImYoutube/>
        </a>
      </li>
    </ul>
  </div>;
};

export default Socials;
