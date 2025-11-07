import { Link } from "react-router-dom"
import '../../../src/App.css'


function Navigation () {
    return(
        <>
        <nav>
       <div className="nav-links" >
      <Link to="/" className="nav-link">Home </Link>
      <Link to="/TeamExpenses" className="nav-link">Team Expenses </Link>
      <Link to="/TeamFunds" className="nav-link">Team Funds </Link>  
      <Link to="/TeamMgmt" className="nav-link">Team Management </Link>   
        </div>
</nav>
        </>
    )
}

export default Navigation