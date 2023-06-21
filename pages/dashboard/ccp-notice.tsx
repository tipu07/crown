import React from "react"
import style from "@/styles/scss/web.module.scss"
import DashboardHeader from "@/components/dashboardHeader"
import DashboardSidebar from "@/components/dashboardSidebar"
import CcpNoticeDetail from "./ccpNotice/ccpNoticeDetail"

const CcpNotice = () => {
	return (
		<>
			<section className={style.dashboard} id={style.refund_policy}>
				<DashboardSidebar />
				<div id={style.main_area}>
					<DashboardHeader pageTitle="CCP Notice" />
					<CcpNoticeDetail />
				</div>
			</section>
		</>
	)
}

export default CcpNotice
