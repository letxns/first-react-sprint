import React from 'react'
import Header from './components/header/header'
import MainSection from './components/MainSection/MainSection'
import ProductsSection from './components/ProductsSection/ProductsSection'
import NewsSection from './components/NewsSection/NewsSection'
import DefaultFooter from './components/Footer/Footer'
import './App.css'

function App() {

  return (
    <section className='app'>
      <Header />
      <MainSection />
      <ProductsSection />
      <NewsSection />
      <DefaultFooter />
    </section>
  )
}

export default App