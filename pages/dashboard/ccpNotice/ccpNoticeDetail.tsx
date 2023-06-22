import React from "react"
import style from "@/styles/scss/web.module.scss"
import CcpNoticeContent from "./ccpNoticeContent"

const CcpNoticeDetail = () => {
	return (
		<>
			<div className={style.in_blk}>
				<CcpNoticeContent />
			</div>
		</>
	)
}

export default CcpNoticeDetail
