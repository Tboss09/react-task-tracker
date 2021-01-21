import PropTypes from 'prop-types'

const Button = ({ name, color, onClick }) => {
    return (
        <>
            <button className="btn" onClick={onClick} style={{ backgroundColor: color }}>{name}</button>
        </>
    )
}
Button.protoTypes = {
    name: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button
