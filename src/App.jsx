import Header from './Header'
import Hero from './Hero'
import Card from './Card'
import data from './data'
import './App.css'

function App() {

  const cards = data.map(item => {
    return (
      <Card 
        img={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        button={item.button}
        location={item.location}
        title={item.title}
        price={item.price}
      />
    )
  })
  return (
    <>
      <Header />
      <Hero />
      <div className='card-main-container'>
        {cards}
      </div>
      
    </>
  )
}

export default App
