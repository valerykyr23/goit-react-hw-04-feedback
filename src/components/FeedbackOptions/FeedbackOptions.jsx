import css from "./FeedbackOptions.module.css";
import PropTypes from 'prop-types';


export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    
    

    return (
        
        options.map(smile => {
            return (<button className = {css.optionButton} key={smile} type="button" name={smile} onClick={onLeaveFeedback}>{
                smile === 'good' ? "😍" : smile === 'neutral' ? " 👽" : " 🤬"}
        </button>)
        }) 
    )
}


FeedbackOptions.propTypes = {
    options: PropTypes.array,
    onLeaveFeedback: PropTypes.func
}

