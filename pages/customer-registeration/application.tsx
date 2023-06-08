import React from "react"
import style from "@/styles/scss/web.module.scss"
import CustomerRegistrationHeader from "@/components/customerRegistrationHeader"
import CustomerRegistrationSidebar from "@/components/customerRegistrationSidebar"
import ApplicationDetail from "./application/applicationDetail"

const Application = () => {
	return (
		<>
			<section className={style.dashboard} id={style.application}>
				<CustomerRegistrationSidebar />
				<div id={style.main_area}>
					<CustomerRegistrationHeader pageTitle="Application" />
					<ApplicationDetail />
				</div>
			</section>
		</>
	)
}

export default Application
