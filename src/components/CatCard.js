import React, { Component } from 'react'
import GitHubSmall from '../images/GitHubSmall.png'

export class CatCard extends Component {
  render() {
    return (
      <div>
        <section class="card">
          <img
            class="octocatPic"
            src={this.props.imgUrl}
            alt={this.props.alt}
          />
          <section class="cardDescription">
            <p>
              {this.props.number} <strong>{this.props.name}</strong>
            </p>
            <img src={GitHubSmall} alt="small github symbol" />
          </section>
        </section>
      </div>
    )
  }
}

export default CatCard
