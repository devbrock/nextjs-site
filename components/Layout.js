import Navbar from './Navbar'

export const Layout = (props) => {
    return ( 
        <div>
            <Navbar />
            {props.children}
        </div>
     );
}
 
export default Layout;