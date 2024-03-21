import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center'
        }}>
            <Link to="/">Home</Link>
            <Link to="/weather">Weather</Link>
            <Link to="/todo">Todo</Link>
            <Link to="/chat">Chat</Link>
        </nav>
    )
}

export default Navbar;