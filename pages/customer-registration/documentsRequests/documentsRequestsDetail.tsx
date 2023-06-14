import React from "react"
import style from "@/styles/scss/web.module.scss"
import Image from "next/image"
import { DocumentImage, IconDownload, IconEdit, IconSearch } from "@/components/images"

const DocumentsRequestsDetail = () => {
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
					<button className={style.site_btn}>+ Add New Documents</button>
				</div>
				<div className={style.table_blk_wrapper}>
					<div className={style.table_blk}>
						<table>
							<thead>
								<tr>
									<th style={{ width: "1rem" }}>
										<input type="checkbox" name="" id="" />
									</th>
									<th>Documents</th>
									<th>Owner</th>
									<th>Edited On</th>
									<th>Uploaded On</th>
									<th>Status</th>
									<th style={{ width: "10rem" }}>Action</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<input type="checkbox" name="" id="" />
									</td>
									<td>Document Name 1</td>
									<td>Json</td>
									<td>Sep 23, 2021</td>
									<td>Sep 20, 2021</td>
									<td>
										<select name="" id="" className={`${style.status} ${style.active}`}>
											<option value="" selected={true}>
												Active
											</option>
											<option value="">Inactive</option>
										</select>
									</td>
									<td>
										<div className={style.action_btn}>
											<button type="button">
												<Image width={100} height={100} src={IconEdit} alt="" /> Edit
											</button>
											<button type="button">
												<Image width={100} height={100} src={IconDownload} alt="" /> Download
											</button>
										</div>
									</td>
								</tr>
								<tr>
									<td>
										<input type="checkbox" name="" id="" />
									</td>
									<td>Document Name 1</td>
									<td>Json</td>
									<td>Sep 23, 2021</td>
									<td>Sep 20, 2021</td>
									<td>
										<select name="" id="" className={`${style.status} ${style.inactive}`}>
											<option value="">Active</option>
											<option value="" selected={true}>
												Inactive
											</option>
										</select>
									</td>
									<td>
										<div className={style.action_btn}>
											<button type="button">
												<Image width={100} height={100} src={IconEdit} alt="" /> Edit
											</button>
											<button type="button">
												<Image width={100} height={100} src={IconDownload} alt="" /> Download
											</button>
										</div>
									</td>
								</tr>
								<tr>
									<td>
										<input type="checkbox" name="" id="" />
									</td>
									<td>Document Name 1</td>
									<td>Json</td>
									<td>Sep 23, 2021</td>
									<td>Sep 20, 2021</td>
									<td>
										<select name="" id="" className={`${style.status} ${style.inactive}`}>
											<option value="">Active</option>
											<option value="" selected={true}>
												Inactive
											</option>
										</select>
									</td>
									<td>
										<div className={style.action_btn}>
											<button type="button">
												<Image width={100} height={100} src={IconEdit} alt="" /> Edit
											</button>
											<button type="button">
												<Image width={100} height={100} src={IconDownload} alt="" /> Download
											</button>
										</div>
									</td>
								</tr>
								<tr>
									<td>
										<input type="checkbox" name="" id="" />
									</td>
									<td>Document Name 1</td>
									<td>Json</td>
									<td>Sep 23, 2021</td>
									<td>Sep 20, 2021</td>
									<td>
										<select name="" id="" className={`${style.status} ${style.inactive}`}>
											<option value="">Active</option>
											<option value="" selected={true}>
												Inactive
											</option>
										</select>
									</td>
									<td>
										<div className={style.action_btn}>
											<button type="button">
												<Image width={100} height={100} src={IconEdit} alt="" /> Edit
											</button>
											<button type="button">
												<Image width={100} height={100} src={IconDownload} alt="" /> Download
											</button>
										</div>
									</td>
								</tr>
								<tr>
									<td>
										<input type="checkbox" name="" id="" />
									</td>
									<td>Document Name 1</td>
									<td>Json</td>
									<td>Sep 23, 2021</td>
									<td>Sep 20, 2021</td>
									<td>
										<select name="" id="" className={`${style.status} ${style.inactive}`}>
											<option value="">Active</option>
											<option value="" selected={true}>
												Inactive
											</option>
										</select>
									</td>
									<td>
										<div className={style.action_btn}>
											<button type="button">
												<Image width={100} height={100} src={IconEdit} alt="" /> Edit
											</button>
											<button type="button">
												<Image width={100} height={100} src={IconDownload} alt="" /> Download
											</button>
										</div>
									</td>
								</tr>
								<tr>
									<td>
										<input type="checkbox" name="" id="" />
									</td>
									<td>Document Name 1</td>
									<td>Json</td>
									<td>Sep 23, 2021</td>
									<td>Sep 20, 2021</td>
									<td>
										<select name="" id="" className={`${style.status} ${style.inactive}`}>
											<option value="">Active</option>
											<option value="" selected={true}>
												Inactive
											</option>
										</select>
									</td>
									<td>
										<div className={style.action_btn}>
											<button type="button">
												<Image width={100} height={100} src={IconEdit} alt="" /> Edit
											</button>
											<button type="button">
												<Image width={100} height={100} src={IconDownload} alt="" /> Download
											</button>
										</div>
									</td>
								</tr>
								<tr>
									<td>
										<input type="checkbox" name="" id="" />
									</td>
									<td>Document Name 1</td>
									<td>Json</td>
									<td>Sep 23, 2021</td>
									<td>Sep 20, 2021</td>
									<td>
										<select name="" id="" className={`${style.status} ${style.inactive}`}>
											<option value="">Active</option>
											<option value="" selected={true}>
												Inactive
											</option>
										</select>
									</td>
									<td>
										<div className={style.action_btn}>
											<button type="button">
												<Image width={100} height={100} src={IconEdit} alt="" /> Edit
											</button>
											<button type="button">
												<Image width={100} height={100} src={IconDownload} alt="" /> Download
											</button>
										</div>
									</td>
								</tr>
								<tr>
									<td>
										<input type="checkbox" name="" id="" />
									</td>
									<td>Document Name 1</td>
									<td>Json</td>
									<td>Sep 23, 2021</td>
									<td>Sep 20, 2021</td>
									<td>
										<select name="" id="" className={`${style.status} ${style.inactive}`}>
											<option value="">Active</option>
											<option value="" selected={true}>
												Inactive
											</option>
										</select>
									</td>
									<td>
										<div className={style.action_btn}>
											<button type="button">
												<Image width={100} height={100} src={IconEdit} alt="" /> Edit
											</button>
											<button type="button">
												<Image width={100} height={100} src={IconDownload} alt="" /> Download
											</button>
										</div>
									</td>
								</tr>
								<tr>
									<td>
										<input type="checkbox" name="" id="" />
									</td>
									<td>Document Name 1</td>
									<td>Json</td>
									<td>Sep 23, 2021</td>
									<td>Sep 20, 2021</td>
									<td>
										<select name="" id="" className={`${style.status} ${style.inactive}`}>
											<option value="">Active</option>
											<option value="" selected={true}>
												Inactive
											</option>
										</select>
									</td>
									<td>
										<div className={style.action_btn}>
											<button type="button">
												<Image width={100} height={100} src={IconEdit} alt="" /> Edit
											</button>
											<button type="button">
												<Image width={100} height={100} src={IconDownload} alt="" /> Download
											</button>
										</div>
									</td>
								</tr>
								<tr>
									<td>
										<input type="checkbox" name="" id="" />
									</td>
									<td>Document Name 1</td>
									<td>Json</td>
									<td>Sep 23, 2021</td>
									<td>Sep 20, 2021</td>
									<td>
										<select name="" id="" className={`${style.status} ${style.inactive}`}>
											<option value="">Active</option>
											<option value="" selected={true}>
												Inactive
											</option>
										</select>
									</td>
									<td>
										<div className={style.action_btn}>
											<button type="button">
												<Image width={100} height={100} src={IconEdit} alt="" /> Edit
											</button>
											<button type="button">
												<Image width={100} height={100} src={IconDownload} alt="" /> Download
											</button>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div className={style.empty_data}>
					<div className={style.empty_data_inner}>
						<div className={`${style.ico} ${style.fill} ${style.round}`}>
							<Image width={300} height={300} src={DocumentImage} alt="" />
						</div>
						<h4>No Documents here!</h4>
						<p>There are no documents attached. Click on upload to upload documents</p>
						<div className={`${style.btn_blk} justify-content-center my-5`}>
							<button type="button" className={style.site_btn}>
								Upload
							</button>
						</div>
						<p>JPEG, PDF format only</p>
					</div>
				</div>
			</div>
		</>
	)
}

export default DocumentsRequestsDetail
