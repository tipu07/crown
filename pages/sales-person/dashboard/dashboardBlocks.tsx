import React from "react"
import style from "@/styles/scss/web.module.scss"
import Image from "next/image"
import { BlockApplicationIcon, BlockCallIcon, BlockChartIcon, BlockDollarIcon, BlockDraftsIcon, BlockThumbsUpIcon, BlockUserIcon } from "@/components/images"

const DashboardBlocks = () => {
	return (
		<>
			<div className="row">
				<div className="col-md-3">
					<div className={style.instalment_blk}>
						<div className={style.ico}>
							<Image width={100} height={100} src={BlockCallIcon} alt="" />
						</div>
						<div className={style.txt}>
							<div className={style.price}>50</div>
							<span>Target Call</span>
						</div>
					</div>
				</div>
				<div className="col-md-3">
					<div className={style.instalment_blk}>
						<div className={style.ico}>
							<Image width={100} height={100} src={BlockUserIcon} alt="" />
						</div>
						<div className={style.txt}>
							<div className={style.price}>6</div>
							<span>Today’s Follow Up</span>
						</div>
					</div>
				</div>
				<div className="col-md-3">
					<div className={style.instalment_blk}>
						<div className={style.ico}>
							<Image width={100} height={100} src={BlockThumbsUpIcon} alt="" />
						</div>
						<div className={style.txt}>
							<div className={style.price}>19</div>
							<span>Intrested</span>
						</div>
					</div>
				</div>
				<div className="col-md-3">
					<div className={style.instalment_blk}>
						<div className={style.ico}>
							<Image width={100} height={100} src={BlockDraftsIcon} alt="" />
						</div>
						<div className={style.txt}>
							<div className={style.price}>00</div>
							<span>Drafts</span>
						</div>
					</div>
				</div>
				<div className="col-md-3">
					<div className={style.instalment_blk}>
						<div className={style.ico}>
							<Image width={100} height={100} src={BlockChartIcon} alt="" />
						</div>
						<div className={style.txt}>
							<div className={style.price}>$7000</div>
							<span>Total Sale</span>
						</div>
					</div>
				</div>
				<div className="col-md-3">
					<div className={style.instalment_blk}>
						<div className={style.ico}>
							<Image width={100} height={100} src={BlockDollarIcon} alt="" />
						</div>
						<div className={style.txt}>
							<div className={style.price}>$300</div>
							<span>Commission Earned</span>
						</div>
					</div>
				</div>
				<div className="col-md-3">
					<div className={style.instalment_blk}>
						<div className={style.ico}>
							<Image width={100} height={100} src={BlockApplicationIcon} alt="" />
						</div>
						<div className={style.txt}>
							<div className={style.price}>11</div>
							<span>Application Filled</span>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default DashboardBlocks
