import { Link } from "react-router-dom";

function Header() {
  return (  <nav style={{ padding: "10px", background: "#eee" }}>
      <Link to="/" style={{ marginRight: "15px" }}>Home</Link>
      <Link to="/crud" style={{ marginRight: "15px" }}>CRUD</Link>
      <Link to="/crudjson" style={{ marginRight: "15px" }}>CRUDjson</Link>
      <Link to="/about"  style={{ marginRight: "15px" }}>About</Link>
      <Link to="/todo"  style={{ marginRight: "15px" }}>Todo</Link>
      <Link to="/calcu"  style={{ marginRight: "15px" }}>Calculator</Link>

    </nav>
  );
};
    
export default Header 


    
      
    
  
