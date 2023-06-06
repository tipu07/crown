import React from "react"
import style from "@/styles/scss/web.module.scss"
import LogonSidebar from "@/components/logonSidebar"
import { PhotoBlog03 } from "@/components/images"
import ForgotForm from "./forgot/forgotForm"

const Forgot = () => {
	return (
		<>
			<section id={style.logon}>
				<LogonSidebar bg_image={PhotoBlog03} />
				<ForgotForm />
			</section>
		</>
	)
}

export default Forgot
