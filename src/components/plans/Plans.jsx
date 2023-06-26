import './plans.css'
import { plansData } from '../../data/plansData'
import whiteTick from '../../assets/tickk.png'

export default function Plans() {
  return (
    <div className='plans-container' id='plans'>
        <div className="blur plans-blur-1"></div>
        <div className="blur plans-blur-2"></div>
        <div className="programs-header" style={{gap:'2rem'}}>
            <span className="stroke-text">Choose a</span>
            <span style={{ display: 'block', lineHeight: '1.1', verticalAlign: 'top' }}>suitable plan</span>
            <span className="stroke-text">for you</span>
        </div>
        <div className="plans">
            {plansData.map((plan, i) => (
                <div className="plan" key={i}>
                    {plan.icon}
                    <span>{plan.name}</span>
                    <span>$ {plan.price}</span>
                    <div className="features">
                        {plan.features.map((feature, i) => (
                            <div className="feature">
                                <img src={whiteTick} alt="" />
                                <span key={i}>{feature}</span>
                            </div>
                        )
                        )}
                    </div>
                    <button className="btn">Register now</button>
                </div>
            )
            )}
        </div>
    </div>
  )
}
