import React from "react"
import style from "@/styles/scss/app.module.scss"
import LogonSidebar from "@/components/logonSidebar"
import { PhotoLogon } from "@/components/images"
import LoginForm from "./login/loginForm"

const Login = () => {
	return (
		<>
			<section id={style.logon}>
				<LogonSidebar bg_image={PhotoLogon} />
				<LoginForm />
			</section>
		</>
	)
}

export default Login
