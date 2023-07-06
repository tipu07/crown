import React from "react"
import style from "@/styles/scss/web.module.scss"
import Image from "next/image"
import { IconCalendar, IconDownload2, IconFilter, IconSearch } from "@/components/images"
import AffiliatesTable from "./affiliatesTable"
import TablePagination from "@/components/tablePagination"

const AffiliatesDetail = () => {
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
							<Image width={100} height={100} src={IconDownload2} alt="" /> Export CSV
						</button>
					</div>
				</div>
				<AffiliatesTable />
			</div>
			<TablePagination />
		</>
	)
}

export default AffiliatesDetail
