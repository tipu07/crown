import Header from "@/components/header/header"
import Link from "next/link"

const Home = () => {
	return (
		<>
			{/* <Header pageTitle="Home" /> */}
			<h1>
				<Link href="/production/login">Go to Login</Link>
			</h1>
		</>
	)
}

export default Home
