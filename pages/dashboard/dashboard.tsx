import React, { useState } from "react"
import style from "@/styles/scss/web.module.scss"
import DashboardHeader from "@/components/dashboardHeader"
import DashboardSidebar from "@/components/dashboardSidebar"
import DashboardDetail from "./dashboard/dashboardDetail"

const Application = () => {
	const [toggle, setToggle] = useState(false)
	const toggleHandle = () => {
		setToggle(!toggle)
	}
	return (
		<>
			<section className={`${style.dashboard} ${toggle ? style.flow : ""}`} id={style.dashboard}>
				<DashboardSidebar isActive={toggle} />
				<div id={style.main_area}>
					<DashboardHeader isActive={toggle} onToggle={toggleHandle} pageTitle="Hello Jennifer" />
					<DashboardDetail />
				</div>
			</section>
		</>
	)
}

export default Application
