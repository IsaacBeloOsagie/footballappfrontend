import { Outlet } from "react-router-dom";
import Header from './components/Header';

function AppLayout() {
  return (
    <main>
      <Header />
      <div className="container max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto py-10">
        <Outlet />
      </div>
    </main>
  )
}

export default AppLayout
