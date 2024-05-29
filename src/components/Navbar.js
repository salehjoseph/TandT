import './NavbarStyle.css';
import {Component } from 'react'
import {Link} from 'react-router-dom'
import {MenuItems} from '../MenuItems.js';


class Navbar extends Component{
    state={clicked:false}
    handleclick = () => {
      this.setState({clicked:!this.state.clicked})
    }
    render(){
        return(
            <nav className="NavbarItems">
                <h1 className='navbar-logo'>PearlLink</h1>
                <div className='menu-icons' onClick={this.handleclick}>
                    <i className={this.state.clicked ? "fas fa-times" : 'fas fa-bars'}> </i>
                  
                </div>
                <ul className={this.state.clicked?" nav-menu active":"nav-menu"} >
                    {MenuItems.map((item,index)=>{
                        return(
                            <li  key={index}>
                                <Link className={item.Cname} to={item.url}>
                                <i className={item.icon}></i>{item.title}</Link>
                            </li>
                        );
                    })}
                  
                </ul>
                <button>Sign Up</button>
            </nav>
        )
    }
} 
export default Navbar;