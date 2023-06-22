import React from "react"
import style from "@/styles/scss/web.module.scss"
import DashboardHeader from "@/components/dashboardHeader"
import DashboardSidebar from "@/components/dashboardSidebar"
import MessagesDetail from "./messages/messagesDetail"

const Messages = () => {
	return (
		<>
			<section className={style.dashboard} id={style.message}>
				<DashboardSidebar />
				<div id={style.main_area}>
					<DashboardHeader pageTitle="Messages" />
					<MessagesDetail />
				</div>
			</section>
		</>
	)
}

export default Messages
