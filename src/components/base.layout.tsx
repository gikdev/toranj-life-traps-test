import { Link, Outlet } from "react-router"

export default function BaseLayout() {
  return (
    <div className="flex flex-col min-h-dvh">
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <Link to="/" className="btn btn-ghost text-xl">
            <img src="/logo.png" className="size-8" />
            <span>مرکز ترنج</span>
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  )
}
