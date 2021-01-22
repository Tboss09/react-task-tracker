import Button from './Button';
import PropTypes from 'prop-types'
import { useLocation } from "react-router-dom";
// snippet(rafce)

const Header = ({ title, onAdd, showAdd }) => {
    const location = useLocation();

    return (
        <header className="header">
            <h1>{title}</h1>
            {location.pathname === "/" &&

                <Button name={showAdd ? "Close Task" : "Add Task"} color={showAdd ? "red" : "green"} onClick={onAdd} />
                
            }
        </header>

    )
}
Header.propTypes = {
    title: PropTypes.string
}
export default Header
