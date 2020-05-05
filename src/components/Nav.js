import React, { Component } from 'react'
import GitHubLarge from '../images/GitHubLarge.png'

export class Nav extends Component {
  render() {
    return (
      <header>
        <nav>
          <ul>
            <img className="headerImage" src={GitHubLarge} alt="Github Logo" />
            <li>
              <a
                className="octodexName navLink"
                href="https://octodex.github.com/"
              >
                Octocatz
              </a>
            </li>
            <li>
              <a className="navLink" href="https://octodex.github.com/">
                Home
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a className="navLink" href="https://octodex.github.com/">
                Faq
              </a>
            </li>
            <li>
              <a className="navLink" href="https://octodex.github.com/">
                Follow Us on Twitter
              </a>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Nav
