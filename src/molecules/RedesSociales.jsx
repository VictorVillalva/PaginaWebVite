import facebook from '../assets/Img/facebook.png'
import youtube from '../assets/Img/youtube.png'

import Img from '../atoms/Img'

function RedesSociales () {
    return (
    <div className='redesSociales'>
            <Img src={facebook} className="icons"></Img>
            <Img src={youtube} className="icons"></Img>
    </div>
    )
}

export default RedesSociales;