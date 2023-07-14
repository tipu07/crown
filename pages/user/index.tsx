import React, { useState } from "react"
import style from "@/styles/scss/web.module.scss"
import UserHeader from "@/components/userHeader"
import UserSidebar from "@/components/userSidebar"
import HomeDetail from "./index/homeDetail"

const Home = () => {
	const [toggle, setToggle] = useState(false)
	const toggleHandle = () => {
		setToggle(!toggle)
	}
	return (
		<>
			<section className={`${style.dashboard} ${toggle ? style.flow : ""}`} id={style.user_dashboard}>
				<UserSidebar isActive={toggle} />
				<div id={style.main_area}>
					<UserHeader isActive={toggle} onToggle={toggleHandle} pageTitle="Home" />
					<HomeDetail />
				</div>
			</section>
		</>
	)
}

export default Home
