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
        {...item}
      />
    )
  })
  return (
    <div className='container'>
      <Header />
      <Hero />
      <section className='card-main-container'>
        {cards}
      </section>
      
    </div>
  )
}

export default App
