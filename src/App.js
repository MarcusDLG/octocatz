import React, { Component } from 'react'
import OctoCats from './components/Octocats'
import Nav from './components/Nav'
import Footer from './components/Footer'
class App extends Component {
  render() {
    return (
      <>
        <Nav />
        <OctoCats />
        <Footer />
      </>
    )
  }
}

export default App
