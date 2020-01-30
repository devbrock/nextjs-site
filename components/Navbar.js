export const Navbar = () => {
    return (
        <>
            <ul>
                <a href="/"> <img className="navbar-branding" src="/logo.png" /> </a>
                <ol>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li >
                        < a href="/blogs" > Blogs</a >
                    </li >
                </ol>
            </ul>
        </>
    );
}

export default Navbar;