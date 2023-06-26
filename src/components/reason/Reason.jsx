import './reason.css'
import img1 from '../../assets/jump.jpeg'
import img2 from '../../assets/kettlebell.jpg'
import img3 from '../../assets/fitman1.jpeg'
import img4 from '../../assets/fitgirl1.jpeg'
import tick from '../../assets/tick.png'

export default function Reason() {
  return (
    <div className='reason' id='why_us'>
        <div className="left-r">
            <img src={img1} alt="" />
            <img src={img3} alt="" />
            <img src={img2} alt="" />
            <img src={img4} alt="" />
        </div>
        <div className="right-r">
            <span>Several considerations</span>
            <div>
                <span className="stroke-text">why </span>
                <span>choose us?</span>
            </div>
            <div className="details-r">
                <div>
                    <img src={tick} alt="" />
                    <span>Convenient home training fitness program</span>
                </div>
                <div>
                    <img src={tick} alt="" />
                    <span>Customized workout programs designed by a reliable instructor</span>
                </div>
                <div>
                    <img src={tick} alt="" />
                    <span>Time flexibility that suits your schedule</span>
                </div>
                <div>
                    <img src={tick} alt="" />
                    <span>Affordable and budget-friendly option for achieving your fitness goals</span>
                </div>
            </div>
        </div>
    </div>
  )
}
