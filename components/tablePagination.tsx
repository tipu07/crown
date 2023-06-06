import React from "react"
import style from "@/styles/scss/web.module.scss"
import Pagination from "./pagination"

const TablePagination = () => {
	return (
		<>
			<div className={style.table_pagination}>
				<p>Showing 1 to 9 of 200 entries</p>
				<Pagination />
			</div>
		</>
	)
}

export default TablePagination
