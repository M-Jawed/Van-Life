import aboutHero from '../../assets/about-hero.png';
import {Link} from 'react-router-dom';

export default function About(){
    return (
        <section className="about-page">
            <div className='about-div'>
                <div className="about-img-div">
                    <img src={aboutHero} alt="image of a person sitting on a van and starring at the sky" />
                </div>
                <div className='about-info'>
                    <h1>Don't squeeze in a sedan when you could relax in a van!</h1>
                    <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra😉)</p>

                    <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>

                    <p>So whether you're a seasoned road warrior or a newcomer to the vanlife scene, rest assured that you're in good hands with us. Let's embark on this journey together and unlock the endless possibilities that await on the open road.</p>
                </div>
            </div>

            <div className='explore-vans'>
                <div className='explore-vans-div'>
                    <h1>Your destination is waiting. <span>Your vans is ready.</span></h1>
                    <Link to='../vans'><button>Explore our vans</button></Link>
                </div>
            </div>
        </section>
    )
}