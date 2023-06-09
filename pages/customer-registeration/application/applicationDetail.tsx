import React from "react"
import style from "@/styles/scss/web.module.scss"
import Image from "next/image"
import { SaveIcon } from "@/components/images"
import Link from "next/link"

const ApplicationDetail = () => {
	return (
		<>
			<div className={style.tabs_block}>
				<ul className={style.tabs_list}>
					<li>
						<button type="button" className={style.active}>
							Basic Details
						</button>
					</li>
					<li>
						<button type="button">Upload Documents</button>
					</li>
					<li>
						<button type="button">Agreement</button>
					</li>
					<li>
						<button type="button">Payment Details</button>
					</li>
				</ul>
				<button className={style.save_btn}>
					<Image width={100} height={100} src={SaveIcon} alt="" />
					Save as a draft
				</button>
			</div>
			<form action="" method="post" className={style.application_form}>
				<fieldset>
					<div className={style.in_blk}>
						<div className={style.heading}>Office Use</div>
						<div className="row">
							<div className="col-sm-6">
								<div className={style.form_blk}>
									<h6>Affiliate ID</h6>
									<input type="text" name="" id="" className={style.input} placeholder="12312ASA" />
								</div>
							</div>
							<div className="col-sm-6">
								<div className={style.form_blk}>
									<h6>Sales Person</h6>
									<select name="" id="" className={style.input}>
										<option value="">Json</option>
										<option value="">Json</option>
										<option value="">Json</option>
										<option value="">Json</option>
										<option value="">Json</option>
									</select>
								</div>
							</div>
						</div>
					</div>
					<div className={style.in_blk}>
						<div className={style.heading}>Personal Information</div>
						<div className="row">
							<div className="col-sm-6">
								<div className={style.form_blk}>
									<h6>First Name</h6>
									<input type="text" name="" id="" className={style.input} placeholder="" />
								</div>
							</div>
							<div className="col-sm-6">
								<div className={style.form_blk}>
									<h6>Middle Name</h6>
									<input type="text" name="" id="" className={style.input} placeholder="" />
								</div>
							</div>
							<div className="col-sm-6">
								<div className={style.form_blk}>
									<h6>Last Name</h6>
									<input type="text" name="" id="" className={style.input} placeholder="" />
								</div>
							</div>
							<div className="col-sm-6">
								<div className={style.form_blk}>
									<h6>Date of Birth</h6>
									<input type="date" name="" id="" className={style.input} placeholder="" />
								</div>
							</div>
							<div className="col-sm-6">
								<div className={style.form_blk}>
									<h6>Phone Number</h6>
									<input type="text" name="" id="" className={style.input} placeholder="" />
								</div>
							</div>
							<div className="col-sm-6">
								<div className={style.form_blk}>
									<h6>Address 02</h6>
									<input type="text" name="" id="" className={style.input} placeholder="" />
								</div>
							</div>
							<div className="col-sm-6">
								<div className={style.form_blk}>
									<h6>Address 01</h6>
									<input type="text" name="" id="" className={style.input} placeholder="" />
								</div>
							</div>
							<div className="col-sm-6">
								<div className={style.form_blk}>
									<h6>State/Province</h6>
									<input type="text" name="" id="" className={style.input} placeholder="" />
								</div>
							</div>
							<div className="col-sm-6">
								<div className={style.form_blk}>
									<h6>Country</h6>
									<select name="" id="" className={style.input}>
										<option value="">United States of America</option>
										<option value="">United States of America</option>
										<option value="">United States of America</option>
										<option value="">United States of America</option>
										<option value="">United States of America</option>
									</select>
								</div>
							</div>
							<div className="col-sm-6">
								<div className={style.form_blk}>
									<h6>Postcode/Zip</h6>
									<input type="text" name="" id="" className={style.input} placeholder="" />
								</div>
							</div>
							<div className="col-sm-6">
								<div className={style.form_blk}>
									<h6>Town/City</h6>
									<select name="" id="" className={style.input}>
										<option value="">Las Vegas</option>
										<option value="">Las Vegas</option>
										<option value="">Las Vegas</option>
										<option value="">Las Vegas</option>
										<option value="">Las Vegas</option>
									</select>
								</div>
							</div>
							<div className="col-sm-12">
								<div className={style.form_blk}>
									<h6>Customer Notes</h6>
									<textarea name="" id="" rows={6} className={style.input} placeholder="Write Something"></textarea>
								</div>
							</div>
						</div>
					</div>
					<div className={`${style.btn_blk} justify-content-end mt-5`}>
						<button type="reset" className={`${style.site_btn} ${style.blank} ${style.stroke}`}>
							Cancel
						</button>
						<button type="button" className={style.site_btn}>
							Next
						</button>
					</div>
				</fieldset>
				<fieldset>
					<div className={style.in_blk}>
						<div className={style.heading}>Social Security</div>
						<div className="row">
							<div className="col-sm-6">
								<div className={style.form_blk}>
									<h6>Social Security Number</h6>
									<input type="text" name="" id="" className={style.input} placeholder="12312ASA" />
								</div>
							</div>
							<div className="w-100"></div>
							<div className="col-sm-6">
								<div className={style.form_blk}>
									<h6>Social Security Number Photo</h6>
									<div className={style.upload_blk}>
										<p>Drop your file here or upload manually</p>
										<button type="button" className={`${style.site_btn} ${style.blank} ${style.stroke}`}>
											Upload
										</button>
									</div>
								</div>
							</div>
							<div className="col-sm-6">
								<div className={style.form_blk}>
									<h6>Upload DL/ID Card</h6>
									<div className={style.upload_blk}>
										<p>Drop your file here or upload manually</p>
										<button type="button" className={`${style.site_btn} ${style.blank} ${style.stroke}`}>
											Upload
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className={style.in_blk}>
						<div className={style.heading}>Credit Karma</div>
						<div className={`${style.txt} fw_500 mb-4`}>
							<p>
								It should always be reference as <Link href="/">CreditKarma.com</Link>
							</p>
						</div>
						<div className="row">
							<div className="col-sm-6">
								<div className={style.form_blk}>
									<h6>Credit Karma username</h6>
									<input type="text" name="" id="" className={style.input} placeholder="" />
								</div>
							</div>
							<div className="col-sm-6">
								<div className={style.form_blk}>
									<h6>Credit Karma password</h6>
									<input type="text" name="" id="" className={style.input} placeholder="" />
								</div>
							</div>
						</div>
					</div>
					<div className={style.in_blk}>
						<div className={style.heading}>Credit Karma</div>
						<div className={`${style.txt} fw_500 mb-4`}>
							<p>
								Go to <Link href="/">annualcreditreport.com</Link> and retrieve
							</p>
							<p className="small">
								Transunion credit report <br />
								Equifax credit report <br />
								Experian credit report
							</p>
						</div>
						<div className="row">
							<div className="col-sm-4">
								<div className={style.form_blk}>
									<h6>Transunion credit report</h6>
									<div className={style.upload_blk}>
										<p>Drop your file here or upload manually</p>
										<button type="button" className={`${style.site_btn} ${style.blank} ${style.stroke}`}>
											Upload
										</button>
									</div>
								</div>
							</div>
							<div className="col-sm-4">
								<div className={style.form_blk}>
									<h6>Equifax credit report</h6>
									<div className={style.upload_blk}>
										<p>Drop your file here or upload manually</p>
										<button type="button" className={`${style.site_btn} ${style.blank} ${style.stroke}`}>
											Upload
										</button>
									</div>
								</div>
							</div>
							<div className="col-sm-4">
								<div className={style.form_blk}>
									<h6>Equifax credit report</h6>
									<div className={style.upload_blk}>
										<p>Drop your file here or upload manually</p>
										<button type="button" className={`${style.site_btn} ${style.blank} ${style.stroke}`}>
											Upload
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className={style.in_blk}>
						<div className={style.heading}>Equifax</div>
						<div className={`${style.txt} fw_500 mb-4`}>
							<p>
								It Should always be reference as <Link href="/">Equifax.com</Link>
							</p>
						</div>
						<div className="row">
							<div className="col-sm-6">
								<div className={style.form_blk}>
									<h6>Equifax username</h6>
									<input type="text" name="" id="" className={style.input} placeholder="" />
								</div>
							</div>
							<div className="col-sm-6">
								<div className={style.form_blk}>
									<h6>Equifax password</h6>
									<input type="text" name="" id="" className={style.input} placeholder="" />
								</div>
							</div>
						</div>
					</div>
					<div className={style.in_blk}>
						<div className={style.heading}>Experian</div>
						<div className={`${style.txt} fw_500 mb-4`}>
							<p>
								It Should always be reference as <Link href="/">Equifax.com</Link>
							</p>
						</div>
						<div className="row">
							<div className="col-sm-6">
								<div className={style.form_blk}>
									<h6>Equifax username</h6>
									<input type="text" name="" id="" className={style.input} placeholder="" />
								</div>
							</div>
							<div className="col-sm-6">
								<div className={style.form_blk}>
									<h6>Equifax password</h6>
									<input type="text" name="" id="" className={style.input} placeholder="" />
								</div>
							</div>
							<div className="col-sm-6">
								<div className={style.form_blk}>
									<h6>Experian Pin</h6>
									<input type="text" name="" id="" className={style.input} placeholder="" />
								</div>
							</div>
							<div className="col-sm-6">
								<div className={style.form_blk}>
									<h6>Experian Security Answer</h6>
									<input type="text" name="" id="" className={style.input} placeholder="" />
								</div>
							</div>
							<div className="col-sm-6">
								<div className={style.form_blk}>
									<h6>Upload Experian document</h6>
									<div className={style.upload_blk}>
										<p>Drop your file here or upload manually</p>
										<button type="button" className={`${style.site_btn} ${style.blank} ${style.stroke}`}>
											Upload
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className={`${style.btn_blk} justify-content-end mt-5`}>
						<button type="reset" className={`${style.site_btn} ${style.blank} ${style.stroke}`}>
							Cancel
						</button>
						<button type="button" className={style.site_btn}>
							Next
						</button>
					</div>
				</fieldset>
				<fieldset>
					<div className={style.in_blk}>
						<div className={style.heading}>Customer Details</div>
						<div className={style.customer_details}>
							<div className={style.title}>Jason Crown</div>
							<p>
								1234 Main Street <br />
								Santa Monica, California 90401
							</p>
							<div className={style.submitted}>
								<span>Submitted Date :</span> Jan, 17 2022
							</div>
							<div className={style.small}>Bob Winebrenner</div>
						</div>
					</div>
					<div className={style.in_blk}>
						<div className={style.heading}>The following pages contain</div>
						<div className={style.page_contain}>
							<ol>
								<li>Credit Repair Service Agreement</li>
								<li>Authorisation for Credit Repair Action</li>
								<li>Consumer Credit File Rights (CROA Disclosure)</li>
								<li>Right Of Cancellation Notice</li>
								<li>State-Specific Disclosures (add if applicable)</li>
							</ol>
						</div>
					</div>
					<div className={style.in_blk}>
						<div className={style.heading}>Credit Repair Service Agreement for Json Crown</div>
						<div className={style.svc_agreement}>
							<p>
								I, Json Crown, hereby enter into the following agreement with Crown Credit Pro. <br />
								Credit Repair Service Agreement for Json Crown
							</p>
							<ul>
								<li>To evaluate Customer’s current credit reports as listed with applicable credit reporting agencies and to identify inaccurate, erroneous, false, or obsolete information.</li>
								<li>To advise Customer as to the necessary steps to be taken on the part of Customer in conjunction with Our Company, to dispute any inaccurate, erroneous, false or obsolete information contained in the customer’s credit reports.</li>
								<li>To prepare all necessary correspondence in dispute of inaccurate, erroneous, false, or obsolete information in customer’s credit reports.</li>
								<li>To review credit profile status from the credit reporting agencies such as: Experian, Equifax and Transunion. Consulting, coaching, and monitoring services are conducted by personal meetings, webinars, video conferencing, telephone, email, or by any other form of communication during normal business hours.</li>
								<li>In exchange, I, Json Crown, agree to pay the following fees as outlined in the following fee schedule:</li>
							</ul>
							<br />
							<div className="d-flex align-items-center">
								<h4 className="my-0 me-5">$2000</h4>
								<p className="my-0">At signup for document processing</p>
							</div>
							<br />
							<p>Authorization for Credit Repair Action</p>
							<ol>
								<li>I, Json Crown, hereafter known as “client” hereby authorize, Crown Credit Pro, to make, receive, sign, endorse, execute, acknowledge, deliver, and possess such applications, correspondence, contracts, or agreements, as necessary to improve my credit. Such instruments in writing of whatever and nature shall only be effective for any or all of the three credit reporting agencies which are TransUnion, Experian, Equifax, and any other reporting agencies or creditor’s listed, as may be necessary or proper in the exercise of the rights and powers herein granted.</li>
								<li>This authorization may be revoked by the undersigned at any time by giving written notice to the party authorised herein. Any activity made prior to revocation in reliance upon this authorization shall not constitute a breach of rights of the client. If not earlier revoked, this authorization will automatically expire twelve months from the date of signature.</li>
								<li> The party named above to receive the information is not authorised to make any further release or disclosure of the information received. This authorization does not authorize the release or disclosure of any information except as provided herein.</li>
								<li> I grant to Crown Credit Pro, authority to do, take, and perform, all acts and things whatsoever requisite, proper, or necessary to be done, in the exercise of repairing my credit with the three credit reporting agencies, which are TransUnion, Experian, Equifax and any other reporting agencies or creditor’s listed, as fully for all intents and purposes as I might or could do if personally present.</li>
								<li>I hereby release Crown Credit Pro, from all and all matters of actions, causes of action, suits, proceedings, debts, dues, contracts, judgments, damages, claims, and demands whatsoever in law or equity, for or by reason of any matter, cause, or thing whatsoever as based on the circumstances of this contract.</li>
							</ol>
							<br />
							<br />
							<p>
								Consumer Credit File Rights Under State and Federal Law <br />
								You have a right to dispute inaccurate information in your credit report by contacting the credit bureau directly. However, neither you nor a credit repair company or credit repair organization has the right to have accurate, current and verifiable information removed from your credit report. The credit bureau must remove accurate, negative information from your report only if it is over 7 years old. Bankruptcy information can be reported up to 10 years.
							</p>
							<p>You have a right to obtain a copy of your credit report from a credit bureau. You may be charged a reasonable fee. There is no fee, however, if you have been turned down for credit, employment, insurance, or a rental dwelling because of information in your credit report within the preceding 60 days. The credit bureau must provide someone to help you interpret the information in your credit file. You are entitled to receive a free copy of your credit report if you are unemployed and intend to apply for employment in the next 60 days, if you are a recipient of public welfare assistance, or if you have reason to believe that there is inaccurate information in your credit report due to fraud.</p>
							<p>You have a right to sue a credit repair organization that violated the Credit Repair Organization Act. This law prohibits deceptive practices by credit repair organizations.</p>
							<p>You have the right to cancel your contract with any credit repair organization for any reason within 3 business days from the date you signed it.</p>
							<p>Credit bureaus are required to follow reasonable procedures to ensure that the information they report is accurate. However, mistakes may occur.</p>
							<p>You may, on your own, notify a credit bureau in writing that you dispute that accuracy of information in your credit file. The credit bureau must then reinvestigate and modify or remove inaccurate or incomplete information. The credit bureau may not charge any fee for this service. Any pertinent information and copies of all documents you have concerning an error should be given to the credit bureau.</p>
							<p>If the credit bureau’s reinvestigation does not resolve the dispute to your satisfaction, you may send a brief statement to the credit bureau to be kept in your file, explaining why you think the record is inaccurate. The credit bureau must include a summary of your statement about disputed information with any report it issues about you.</p>
							<p>The Federal Trade Commission regulates credit bureaus and credit repair organizations. For more information contact: The Public Reference Branch Federal Trade Commission Washington, D.C. 20580.</p>
							<p>
								Notice of Right to Cancel <br /> “You may cancel this contract, without any penalty or obligation, at any time before midnight of the 3rd day which begins after the date the contract is signed by you.
							</p>
							<p>“To cancel this contract, mail or deliver a signed, dated copy of this cancellation notice, or any other written notice to Crown Credit Pro, before midnight on the 3rd day which begins after the date you have signed this contract stating “I hereby cancel this transaction, (date) (purchaser’s signature).”</p>
							<p>Please acknowledge your receipt of this notice by electronically signing the form indicated below.</p>
							<p>Acknowledgment of Receipt of Notice</p>
							<p>I, Json Crown, hereby acknowledge with my digital signature, receipt of the Notice of Right to Cancel. I confirm the fact that I agree and understand what I am signing, and acknowledge that I have received a copy of my Consumer Credit File Rights. Digital Signatures: In 2000, the U.S. Electronic Signatures in Global and National Commerce (ESIGN) Act established electronic records and signatures as legally binding, having the same legal effects as traditional paper documents and handwritten signatures. Read more at the FTC web site:</p>
							<br />
							<br />
							<h4>Client Signature</h4>
							<p className="h6 fw_400">Please sign your application with a mouse or upload signature</p>
							<div className="row">
								<div className="col-sm-4">
									<div className={style.form_blk}>
										<div className={style.upload_blk}></div>
									</div>
								</div>
								<div className="col-sm-4">
									<div className={style.form_blk}>
										<div className={style.upload_blk}>
											<p>Drop your file here or upload manually</p>
											<button type="button" className={`${style.site_btn} ${style.blank} ${style.stroke}`}>
												Upload
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className={style.in_blk}>
						<div className={style.heading}>Identity IQ Login</div>
						<div className="row">
							<div className="col-sm-6">
								<div className={style.form_blk}>
									<h6>User Name</h6>
									<input type="text" name="" id="" className={style.input} placeholder="" />
								</div>
							</div>
							<div className="col-sm-6">
								<div className={style.form_blk}>
									<h6>Password</h6>
									<input type="text" name="" id="" className={style.input} placeholder="" />
								</div>
							</div>
						</div>
						<div className={`${style.btn_blk} justify-content-end mt-5`}>
							<button type="button" className={`${style.site_btn} ${style.blank} ${style.stroke} ${style.transparent}`}>
								Fetch Files
							</button>
						</div>
					</div>
					<div className={style.in_blk}>
						<div className={style.heading}>Credit Report Summary</div>
						<p className="h6 fw_400">Customer Statement</p>
						<div className={style.credit_table}>
							<table>
								<tbody>
									<tr>
										<th>TransUnion</th>
										<td>#HK#EFCRA EXTENDED FRAUD ALERT: ACTION MAY BE REQUIRED UNDER FCRA BEFORE OPENING OR MODIFYING AN ACCOUNT. CONTACT CONSUMER AT (334) 232-5232 (470) 441-6972</td>
									</tr>
									<tr>
										<th>Experian</th>
										<td>06& 05-29-21 0000000 ID FRAUD VICTIM ALERT FRAUDULENT APPLICATIONS MAY BE SUBMITTED IN MY NAME OR MY IDENTITY MAY HAVE BEEN USED WITHOUT MY CONSENT TO FRAUDULENTLY OBTAIN GOODS OR SERVICES. DO NOT EXTEND CREDIT WITHOUT FIRST CONTACTING ME PERSONALLY AND VERIFYING ALL APPLICATION INFORMATION AT DAY 334- 232-5232 OR EVENING 470-441-6972. THIS VICTIM ALERT WILL BE MAINTAINED FOR SEVEN YEARS BEGINNING 05-29-21.</td>
									</tr>
									<tr>
										<th>Equifax</th>
										<td>FTC IDENTITY THEFT REPORT WAS FAXED ON 03/09/2021</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<div className={`${style.btn_blk} justify-content-end mt-5`}>
						<button type="reset" className={`${style.site_btn} ${style.blank} ${style.stroke}`}>
							Cancel
						</button>
						<button type="button" className={style.site_btn}>
							Next
						</button>
					</div>
				</fieldset>
				<fieldset className={style.worked}>
					<div className={style.in_blk}>
						<div className={style.heading}>CCP Notice</div>
						<div className={style.ccp_notice}>
							<p>CROWN CREDIT PRO NOTICE</p>
							<br />
							<p>WELCOME TO THE CROWN CREDIT PRO FAMILY, YOU HAVE FINALLY TAKEN THAT STEP TO FIX YOUR CREDIT AND TAKE CONTROL OF YOUR LIFE. WE ARE GRATEFUL FOR YOUR TRUST IN US, WE ASSURE YOU THAT WE WILL GIVE OUR-BEST.</p>
							<br />
							<p>FOR US IT&#39;S IMPORTANT OUR CUSTOMERS ARE INFORMED ABOUT OUR PROCESS, THAT IS WHY WE CREATED A NOTICE WITH OUR POLICES, RECOMMENDATIONS AND-ADDITIONAL INFORMATION.</p>
							<br />
							<p>LET’S BEGIN</p>
							<br />
							<p>HAVING A GOOD CREDIT IS A GOAL FOR MANY OF US, OFTEN BECAUSE OUR CREDITS REPORTS AND CREDIT SCORES ARE HIGHLY INFLUENTIAL TO FINANCIAL DECISIONS THAT IMPACT OUR LIVES. AND IT BECOMES MORE CRUCIAL WHEN IT HAS A NEGATIVE IMPACT.</p>
							<br />
							<p>WE ARE ABLE TO HELP YOU TO IMPROVE YOUR CREDIT SCORE AS OUR SERVICES ARE DESIGNED TO REMOVE INACCURATE OR UNVERIFIABLE INFORMATION FROM YOUR CREDIT REPORT, CREATING A MORE FAVORABLE INFLUENCE ON YOUR CREDIT LIFE.</p>
							<br />
							<p>WE WANT TO LET YOU KNOW THAT WE ARE RESPONSIBLE FOR AND GUARANTEE THE REMOVAL OF 80% TO 100% OF THE NEGATIVE ACCOUNTS, IT MEANS ANYTHING THAT HAS BEEN LATE OR IN A NEGATIVE STANDING AS LATE PAYMENTS, CHARGE OFFS, REPOSSESSIONS, BANKRUPTCY, HARD INQUIRIES AND STUDENT LOANS.</p>
							<br />
							<p>KEEP IN MIND, YOU ARE STILL RESPONSIBLE FOR THIS DEBT, IT’S ONLY REMOVED FROM YOUR CREDIT PROFILE FOR YOU TO BUILD AND ACHIEVE GREAT CREDIT. </p>
							<br />
							<p>REMEMBER WE OFFER A SERVICE THAT NOONE CAN OFFER, HOWEVER, WE NEED YOUR HELP TO ACHIEVE THE BEST RESULTS, THAT IS WHY WE HAVE LISTED SOME NECESSARY RECOMMENDATIONS THAT WE HOPE YOU WILL FOLLOW, LET’S NOT FORGET THAT THESE RECOMMENDATIONS ARE SUBJECT TO THE 90 BUSINESS DAY GUARANTEE.</p>
							<br />
							<p>1. WE RECOMMEND YOU REDUCE ALL INTERACTION WITH YOUR CREDITOR TO AVOID TAKING ANY ACTION ON THE NEGATIVE ACCOUNTS WE ARE TRYING TO REMOVE FROM YOUR CREDIT REPORT.</p>
							<br />
							<p>
								2. WE PREFER THAT WHILE THE DISPUTE PROCESS IS ACTIVE YOU AVOID APPLYING FOR NEW CREDIT. WE WILL ADVISE YOU ON THE RIGHT TIME TO TAKE THIS ACTION OR DECISION. <br /> IF YOU STILL DECIDE TO TAKE THIS STEP AND ACQUIRE A NEW INQUIRY, WE WILL CHARGE 20 DOLLARS PER INQUIRY / PER BUREAU.
							</p>
							<br />
							<p>3. WE NEED CONTINUOUS ACCESS TO YOUR CREDIT REPORT, THAT IS WHY WE ASK YOU NOT TO CHANGE THE PASSWORD AT ANY TIME. HOWEVER, IF FOR ANY REASON YOU MUST CHANGE IT, PLEASE NOTIFY US AS SOON AS POSSIBLE OTHERWISE WE CANNOT WORK ON THE FILE UNTIL WE </p>
							<br />
							<p>4. UNFORTUNATELY WE CANNOT TAKE ACTION ON THE AGE OF YOUR CREDIT PROFILE, THE ACCOUNTS WITH HIGH CREDIT USAGE, AND THE NUMBER OF ACCOUNTS REPORTING YOUR CREDIT PROFILE.THOSE ARE THINGS THAT MUST BE RESOLVED VIA AUTHORIZED USER AND PRIMARY ACCOUNTS</p>
							<br />
							<p>YOU CAN ALSO TAKE STEPS TO BUILD YOUR CREDIT IN THE LONG TERM, FOR EXAMPLE</p>
							<ol>
								<li>MAKE EVERY EFFORT TO PREVENT LATE PAYMENTS </li>
								<li> TRY TO STAY WITHIN 30% OF YOUR CREDIT LIMIT</li>
								<li> TO PREVENT UNNECESSARY HARD CREDIT INQUIRIES, AVOID APPLYING FOR NEW CREDIT UNLESS ITS ABSOLUTELY NECESSARY.</li>
							</ol>
						</div>
						<p>&nbsp;</p>
						<div className="row">
							<div className="col-sm-6">
								<div className={style.form_blk}>
									<h6>Enter Your Name</h6>
									<input type="text" name="" id="" className={style.input} placeholder="" />
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-sm-8">
								<div className={style.vid_blk}>
									<button type="button">VIDEO</button>
								</div>
								<h5>Watch completed video to understand what we do</h5>
								<p className="h5 fw_500 opacity-50">2:36mins</p>
							</div>
						</div>
						<p>&nbsp;</p>
						<h4>Client Signature</h4>
						<p className="h6 fw_400">Please sign your application with a mouse or upload signature</p>
						<div className="row">
							<div className="col-sm-4">
								<div className={style.form_blk}>
									<div className={style.upload_blk}></div>
								</div>
							</div>
							<div className="col-sm-4">
								<div className={style.form_blk}>
									<div className={style.upload_blk}>
										<p>Drop your file here or upload manually</p>
										<button type="button" className={`${style.site_btn} ${style.blank} ${style.stroke}`}>
											Upload
										</button>
									</div>
								</div>
							</div>
							<div className="col-sm-12">
								<div className={style.lbl_btn}>
									<input type="checkbox" name="confirm_term" id="confirm_term" />
									<label htmlFor="confirm_term">
										<span className="small">By entering name, my signature and clicking submit below,</span> <br /> <span className="h5">I confirm that I have read, understand and have agreed to all terms.</span>
									</label>
								</div>
							</div>
						</div>
					</div>
					<div className={`${style.btn_blk} justify-content-end mt-5`}>
						<button type="reset" className={`${style.site_btn} ${style.blank} ${style.stroke}`}>
							Cancel
						</button>
						<button type="button" className={style.site_btn}>
							Next
						</button>
					</div>
				</fieldset>
			</form>
		</>
	)
}

export default ApplicationDetail
