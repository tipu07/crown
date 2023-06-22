import React from "react"
import style from "@/styles/scss/web.module.scss"
import DashboardHeader from "@/components/dashboardHeader"
import DashboardSidebar from "@/components/dashboardSidebar"
import RefundPolicyDetail from "./refundPolicy/refundPolicyDetail"

const RefundPolicy = () => {
	return (
		<>
			<section className={style.dashboard} id={style.refund_policy}>
				<DashboardSidebar />
				<div id={style.main_area}>
					<DashboardHeader pageTitle="Refund Policy" />
					<RefundPolicyDetail />
				</div>
			</section>
		</>
	)
}

export default RefundPolicy
