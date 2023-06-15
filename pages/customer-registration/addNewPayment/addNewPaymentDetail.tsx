import React from "react"
import style from "@/styles/scss/web.module.scss"
import Image from "next/image"
import { CashAppIcon, ZelleIcon } from "@/components/images"

const AddNewPaymentDetail = () => {
	return (
		<>
			<div className={style.in_blk}>
				<div className={style.heading}>Payment Method</div>
				<div className={style.payment_method_blk}>
					<div className="row">
						<div className="col-md-6">
							<h5 className={style.text_prime}>How Zelle Works?</h5>
							<div className={style.payment_card}>
								<input type="radio" name="payment_type" id="payment_type_zelle" checked={true} />
								<div className={style.payment_card_inner}>
									<div className={style.checkbox}></div>
									<div className={style.txt}>
										<div className={style.icon}>
											<Image width={200} height={200} src={ZelleIcon} alt="" />
										</div>
										<span>Send payment to crowncreditpro@gmail.com</span>
									</div>
								</div>
							</div>
							<p>Please use your first and last name in the memo. Please do not put “Credit Repair” in the memo</p>
						</div>
						<div className="col-md-6">
							<h5 className={style.text_prime}>How Cash app Works?</h5>
							<div className={style.payment_card}>
								<input type="radio" name="payment_type" id="payment_type_cash_app" />
								<div className={style.payment_card_inner}>
									<div className={style.checkbox}></div>
									<div className={style.txt}>
										<div className={style.icon}>
											<Image width={200} height={200} src={CashAppIcon} alt="" />
										</div>
										<span>Send payment to @crowncreditpro</span>
									</div>
								</div>
							</div>
							<p>Please use your first and last name in the memo. Please do not put “Credit Repair” in the memo</p>
						</div>
					</div>
				</div>
				<div className="pt-5"></div>
				<div className="row">
					<div className="col-sm-6">
						<div className={style.form_blk}>
							<h6>Enter Zelle Username</h6>
							<input type="text" name="" id="" className={style.input} placeholder="" />
						</div>
					</div>
					<div className="col-sm-6">
						<div className={style.form_blk}>
							<h6>Enter Cashapp Username</h6>
							<input type="text" name="" id="" className={style.input} placeholder="" />
						</div>
					</div>
					<div className="col-sm-6">
						<div className={style.form_blk}>
							<h6>Amount to Deposit</h6>
							<input type="text" name="" id="" className={style.input} placeholder="" />
						</div>
					</div>
					<div className="col-sm-6">
						<div className={style.form_blk}>
							<h6>Amount to Deposit</h6>
							<input type="text" name="" id="" className={style.input} placeholder="" />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default AddNewPaymentDetail
