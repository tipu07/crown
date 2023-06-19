import React from "react"
import style from "@/styles/scss/web.module.scss"
import CustomerRegistrationHeader from "@/components/customerRegistrationHeader"
import CustomerRegistrationSidebar from "@/components/customerRegistrationSidebar"
import ApplicationViewDetail from "./applicationView/applicationViewDetail"

const ApplicationView = () => {
	return (
		<>
			<section className={style.dashboard} id={style.application_view}>
				<CustomerRegistrationSidebar />
				<div id={style.main_area}>
					<CustomerRegistrationHeader pageTitle="Application" />
					<ApplicationViewDetail />
				</div>
			</section>
		</>
	)
}

export default ApplicationView
