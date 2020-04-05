import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';

import './TextContainer.css';

import WhiteBoard from './WhiteBoard/WhiteBoard';
import Tools from './WhiteBoard/tools';
import History from './WhiteBoard/history';

const TextContainer = ({ users }) => (
  <div className="textContainer">
    {
      users
        ? (
            <div id='main'>
              <div id='container'>
                <Tools/>
                <WhiteBoard />
              </div>
              <History />
            </div>
        )
        : null
    }
  </div>
);

export default TextContainer;