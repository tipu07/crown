import React from "react"
import style from "@/styles/scss/web.module.scss"
import CustomerRegistrationHeader from "@/components/customerRegistrationHeader"
import CustomerRegistrationSidebar from "@/components/customerRegistrationSidebar"
import NoticesDetail from "./notices/noticesDetail"

const Notices = () => {
	return (
		<>
			<section className={style.dashboard} id={style.document_request}>
				<CustomerRegistrationSidebar />
				<div id={style.main_area}>
					<CustomerRegistrationHeader pageTitle="Notices" />
					<NoticesDetail />
				</div>
			</section>
		</>
	)
}

export default Notices
