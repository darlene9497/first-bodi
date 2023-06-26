import './header.css'
import Logo from '../../assets/firstbodilogo.png'
import Bar from '../../assets/bar.png'
import { useState } from 'react'
import { Link } from 'react-scroll'

export default function Header() {
  const mobile = window.innerWidth<=768 ? true : false
  const [menuOpened, setMenuOpened] = useState(false)

  return (
    <div className="header">
        <img src={Logo} alt="" className='logo' />
        {menuOpened === false && mobile === true ? (
          <div 
          style={{ 
            backgroundColor:'white', 
            padding:'0.5rem', 
            borderRadius:'5px' 
          }}
          onClick={() => setMenuOpened(true)}
          >
            <img src={Bar} alt="" style={{width:'1.5rem', height:'1.5rem'}} />
          </div>
        ) : (
        <ul className='header-menu'>
            <li onClick={() => setMenuOpened(false)}>
              <Link onClick={() => setMenuOpened(false)}
              activeClass='active'
              to='home'
              span={true}
              smooth={true}
              >Home</Link>
            </li>
            <li onClick={() => setMenuOpened(false)}>
              <Link onClick={() => setMenuOpened(false)}
              to='programs'
              span={true}
              smooth={true}
              >Programs</Link>
            </li>
            <li onClick={() => setMenuOpened(false)}>
              <Link onClick={() => setMenuOpened(false)}
              to='why_us'
              span={true}
              smooth={true}
              >Why Us</Link>
            </li>
            <li onClick={() => setMenuOpened(false)}>
              <Link onClick={() => setMenuOpened(false)}
              to='plans'
              span={true}
              smooth={true}
              >Plans</Link>
            </li>
            <li onClick={() => setMenuOpened(false)}>
              <Link onClick={() => setMenuOpened(false)}
              to='testimonials'
              span={true}
              smooth={true}
              >Testimonials</Link>
            </li>
        </ul>
        )}
    </div>
  )
}
