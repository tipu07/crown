import React from "react"
import style from "@/styles/scss/web.module.scss"
import Head from "next/head"

const CustomerRegistrationHeader = (props: any) => {
	const { pageTitle } = props
	return (
		<>
			<Head>
				<title>{pageTitle} — CrownCreditPro</title>
				<meta name="description" content="CrownCreditPro" />
				<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=2, user-scalable=yes" />
				<link rel="icon" href="/images/favicon.png" />
			</Head>
			<div id={style.top_header}>
				<div className={style.title}>
					{pageTitle}
					<span>12:15 PM at 10th February 2021</span>
				</div>
			</div>
		</>
	)
}

export default CustomerRegistrationHeader
