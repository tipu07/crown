import React from "react"
import style from "@/styles/scss/web.module.scss"
import DashboardHeader from "@/components/dashboardHeader"
import DashboardSidebar from "@/components/dashboardSidebar"
import InvoicesDetail from "./invoices/invoicesDetail"

const Invoices = () => {
	return (
		<>
			<section className={style.dashboard} id={style.application}>
				<DashboardSidebar />
				<div id={style.main_area}>
					<DashboardHeader pageTitle="Invoices" />
					<InvoicesDetail />
				</div>
			</section>
		</>
	)
}

export default Invoices
