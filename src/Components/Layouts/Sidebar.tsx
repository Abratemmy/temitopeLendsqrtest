import { NavLink } from "react-router-dom";
import "./Layout.scss";
import logo from '../../assets/Group.svg'
import { IoIosArrowDown } from "react-icons/io";
import organizationIcon from '../../assets/icons/briefcase.png';
import home from '../../assets/icons/home.png';
import user from '../../assets/icons/user-friends.png';
import loan from '../../assets/icons/Vector.png';
import guarantor from '../../assets/icons/users.png';

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <div className="sidebar_logo">
                <img src={logo} alt="Logo" />
            </div>
            {/* s9zeh9ouf7132pukfrd4bhl0daja8xetxjahhacl */}
            
            <nav className="sidebar_nav">
                <div className="organization-section" style={{marginBottom: '20px'}}>
                    <span>
                        <img src={organizationIcon} alt="organization icon" />
                    </span>
                    <span className="organization-text">Switch Organization</span>
                    <span className="organization-arrow"><IoIosArrowDown className="icon"/></span>
                </div>

                <NavLink to="/dashboard" className="sidebar_link">
                    <span>
                        <img src={home} alt="organization icon" />
                    </span>
                     Dashboard
                    
                </NavLink>
                <div className="sidebar_title">Customer</div>
                <NavLink to="/users" className="sidebar_link">
                    <span><img src={user} alt='' /></span>
                    Users
                </NavLink>
                <NavLink to="/guarantors" className="sidebar_link">
                <span><img src={guarantor} alt='' /></span>
                    Guarantors
                </NavLink>
                <NavLink to="/loans" className="sidebar_link">
                <span><img src={loan} alt='' /></span>
                    Loans
                </NavLink><NavLink to="/" className="sidebar_link">
                <span><img src={loan} alt='' /></span>
                    Decision Models
                </NavLink><NavLink to="/" className="sidebar_link">
                <span><img src={loan} alt='' /></span>
                    Savings
                </NavLink><NavLink to="/" className="sidebar_link">
                <span><img src={loan} alt='' /></span>
                    Loan Requests
                </NavLink><NavLink to="/" className="sidebar_link">
                <span><img src={loan} alt='' /></span>
                    Whitelist
                </NavLink><NavLink to="/" className="sidebar_link">
                <span><img src={loan} alt='' /></span>
                    Karma
                </NavLink>

                <div className="sidebar_title">Business</div>
                <NavLink to="/" className="sidebar_link">
                    <span><img src={user} alt='' /></span>
                    Organization
                </NavLink>
                <NavLink to="/" className="sidebar_link">
                <span><img src={guarantor} alt='' /></span>
                    Loan Products
                </NavLink>

                <NavLink to="/" className="sidebar_link">
                <span><img src={guarantor} alt='' /></span>
                    Savings Products
                </NavLink>

                <NavLink to="/" className="sidebar_link">
                <span><img src={guarantor} alt='' /></span>
                    Fees and Charges
                </NavLink>
                <NavLink to="/" className="sidebar_link">
                <span><img src={guarantor} alt='' /></span>
                    Transactions
                </NavLink>
                <NavLink to="/" className="sidebar_link">
                <span><img src={guarantor} alt='' /></span>
                    Services
                </NavLink>
                <NavLink to="/" className="sidebar_link">
                <span><img src={guarantor} alt='' /></span>
                    Service Account
                </NavLink>
                <NavLink to="/" className="sidebar_link">
                <span><img src={guarantor} alt='' /></span>
                    Settlements
                </NavLink>
                <NavLink to="/" className="sidebar_link">
                <span><img src={guarantor} alt='' /></span>
                    Reports
                </NavLink>
                
            </nav>
        </aside>
    );
};

export default Sidebar;