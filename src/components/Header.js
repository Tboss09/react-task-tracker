import Button from './Button';
import PropTypes from 'prop-types'

// snippet(rafce)

const Header = ({ title, onClick }) => {
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button name="Add" color="green" onClick={onClick} />
        </header>
    )
}
Header.propTypes = {
    title: PropTypes.string
}
export default Header
