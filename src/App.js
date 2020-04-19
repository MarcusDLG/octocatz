import React, { Component } from 'react'
// import OctoCats from './components/Octocats'
import Nav from './components/Nav'
import Footer from './components/Footer'
import axios from 'axios'
import CatCard from './components/CatCard'
class App extends Component {
  state = {
    allCats: [],
  }

  async componentDidMount() {
    const resp = await axios.get('https://sdg-octodex.herokuapp.com')
    console.log(resp)
    this.setState({
      allCats: resp.data.data,
    })
  }
  render() {
    return (
      <>
        <Nav />
        <main>
          {this.state.allCats.map(cat => {
            return (
              <CatCard
                name={cat.name}
                number={cat.number}
                imgUrl={cat.image}
                author={cat.authors[0].image}
              />
            )
          })}
        </main>
        <Footer />
      </>
    )
  }
}

export default App
