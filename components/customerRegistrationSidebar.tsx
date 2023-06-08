import React from "react"
import style from "@/styles/scss/web.module.scss"
import Logo from "./logo"
import Image from "next/image"
import { IconApplication, IconDocuments, IconNotices, IconPayment, PhotoUser_01 } from "./images"
import Link from "next/link"

const CustomerRegistrationSidebar = () => {
	return (
		<>
			<div id={style.sidebar}>
				<Logo />
				<div className={style.profile_block}>
					<div className={`${style.ico} ${style.fill}`}>
						<Image width={200} height={200} src={PhotoUser_01} alt="" />
					</div>
					<div className={style.txt}>
						<div className={style.name}>Jennifer</div>
						<span className={style.type}>Customers</span>
					</div>
				</div>
				<div className={style.sidebar_inner}>
					<ul>
						<li>
							<Link href="/customer-registration/application" className={style.active}>
								<Image width={100} height={100} src={IconApplication} alt="" />
								Application
							</Link>
						</li>
						<li>
							<Link href="/customer-registration/documents-requests">
								<Image width={100} height={100} src={IconDocuments} alt="" />
								Documents Requests
							</Link>
						</li>
						<li>
							<Link href="/customer-registration/notices">
								<Image width={100} height={100} src={IconNotices} alt="" />
								Notices
							</Link>
						</li>
						<li>
							<Link href="/customer-registration/payments">
								<Image width={100} height={100} src={IconPayment} alt="" />
								Payments
							</Link>
						</li>
					</ul>
					<p>
						© 2022CrownCreditPro <span>© Copyright</span>
					</p>
				</div>
			</div>
		</>
	)
}

export default CustomerRegistrationSidebar
