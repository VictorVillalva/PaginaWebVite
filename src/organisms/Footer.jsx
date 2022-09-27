import logo from '../assets/Img/logo-F1.png'
import '../assets/Styles/footer.css'
import TextCont from '../molecules/TextCont';

const TextContent = {
    text: "© 2003-2022 Formula One World Championship Limited"
}

function Footer() {
    return ( 
        <footer>
            <div id='div_fotos'>
                <img src={logo} alt="Logo1" />
                <TextCont text={TextContent.text}></TextCont>
            </div>
        </footer>
    );
}

export default Footer;