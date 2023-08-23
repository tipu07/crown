import React, { useState } from "react"
import style from "@/styles/scss/web.module.scss"
import SalesPersonHeader from "@/components/salesPersonHeader"
import SalesPersonSidebar from "@/components/salesPersonSidebar"
import DashboardDetail from "./dashboard/dashboardDetail"

const Dashboard = () => {
	const [toggle, setToggle] = useState(false)
	const toggleHandle = () => {
		setToggle(!toggle)
	}
	return (
		<>
			<section className={`${style.dashboard} ${toggle ? style.flow : ""}`} id={style.affiliateRegistration}>
				<SalesPersonSidebar isActive={toggle} />
				<div id={style.main_area}>
					<SalesPersonHeader isActive={toggle} onToggle={toggleHandle} pageTitle="Dashboard" />
					<DashboardDetail />
				</div>
			</section>
		</>
	)
}

export default Dashboard
