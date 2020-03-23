import React, { Component } from 'react'
// import GitHubSmall from '../images/GitHubSmall.png'

export class CatCard extends Component {
  render() {
    return (
      <div>
        <section className="card">
          <img
            className="octocatPic"
            src={this.props.imgUrl}
            alt={this.props.alt}
          />
          <section className="cardDescription">
            <p>
              {this.props.number} <strong>{this.props.name}</strong>
            </p>
            <img src={this.props.author} alt="small github symbol" />
          </section>
        </section>
      </div>
    )
  }
}

export default CatCard
