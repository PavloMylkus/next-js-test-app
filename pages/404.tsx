import React, { useEffect } from "react"
import styles from '../styles/404.module.scss'
import Heading from "../components/Heading";
import { useRouter } from "next/router";

const style = {
	'color': 'red'
}
const Error = () => {
	const router = useRouter();

	useEffect(() => {
		setTimeout(() => {
			router.push('/');
		}, 3000)
	}, [router])

	return (
		<div className={styles.wrapper}>
			<Heading style={style} tag='h3' text='404 page not found' />
		</div>

	)
};

export default Error;
