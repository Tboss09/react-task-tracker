import PropTypes from 'prop-types';

const Button = ({ name, onClick }) => {
        return (<button onClick={onClick} className="btn">{name}</button>);
}
export default Button;

Button.propTypes = {
    name: PropTypes.string,
    onClick: PropTypes.func,
}