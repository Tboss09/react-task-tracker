import Button from './Button';
import PropTypes from 'prop-types'

// snippet(rafce)

const Header = ({ title, onAdd, showAdd }) => {
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button name={showAdd ? "Close Task" : "Add Task"} color={showAdd ? "red" : "green"} onClick={onAdd} />
        </header>
    )
}
Header.propTypes = {
    title: PropTypes.string
}
export default Header
