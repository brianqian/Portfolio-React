import React from 'react';

function ContactBar({ className }) {
  return (
    <div className={className}>
      <a href="https://www.linkedin.com/in/brian-qian/" rel="noopener noreferrer" target="_blank">
        <img src="../img/LinkedIn-icon-light.png" height="25px" alt="" />
      </a>
      <a href="https://www.github.com/brianqian" rel="noopener noreferrer" target="_blank">
        <img src="../img/GitHub-Icon-light.png" alt="" />
      </a>
    </div>
  );
}

export default ContactBar;
