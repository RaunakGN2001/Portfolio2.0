import React from 'react'


const HamburgerDark = ({ classname, onClickHandler }) => {
    return (
        <svg onClick={onClickHandler} className={classname} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 40 40">
            <path fill="#dff0fe" d="M1.5 17.5H38.5V22.5H1.5z"></path><path fill="#4788c7" d="M38,18v4H2v-4H38 M39,17H1v6h38V17L39,17z"></path><path fill="#dff0fe" d="M1.5 7.5H38.5V12.5H1.5z"></path><path fill="#4788c7" d="M38,8v4H2V8H38 M39,7H1v6h38V7L39,7z"></path><g><path fill="#dff0fe" d="M1.5 27.5H38.5V32.5H1.5z"></path><path fill="#4788c7" d="M38,28v4H2v-4H38 M39,27H1v6h38V27L39,27z"></path></g>
        </svg>
    )
}

export default HamburgerDark