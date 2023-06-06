import React from "react"
import style from "@/styles/scss/web.module.scss"
import Link from "next/link"
import Image from "next/image"

const HeaderStrip = () => {
	return (
		<>
			<div className={style.header_strip}>
				<ul className={style.sm_list}>
					<li>
						<Link href="/production/about">About us</Link>
					</li>
					<li>
						<Link href="/production/contact">Contact us</Link>
					</li>
					<li>
						<Link href="/production/privacy-policy">Privacy policy</Link>
					</li>
				</ul>
			</div>
		</>
	)
}

export default HeaderStrip
