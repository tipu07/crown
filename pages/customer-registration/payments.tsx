import React from "react"
import style from "@/styles/scss/web.module.scss"
import CustomerRegistrationHeader from "@/components/customerRegistrationHeader"
import CustomerRegistrationSidebar from "@/components/customerRegistrationSidebar"
import PaymentsDetail from "./payments/paymentsDetail"

const Payments = () => {
	return (
		<>
			<section className={style.dashboard} id={style.payments}>
				<CustomerRegistrationSidebar />
				<div id={style.main_area}>
					<CustomerRegistrationHeader pageTitle="Payments" />
					<PaymentsDetail />
				</div>
			</section>
		</>
	)
}

export default Payments
