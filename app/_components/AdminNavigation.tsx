import Link from "next/link";

const AdminNavigation = () => {
  return (
    <div>
      <aside className="bg-gray-800 text-white w-64 min-h-screen p-4">
        <nav className="space-y-4">
          <h2 className="text-xl font-bold mb-4">Admin Panel</h2>
          <Link href="/admin/dashboard" className="block hover:text-gray-400">
            Dashboard
          </Link>
          <Link href="/admin/cars" className="block hover:text-gray-400">
            Manage Cars
          </Link>
          <Link href="/admin/settings" className="block hover:text-gray-400">
            Settings
          </Link>
          <button
            onClick={() => {
              localStorage.removeItem("adminSession");
              window.location.href = "/admin/login";
            }}
            className="block mt-4 bg-red-600 hover:bg-red-700 py-2 px-4 rounded"
          >
            Logout
          </button>
        </nav>
      </aside>
    </div>
  );
};

export default AdminNavigation;
