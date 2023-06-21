import React from "react"
import style from "@/styles/scss/web.module.scss"
import DashboardHeader from "@/components/dashboardHeader"
import DashboardSidebar from "@/components/dashboardSidebar"
import InstalmentBookDetail from "./instalmentBook/instalmentBookDetail"

const InstalmentBook = () => {
	return (
		<>
			<section className={style.dashboard} id={style.application}>
				<DashboardSidebar />
				<div id={style.main_area}>
					<DashboardHeader pageTitle="Instalment Book" />
					<InstalmentBookDetail />
				</div>
			</section>
		</>
	)
}

export default InstalmentBook
