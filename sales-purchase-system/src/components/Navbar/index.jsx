import {NavLink} from 'react-router-dom';

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li><NavLink to="/">Dashboard</NavLink></li>
                <li><NavLink to="/sales">Sales</NavLink></li>
                <li><NavLink to="/purchases">Purchases</NavLink></li>
                <li><NavLink to="/inventory">Inventory</NavLink></li>
                <li><NavLink to="/expenses">Expenses</NavLink></li>
                <li><NavLink to="/reports">Reports</NavLink></li>
                <li><NavLink to="/settings">Settings</NavLink></li>
            </ul>
        </nav>
    );
}