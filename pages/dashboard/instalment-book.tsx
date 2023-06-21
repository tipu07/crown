import React from "react"
import style from "@/styles/scss/web.module.scss"
import CustomerRegistrationHeader from "@/components/customerRegistrationHeader"
import CustomerRegistrationSidebar from "@/components/customerRegistrationSidebar"
import InstalmentBookDetail from "./instalmentBook/instalmentBookDetail"

const InstalmentBook = () => {
	return (
		<>
			<section className={style.dashboard} id={style.application}>
				<CustomerRegistrationSidebar />
				<div id={style.main_area}>
					<CustomerRegistrationHeader pageTitle="Instalment Book" />
					<InstalmentBookDetail />
				</div>
			</section>
		</>
	)
}

export default InstalmentBook
