import style from "./dashboardheader.module.css";
import logo from "../../assets/image/logo.png";

export default function DashboardHeader() {
  return (
    <header
      className={`${style.dashboardheader} flex justify-between px-4 py-6 bg-gray-300`}
    >
      <div className={`flex items-center gap-2`}>
        <img src={logo} alt='' />
        <h2 className={`font-bold text-xl`}>Seller</h2>
      </div>
      <nav>
        <ul className={`flex justify-between items-center gap-6`}>
          <li>Dashboard</li>
          <li>Listings</li>
          <li>Bookings</li>
        </ul>
        <div className={style.thumbnail}>
          <img src='' alt='' />
        </div>
      </nav>
    </header>
  );
}
