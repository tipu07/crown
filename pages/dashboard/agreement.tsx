import React from "react"
import style from "@/styles/scss/web.module.scss"
import DashboardHeader from "@/components/dashboardHeader"
import DashboardSidebar from "@/components/dashboardSidebar"
import AgreementDetail from "./agreement/agreementDetail"

const Agreement = () => {
	return (
		<>
			<section className={style.dashboard} id={style.agreement}>
				<DashboardSidebar />
				<div id={style.main_area}>
					<DashboardHeader pageTitle="Agreement" />
					<AgreementDetail />
				</div>
			</section>
		</>
	)
}

export default Agreement
