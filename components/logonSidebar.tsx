import React from "react"
import style from "@/styles/scss/app.module.scss"
import Logo from "./logo"
import Link from "next/link"

const LogonSidebar = (props: any) => {
	const { bg_image } = props
	return (
		<>
			<div className={style.login_sidebar} style={{ backgroundImage: "url(" + bg_image.src + ")" }}>
				<div className={style.login_sidebar_txt}>
					<Logo />
					<h3 className="mt-4">
						We Sell Integrity
						<span>not Credit Repair</span>
					</h3>
					<p>If you don’t take good care of your credit, then your credit won’t take good care of you</p>
				</div>
			</div>
		</>
	)
}

export default LogonSidebar
