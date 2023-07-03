import Head from "next/head"
import React, { useEffect, useState } from "react"
import style from "@/styles/scss/web.module.scss"
import Navigation from "./navigation"
import Logo from "../logo"
import HeaderStrip from "./headerStrip"
import Router from "next/router"

const Header = (props: any) => {
	const { pageTitle } = props
	const [header, setHeader] = useState("production")
	const [navActive, setNavActive] = useState(false)
	const navToggleHandle = () => {
		setNavActive(!navActive)
	}

	useEffect(() => {
		const { pathname } = Router
		if (pathname == "/player" || pathname == "/player/notifications" || pathname == "/player/booking" || pathname == "/player/booking-detail" || pathname == "/player/tournaments" || pathname == "/player/transactions" || pathname == "/player/wishlists" || pathname == "/player/messages") {
			setHeader("player")
		} else if (pathname == "/organizer" || pathname == "/organizer/notifications" || pathname == "/organizer/booking" || pathname == "/organizer/booking-detail" || pathname == "/organizer/tournaments" || pathname == "/organizer/add-new-tournament" || pathname == "/organizer/transactions" || pathname == "/organizer/wishlists" || pathname == "/organizer/messages") {
			setHeader("organizer")
		} else {
			setHeader("production")
		}
	}, [])

	return (
		<>
			<Head>
				<title>{pageTitle} — CrownCreditPro</title>
				<meta name="description" content="CrownCreditPro" />
				<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=2, user-scalable=yes" />
				<link rel="icon" href="/images/favicon.png" />
			</Head>
			<header id={style.header} className={`${header !== "production" ? style.logged : ""}`}>
				<HeaderStrip />
				<div className={style.contain}>
					<Logo />
					<button type="button" className={`${style.toggle} ${navActive ? style.active : ""}`} onClick={navToggleHandle}>
						<span></span>
					</button>
					<Navigation headerType={header} navActive={navActive} />
				</div>
			</header>
		</>
	)
}

export default Header
