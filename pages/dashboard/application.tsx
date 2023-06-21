import React from "react"
import style from "@/styles/scss/web.module.scss"
import DashboardHeader from "@/components/dashboardHeader"
import DashboardSidebar from "@/components/dashboardSidebar"
import ApplicationDetail from "./application/applicationDetail"

const Application = () => {
	return (
		<>
			<section className={style.dashboard} id={style.application}>
				<DashboardSidebar />
				<div id={style.main_area}>
					<DashboardHeader pageTitle="Application" />
					<ApplicationDetail />
				</div>
			</section>
		</>
	)
}

export default Application
