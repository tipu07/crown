import React from "react"
import style from "@/styles/scss/web.module.scss"
import Header from "@/components/header/header"
import Banner from "./index/banner"
import Choose from "./index/choose"
import Consult from "./index/consult"

const Index = () => {
	return (
		<>
			<Header pageTitle="Home" />
			<Banner />
			<Choose />
			<Consult />
		</>
	)
}

export default Index
