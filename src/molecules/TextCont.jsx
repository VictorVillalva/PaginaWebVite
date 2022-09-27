import Text from '../atoms/Text';
import '../assets/Styles/textCont.css';

function TextCont ( props ) {
    return (
        <div className='textCont'>
            <Text text={props.text}></Text>
        </div>
    )
}

export default TextCont;