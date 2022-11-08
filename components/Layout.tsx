import React, { ReactNode } from "react"
import Footer from "./Footer";
import Header from "./Header";

interface IProps {
	children: ReactNode
}

const Layout = ({ children }: IProps) => {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	)
};

export default Layout;
