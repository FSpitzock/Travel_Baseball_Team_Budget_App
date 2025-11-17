import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <div className="flex items-center gap-6">
        <Link
          to="/"
          className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
        >
          Home
        </Link>

        <Link
          to="/TeamExpenses"
          className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
        >
          Team Expenses
        </Link>

        <Link
          to="/TeamFunds"
          className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
        >
          Team Funds
        </Link>

        <Link
          to="/TeamMgmt"
          className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
        >
          Team Management
        </Link>
      </div>
    </nav>
  );
}

export default Navigation;
