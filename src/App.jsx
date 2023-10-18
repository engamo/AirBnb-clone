import Header from './Header'
import Hero from './Hero'
import Card from './Card'
import data from './data'
import './App.css'

function App() {

  const cards = data.map(item => {
    return (
      <Card 
        key={item.id}
        img={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        title={item.title}
        price={item.price}
        openSpots={item.openSpots}
      />
    )
  })
  return (
    <>
      <Header />
      <Hero />
      <section className='card-main-container'>
        {cards}
      </section>
      
    </>
  )
}

export default App
