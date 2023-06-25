import './testimonials.css'
import { testimonialsData } from '../../data/testimonialsData'
import { useState } from 'react'
import leftArrow from'../../assets/leftArrow.png'
import rightArrow from'../../assets/rightArrow.png'

export default function Testimonials() {
    const[selected, setSelected] = useState(0)
    const tLength = testimonialsData.length

  return (
    <div className='testimonials'>
        <div className="left-t">
            <span>Testimonials</span>
            <span>Words from</span>
            <span className="stroke-text">our clients</span>
            <span>
                {testimonialsData[selected].review}
            </span>
            <span>
                <span style={{color:'var(--red)'}}>
                    {testimonialsData[selected].name}
                </span>{' '}
                - {testimonialsData[selected].status}
            </span>
        </div>
        <div className="right-t">
            <div></div>
            <div></div>
            <img src={testimonialsData[selected].image} alt="" />
            <div className="arrows">
                <img
                onClick={() => {
                    selected === 0
                    ? setSelected(tLength - 1)
                    : setSelected((prev) => prev - 1)
                }}
                src={leftArrow} alt="" />
                <img
                onClick={() => {
                    selected === tLength - 1
                    ? setSelected(0)
                    : setSelected((prev) => prev + 1)
                }}
                src={rightArrow} alt="" />
            </div>
        </div>
    </div>
  )
}
