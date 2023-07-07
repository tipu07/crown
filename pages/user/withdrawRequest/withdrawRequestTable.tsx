import React from "react"
import style from "@/styles/scss/web.module.scss"
import Image from "next/image"
import { PhotoUser_01 } from "@/components/images"

const WithdrawRequestTable = () => {
	return (
		<>
			<div className={style.table_blk_wrapper}>
				<div className={style.table_blk}>
					<table>
						<thead>
							<tr>
								<th style={{ width: "1rem" }}>
									<input type="checkbox" name="" id="" />
								</th>
								<th>Name</th>
								<th>Amount ID</th>
								<th>Payment Method</th>
								<th>Amount</th>
								<th>Status</th>
								<th style={{ width: "10rem" }}></th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<input type="checkbox" name="" id="" />
								</td>
								<td>
									<div className={style.ico_blk}>
										<div className={`${style.ico} ${style.fill} ${style.round}`}>
											<Image width={200} height={200} src={PhotoUser_01} alt="" />
										</div>
										<div className={style.txt}>
											<div className={style.name}>Devon Lane</div>
											<span>@Devon</span>
										</div>
									</div>
								</td>
								<td>tim.jennings@example.com</td>
								<td>Zelle</td>
								<td>$490.51</td>
								<td>
									<select name="" id="" className={style.input}>
										<option value="">Action</option>
										<option value="">Action</option>
										<option value="">Action</option>
										<option value="">Action</option>
									</select>
								</td>
								<td className="text-center">
									<span className={`${style.status} ${style.red}`}>Reject</span>
								</td>
							</tr>
							<tr>
								<td>
									<input type="checkbox" name="" id="" />
								</td>
								<td>
									<div className={style.ico_blk}>
										<div className={`${style.ico} ${style.fill} ${style.round}`}>
											<Image width={200} height={200} src={PhotoUser_01} alt="" />
										</div>
										<div className={style.txt}>
											<div className={style.name}>Devon Lane</div>
											<span>@Devon</span>
										</div>
									</div>
								</td>
								<td>tim.jennings@example.com</td>
								<td>Zelle</td>
								<td>$490.51</td>
								<td>
									<select name="" id="" className={style.input}>
										<option value="">Action</option>
										<option value="">Action</option>
										<option value="">Action</option>
										<option value="">Action</option>
									</select>
								</td>
								<td className="text-center">
									<span className={`${style.status} ${style.red}`}>Reject</span>
								</td>
							</tr>
							<tr>
								<td>
									<input type="checkbox" name="" id="" />
								</td>
								<td>
									<div className={style.ico_blk}>
										<div className={`${style.ico} ${style.fill} ${style.round}`}>
											<Image width={200} height={200} src={PhotoUser_01} alt="" />
										</div>
										<div className={style.txt}>
											<div className={style.name}>Devon Lane</div>
											<span>@Devon</span>
										</div>
									</div>
								</td>
								<td>tim.jennings@example.com</td>
								<td>Zelle</td>
								<td>$490.51</td>
								<td>
									<select name="" id="" className={style.input}>
										<option value="">Action</option>
										<option value="">Action</option>
										<option value="">Action</option>
										<option value="">Action</option>
									</select>
								</td>
								<td className="text-center">
									<span className={`${style.status} ${style.red}`}>Reject</span>
								</td>
							</tr>
							<tr>
								<td>
									<input type="checkbox" name="" id="" />
								</td>
								<td>
									<div className={style.ico_blk}>
										<div className={`${style.ico} ${style.fill} ${style.round}`}>
											<Image width={200} height={200} src={PhotoUser_01} alt="" />
										</div>
										<div className={style.txt}>
											<div className={style.name}>Devon Lane</div>
											<span>@Devon</span>
										</div>
									</div>
								</td>
								<td>tim.jennings@example.com</td>
								<td>Zelle</td>
								<td>$490.51</td>
								<td>
									<select name="" id="" className={style.input}>
										<option value="">Action</option>
										<option value="">Action</option>
										<option value="">Action</option>
										<option value="">Action</option>
									</select>
								</td>
								<td className="text-center">
									<span className={`${style.status} ${style.red}`}>Reject</span>
								</td>
							</tr>
							<tr>
								<td>
									<input type="checkbox" name="" id="" />
								</td>
								<td>
									<div className={style.ico_blk}>
										<div className={`${style.ico} ${style.fill} ${style.round}`}>
											<Image width={200} height={200} src={PhotoUser_01} alt="" />
										</div>
										<div className={style.txt}>
											<div className={style.name}>Devon Lane</div>
											<span>@Devon</span>
										</div>
									</div>
								</td>
								<td>tim.jennings@example.com</td>
								<td>Zelle</td>
								<td>$490.51</td>
								<td>
									<select name="" id="" className={style.input}>
										<option value="">Action</option>
										<option value="">Action</option>
										<option value="">Action</option>
										<option value="">Action</option>
									</select>
								</td>
								<td className="text-center">
									<span className={`${style.status} ${style.red}`}>Reject</span>
								</td>
							</tr>
							<tr>
								<td>
									<input type="checkbox" name="" id="" />
								</td>
								<td>
									<div className={style.ico_blk}>
										<div className={`${style.ico} ${style.fill} ${style.round}`}>
											<Image width={200} height={200} src={PhotoUser_01} alt="" />
										</div>
										<div className={style.txt}>
											<div className={style.name}>Devon Lane</div>
											<span>@Devon</span>
										</div>
									</div>
								</td>
								<td>tim.jennings@example.com</td>
								<td>Zelle</td>
								<td>$490.51</td>
								<td>
									<select name="" id="" className={style.input}>
										<option value="">Action</option>
										<option value="">Action</option>
										<option value="">Action</option>
										<option value="">Action</option>
									</select>
								</td>
								<td className="text-center">
									<span className={`${style.status} ${style.red}`}>Reject</span>
								</td>
							</tr>
							<tr>
								<td>
									<input type="checkbox" name="" id="" />
								</td>
								<td>
									<div className={style.ico_blk}>
										<div className={`${style.ico} ${style.fill} ${style.round}`}>
											<Image width={200} height={200} src={PhotoUser_01} alt="" />
										</div>
										<div className={style.txt}>
											<div className={style.name}>Devon Lane</div>
											<span>@Devon</span>
										</div>
									</div>
								</td>
								<td>tim.jennings@example.com</td>
								<td>Zelle</td>
								<td>$490.51</td>
								<td>
									<select name="" id="" className={style.input}>
										<option value="">Action</option>
										<option value="">Action</option>
										<option value="">Action</option>
										<option value="">Action</option>
									</select>
								</td>
								<td className="text-center">
									<span className={`${style.status} ${style.red}`}>Reject</span>
								</td>
							</tr>
							<tr>
								<td>
									<input type="checkbox" name="" id="" />
								</td>
								<td>
									<div className={style.ico_blk}>
										<div className={`${style.ico} ${style.fill} ${style.round}`}>
											<Image width={200} height={200} src={PhotoUser_01} alt="" />
										</div>
										<div className={style.txt}>
											<div className={style.name}>Devon Lane</div>
											<span>@Devon</span>
										</div>
									</div>
								</td>
								<td>tim.jennings@example.com</td>
								<td>Zelle</td>
								<td>$490.51</td>
								<td>
									<select name="" id="" className={style.input}>
										<option value="">Action</option>
										<option value="">Action</option>
										<option value="">Action</option>
										<option value="">Action</option>
									</select>
								</td>
								<td className="text-center">
									<span className={`${style.status} ${style.red}`}>Reject</span>
								</td>
							</tr>
							<tr>
								<td>
									<input type="checkbox" name="" id="" />
								</td>
								<td>
									<div className={style.ico_blk}>
										<div className={`${style.ico} ${style.fill} ${style.round}`}>
											<Image width={200} height={200} src={PhotoUser_01} alt="" />
										</div>
										<div className={style.txt}>
											<div className={style.name}>Devon Lane</div>
											<span>@Devon</span>
										</div>
									</div>
								</td>
								<td>tim.jennings@example.com</td>
								<td>Zelle</td>
								<td>$490.51</td>
								<td>
									<select name="" id="" className={style.input}>
										<option value="">Action</option>
										<option value="">Action</option>
										<option value="">Action</option>
										<option value="">Action</option>
									</select>
								</td>
								<td className="text-center">
									<span className={`${style.status} ${style.red}`}>Reject</span>
								</td>
							</tr>
							<tr>
								<td>
									<input type="checkbox" name="" id="" />
								</td>
								<td>
									<div className={style.ico_blk}>
										<div className={`${style.ico} ${style.fill} ${style.round}`}>
											<Image width={200} height={200} src={PhotoUser_01} alt="" />
										</div>
										<div className={style.txt}>
											<div className={style.name}>Devon Lane</div>
											<span>@Devon</span>
										</div>
									</div>
								</td>
								<td>tim.jennings@example.com</td>
								<td>Zelle</td>
								<td>$490.51</td>
								<td>
									<select name="" id="" className={style.input}>
										<option value="">Action</option>
										<option value="">Action</option>
										<option value="">Action</option>
										<option value="">Action</option>
									</select>
								</td>
								<td className="text-center">
									<span className={`${style.status} ${style.red}`}>Reject</span>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</>
	)
}

export default WithdrawRequestTable
