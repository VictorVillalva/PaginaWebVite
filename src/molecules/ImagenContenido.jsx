import formula1 from '../assets/Img/fondo2.jpg';

import '../assets/Styles/imagenContenido.css';
import Img from'../Atoms/Image';

function ContenidoImagen(){
    return(
        <div className='content'>
            <Img src={formula1} className='formula1'></Img>
            <h2>Welcome To</h2>
            <h1>FORMULA 1</h1>
        </div>
    )
}

export default ContenidoImagen;