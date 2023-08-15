import React from "react"
import style from "@/styles/scss/web.module.scss"
import MessagesContent from "./messagesContent"
import MessagesUsers from "./messagesUsers"

const MessagesDetail = () => {
	return (
		<>
			<div id={style.message_wrapper}>
				<MessagesUsers />
				<MessagesContent />
			</div>
		</>
	)
}

export default MessagesDetail
