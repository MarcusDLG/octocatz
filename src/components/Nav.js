import React, { Component } from 'react'
import GitHubLarge from '../images/GitHubLarge.png'

export class Nav extends Component {
  render() {
    return (
      <header>
        <nav>
          <ul>
            <img class="headerImage" src={GitHubLarge} alt="Github Logo" />
            <li>
              <a class="octodexName" href="">
                Octodex
              </a>
            </li>
            <li>
              <a href="">Home</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="">Faq</a>
            </li>
            <li>
              <a href="">Follow Us on Twitter</a>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Nav
