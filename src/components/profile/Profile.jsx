'use strict';

import './Profile.css';
import ProfileImage from '../../assets/profile-large.png';
import {
  GithubButton,
  FacebookButton,
  LinkedInButton,
} from '../buttons/Buttons.jsx';

function Profile() {
  return (
    <div className="profile">
      <div className="profile-bg"></div>
      <img className="profile-img" src={ProfileImage} alt="profile image" />
      <div className="profile-desc">
        <h1 className="profile-desc-title">About Me</h1>
        <p className="profile-desc-desc">
          Hi there! I&#39;m an aspiring web developer passionate about creating
          clean, user-friendly designs and building functional websites.
          Currently, I&#39;m honing my skills through The Odin Project
          curriculum, skipping the battleship project for a while to focus on
          rapid growth by learning the MERN stack first. When I&#39;m not
          coding, I enjoy playing chess. My goal is to grow as a full-stack
          developer and contribute to impactful projects in the tech world (and
          be able to freelance).
        </p>
        <div className="buttons">
          <GithubButton />
          <FacebookButton />
          <LinkedInButton />
        </div>
      </div>
    </div>
  );
}

export default Profile;
