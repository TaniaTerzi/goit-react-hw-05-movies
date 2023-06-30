import { NavLink, Outlet } from "react-router-dom";

const SharedLayout = () => {
  const stylesEl = ({ isActive }) => {
    return { backgroundColor: isActive ? "yellow" : "aquamarine", marginLeft: '20px' }
}
return <div>
          <header>
            <NavLink to='/' style={stylesEl}>Home</NavLink>
            <NavLink to='/movies' style={stylesEl}>Movies</NavLink>
          </header>
        <Outlet/>
    </div> 
};

export default SharedLayout;