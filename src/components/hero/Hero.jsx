import Header from '../header/Header'
import './hero.css'
import heroImg from '../../assets/heroImg.png'
import heroBack from '../../assets/heroback.png'
import calories from '../../assets/calories.png'
import heart from '../../assets/heart.png'

export default function Hero() {
  return (
    <div className="hero">
        <div className="left-h">
            <Header />
            <div className="the-best-ad">
              <div></div>
              <span>Elevate your fitness game, Unleash your potential</span>
            </div>
            <div className="hero-text">
              <div>
                <span className='stroke-text'>Sculpt </span>
                <span>your</span>
              </div>
              <div>
                <span>ultimate body</span>
              </div>
              <div className="span">Discover a place where your body transforms</div>
            </div>
            <div className="figures">
              <div>
                <span>100+</span>
                <span>Expert instructors</span>
              </div>
              <div>
                <span>300+</span>
                <span>Registered members</span>
              </div>
              <div>
                <span>50+</span>
                <span>Fitness programs</span>
              </div>
            </div>
            <div className="hero-buttons">
              <buttons className="btn">Get Started</buttons>
              <buttons className="btn">Learn more</buttons>
            </div>
        </div>
        <div className="right-h">
          <button className='btn'>Join Now</button>
          <div className="heart-rate">
            <img src={heart} alt="" />
            <span>Heart Rate</span>
            <span>116 bpm</span>
          </div>
          <img src={heroImg} alt="" className='hero-image' />
          <img src={heroBack} alt="" className='hero-image-back' />
          <div className="calories">
            <img src={calories} alt="" />
            <div>
              <span>Calories burned </span>
              <span>220 kcal</span>
            </div>
          </div>
        </div>
    </div>
  )
}
