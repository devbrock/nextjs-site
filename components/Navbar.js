export const Navbar = () => {
    return (
        <>
            <ul className='nav'>
                {/* <a href="/"> <img className="navbar-branding" src="/logo.png" /> </a> */}
                <li>
                    <a href="/" className="gray-dark">Home</a>
                </li>
                <li >
                    < a href="/blogs" className="gray-dark"> Blogs</a >
                </li >
            </ul>
        </>
    );
}

export default Navbar;