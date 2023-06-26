import './programs.css'
import { programsData } from '../../data/programsData.js'
import arrow from'../../assets/rightArrow.png'

export default function Programs() {
  return (
    <div className='programs' id='programs'>
        <div className="programs-header">
            <span className='stroke-text'>Explore our</span>
            <span>Programs</span>
            <span className='stroke-text'>tailored for you</span>
        </div>
        <div className="program-categories">
            {programsData.map((program) => (
            <div className="category">
                {program.image}
                <span>{program.heading}</span>
                <span>{program.details}</span>
            <div className="join-now">
                <span>Join Now</span>
                <img src={arrow} alt="" />
            </div>
            </div>
          ))}
        </div>
    </div>
  )
}
