import React, { Component } from 'react';

import { MdInsertDriveFile } from 'react-icons/md'

import logo from '../../assets/logo.svg';
import './styles.css';

export default class Box extends Component {
  render() {
    return (
      <div id="box-container">
        <header>
          <img src={logo} alt="" />
          <h1>JuancitApp</h1>
        </header>

        <ul>
          <li>
            <a href="">
              <MdInsertDriveFile size={24} color="#A5Cfff" />
              <strong>Desafio.pdf</strong>
            </a>

            <span>há 3 minutos atras</span>
          </li>
          <li>
            <a href="">
              <MdInsertDriveFile size={24} color="#A5Cfff" />
              <strong>Desafio.pdf</strong>
            </a>

            <span>há 3 minutos atras</span>
          </li>
        </ul>
      </div>
    );
  }
}
