import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import hero from '../../assets/van-hero.jpg'
import reviewsList from '../../utilis'

export default function HomePage(){
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('/api/vans')
      .then(res => res.json())
      .then(data => setData(data.vans))
      .catch(err => console.error('Failed to fetch data:', err))
  }, [])

  const popularVans = data.slice(0, 3).map((item, index) => {
      return (
        <Link to={`/vans/${item.id}`} key={index} className='van-link'>
          <div className='van'>
              <div className='img-div'>
                <img src={item.imageUrl} alt={`image of a ${item.name} with the type of ${item.type}`} className='van-cover' />
              </div>
              <div className='van-texts'>
                <h1> {item.name} </h1>
                <p> {item.description} </p>
              </div>  
          </div>
        </Link>
      )
  })

  const reviews = reviewsList.map((item, index) => {
    return (
      <div className='review-div' key={index}>
        <div className='review-desc'>
          <p> {item.reviews} </p>
          <p> {item.description} </p>
        </div>
        <div className='review-text'>
          <p> <strong>{item.name}</strong></p>
          <p> {item.from} </p>
        </div>
      </div>
    )
  })

  return(
    <section className="homepage">
      <div className="hero-div">
        <div className="text-div">
          <h1>You got the travel 
            <span className="hero-plans">
              plans
            </span> 
            <span className="second-span"> We got the travel 
              <span className="hero-van">
                vans
                </span>
              </span>
          </h1>
          <p>Add adventure to your life by joining the #vanlife movement. <span>Rent the perfect van to make your perfect road trip</span></p>
          <Link to='vans'> <button>Find your van</button> </Link>
        </div>
        <div className="image-section">
          <img src={hero} alt="Image of a van parked near the edge of a cliff looking at a beautiful view." />
        </div>
      </div>

      <div className="popular-vans">
        <h1>Check out our popular vans</h1>
        <p>Our best top 3 most rented vans!</p>
        <div className='vans-div'>
          {data ? popularVans : <h1>Loading...</h1>}
        </div>
      </div>
      <div className='reviews'>
        <h1>What our client says:</h1>
        <div className='review-divs'>
          {reviews}
        </div>
      </div>

      <div className='last-section'>
        <h1>What are you waiting for? <span>Join us now by clicking the button!</span></h1>
        <Link to='vans'> <button>Find your van</button> </Link>
      </div>
    </section>
  )
}