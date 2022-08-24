import {useState} from 'react'
import SessionPage from '../components/SessionPage'
const PageMain = () => {
    const [nav, setNav] = useState('happening');
    return(
        <div className='flex items-center justify-center h-screen custom-img'>
            <SessionPage
                header={['upcoming', 'happening', 'happened']}
                handleNav={setNav}
                activeNav={nav}/>
        </div>
    )
}

export default PageMain;