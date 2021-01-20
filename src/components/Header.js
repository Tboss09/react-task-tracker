import React from 'react'
const Header = ({ title }) => {
    return (

        // When using inline styles in jsx, put it in braces*2 -->{{}}
        //Or create an object,input the style then replace it with just one brace   -->{{}}

        <header>
            <h1>{title}</h1>
        </header>
    )
}

// You can set default Props like this
// Header.defaultProps = {
//     title: "Task Runner"
// }

// // css in Js
// const headingStyle = {
//     color: "red",
//     background: "black",
//     fontFamily: "poppins",

// };

export default Header;