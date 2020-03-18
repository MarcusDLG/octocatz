import React, { Component } from 'react'
import Adacats from '../images/Adacats.png'
import Brennatocat from '../images/Brennatocat.png'
import filmtocats from '../images/filmtocats.png'
import Fintechtocat from '../images/Fintechtocat.png'
import Octocat from '../images/Octocat.jpg'
import Octogatos from '../images/Octogatos.png'
import PuddleJumper from '../images/puddleJumper.jpg'
import Sentrytocat from '../images/Sentrytocat_octodex.jpg'
import Terracottocat from '../images/Terracottocat.png'
import CatCard from './CatCard'

export class Octocats extends Component {
  render() {
    const cats = [
      { name: 'Adacats', number: '101', url: Adacats, alt: 'ada' },
      {
        name: 'Brennatocat',
        number: '102',
        url: Brennatocat,
        alt: 'Brennatocat',
      },
      { name: 'filmtocats', number: '103', url: filmtocats, alt: 'filmtocats' },
      {
        name: 'Fintechtocat',
        number: '104',
        url: Fintechtocat,
        alt: 'Fintechtocat',
      },
      { name: 'Octogatos', number: '106', url: Octogatos, alt: 'Octogatos' },
      {
        name: 'Puddle Jumper',
        number: '107',
        url: PuddleJumper,
        alt: 'Puddle Jumper',
      },
      {
        name: 'Sentrytocat',
        number: '108',
        url: Sentrytocat,
        alt: 'Sentrytocat',
      },
      {
        name: 'Terracottocat',
        number: '109',
        url: Terracottocat,
        alt: 'Terracottocat',
      },
      { name: 'Octocats', number: '110', url: Octocat, alt: 'Octocats' },
      { name: 'Octocats', number: '111', url: Octocat, alt: 'Octocats' },
      { name: 'Octocats', number: '112', url: Octocat, alt: 'Octocats' },
      { name: 'Octocats', number: '113', url: Octocat, alt: 'Octocats' },
    ]
    return (
      <main>
        {cats.map(cat => {
          return (
            <CatCard
              name={cat.name}
              number={cat.number}
              imgUrl={cat.url}
              alt={cat.alt}
            />
          )
        })}
      </main>
    )
  }
}

export default Octocats
