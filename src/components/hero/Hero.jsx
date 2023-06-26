import Header from '../header/Header'
import './hero.css'
import heroImg from '../../assets/heroImg.png'
import heroBack from '../../assets/heroback.png'
import calories from '../../assets/calories.png'
import heart from '../../assets/heart.png'
import { motion } from 'framer-motion'
// import NumberCounter from 'number-counter'

export default function Hero() {
  const transition = {type: 'spring', duration: 3}
  const mobile = window.innerWidth<=768 ? true:false

  return (
    <div className="hero" id='home'>
      <div className="blur hero-blur"></div>
        <div className="left-h">
            <Header />
            <div className="the-best-ad">
              <motion.div 
              initial={{ left:mobile? '178px': '350px' }}
              whileInView={{ left:'8px' }}
              transition={{ ...transition, type:'tween' }}>
              </motion.div>
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
                <span>
                  3
                  {/* <NumberCounter end={100} start={80} delay='4' postfix="+" /> */}
                </span>
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
          <button className='btn'>Register Now</button>
          < motion.div className="heart-rate"
          initial={{ right:'-1rem' }} 
          transition={transition}
          whileInView={{ right:'4rem' }}>
            <img src={heart} alt="" />
            <span>Heart Rate</span>
            <span>116 bpm</span>
          </motion.div>
          <img src={heroImg} alt="" className='hero-image' />
          <motion.img
          initial={{ right:'11rem' }} 
          transition={transition}
          whileInView={{ right:'18rem' }} src={heroBack} alt="" className='hero-image-back' />
          <motion.div className="calories"
          initial={{ right:'37rem' }} 
          transition={transition}
          whileInView={{ right:'28rem' }}>
            <img src={calories} alt="" />
            <div>
              <span>Calories burned </span>
              <span>220 kcal</span>
            </div>
          </motion.div>
        </div>
    </div>
  )
}
