import React from "react"
import style from "@/styles/scss/web.module.scss"
import CustomerRegistrationHeader from "@/components/customerRegistrationHeader"
import CustomerRegistrationSidebar from "@/components/customerRegistrationSidebar"
import DocumentsRequestsDetail from "./documentsRequests/documentsRequestsDetail"

const DocumentsRequests = () => {
	return (
		<>
			<section className={style.dashboard} id={style.document_request}>
				<CustomerRegistrationSidebar />
				<div id={style.main_area}>
					<CustomerRegistrationHeader pageTitle="Documents Requests" />
					<DocumentsRequestsDetail />
				</div>
			</section>
		</>
	)
}

export default DocumentsRequests
