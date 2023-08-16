import React, { useState } from "react"
import style from "@/styles/scss/web.module.scss"
import TablePagination from "@/components/tablePagination"
import Image from "next/image"
import { IconDownload2, IconFilter, IconPlus, IconSearch } from "@/components/images"
import ClientsTable from "./clientsTable"
import PopupAddNewClient from "@/components/popupAddNewClient"

const ClientsDetail = () => {
	const [addPopup, setAddPopup] = useState(false)
	const addPopupHandle = () => {
		setAddPopup(!addPopup)
	}
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
						<button type="button" className={`${style.site_btn} ${style.blank} ${style.stroke}`}>
							<Image width={100} height={100} src={IconFilter} alt="" /> Filters
						</button>
						<button type="button" className={`${style.site_btn} ${style.blank} ${style.stroke}`}>
							<Image width={100} height={100} src={IconDownload2} alt="" /> Export CSV
						</button>
						<button type="button" className={style.site_btn} onClick={addPopupHandle}>
							<Image width={100} height={100} src={IconPlus} alt="" />
							Add New Client
						</button>
					</div>
				</div>
				<ClientsTable />
			</div>
			<TablePagination />
			{addPopup ? <PopupAddNewClient closePopupHandle={addPopupHandle} /> : null}
		</>
	)
}

export default ClientsDetail
