import React from "react"
import style from "@/styles/scss/web.module.scss"
import ProfileBlock from "./profileBlock"

const DashboardDetail = () => {
	return (
		<>
			<div className="row">
				<div className="col-md-8">
					<div className={style.in_blk}></div>
				</div>
				<div className="col-md-4">
					<ProfileBlock />
				</div>
			</div>
		</>
	)
}

export default DashboardDetail
