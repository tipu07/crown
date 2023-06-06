import React from "react"
import style from "@/styles/scss/web.module.scss"
import LogonSidebar from "@/components/logonSidebar"
import { PhotoLogon } from "@/components/images"
import LoginForm from "./login/loginForm"
import Head from "next/head"

const Login = () => {
	return (
		<>
			<Head>
				<title>Login — CrownCreditPro</title>
				<meta name="description" content="CrownCreditPro" />
				<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=2, user-scalable=yes" />
				<link rel="icon" href="/images/favicon.png" />
			</Head>
			<section id={style.logon}>
				<LogonSidebar bg_image={PhotoLogon} />
				<LoginForm />
			</section>
		</>
	)
}

export default Login
