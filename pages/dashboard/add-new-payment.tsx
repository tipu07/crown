import React from "react"
import style from "@/styles/scss/web.module.scss"
import CustomerRegistrationHeader from "@/components/customerRegistrationHeader"
import CustomerRegistrationSidebar from "@/components/customerRegistrationSidebar"
import AddNewPaymentDetail from "./addNewPayment/addNewPaymentDetail"

const AddNewPayment = () => {
	return (
		<>
			<section className={style.dashboard} id={style.payments}>
				<CustomerRegistrationSidebar />
				<div id={style.main_area}>
					<CustomerRegistrationHeader pageTitle="Add New Payment" />
					<AddNewPaymentDetail />
				</div>
			</section>
		</>
	)
}

export default AddNewPayment
