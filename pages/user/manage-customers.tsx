import React, { useState } from "react"
import style from "@/styles/scss/web.module.scss"
import UserHeader from "@/components/userHeader"
import UserSidebar from "@/components/userSidebar"
import ManageCustomersDetail from "./manageCustomers/manageCustomersDetail"

const ManageCustomers = () => {
	const [toggle, setToggle] = useState(false)
	const toggleHandle = () => {
		setToggle(!toggle)
	}
	return (
		<>
			<section className={`${style.dashboard} ${toggle ? style.flow : ""}`} id={style.application}>
				<UserSidebar isActive={toggle} />
				<div id={style.main_area}>
					<UserHeader isActive={toggle} onToggle={toggleHandle} pageTitle="Manage Applications" />
					<ManageCustomersDetail />
				</div>
			</section>
		</>
	)
}

export default ManageCustomers
