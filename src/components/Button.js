import PropTypes from 'prop-types'

const Button = ({ name, color }) => {
    return (
        <>
            <button className="btn" onClick={onClick} style={{ backgroundColor: color }}>{name}</button>
        </>
    )
}
Button.protoTypes = {
    name: PropTypes.string
}

export default Button
