import React from "react"
import style from "@/styles/scss/web.module.scss"
import Image from "next/image"
import { IconDownload2, IconFilter, IconSearch } from "@/components/images"
import WithdrawRequestTable from "./withdrawRequestTable"
import TablePagination from "@/components/tablePagination"

const WithdrawRequestDetail = () => {
	return (
		<>
			<div className={style.in_blk}>
				<div className={style.top_head}>
					<div className={style.srch_blk}>
						<button type="submit">
							<Image width={100} height={100} src={IconSearch} alt="" />
						</button>
						<input type="text" name="" id="" className={style.input} placeholder="Search" />
					</div>
					<div className={`${style.btn_blk} ms-auto`}>
						<button className={`${style.site_btn} ${style.blank} ${style.stroke}`}>
							<Image width={100} height={100} src={IconFilter} alt="" /> Filters
						</button>
						<button className={`${style.site_btn} ${style.blank} ${style.stroke}`}>
							<Image width={100} height={100} src={IconDownload2} alt="" /> Export CSV
						</button>
					</div>
				</div>
				<WithdrawRequestTable />
			</div>
			<TablePagination />
		</>
	)
}

export default WithdrawRequestDetail
