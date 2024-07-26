import './errorMessage.scss';
import img from './error.gif'


const ErrorMessage = () => {
    return(
        <img src={img}
             alt="Error message"
             className="error-message"/>
    )
}

export default ErrorMessage;