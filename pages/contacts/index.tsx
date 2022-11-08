import React from "react"
import Contacts from "./contact";
import Heading from "../../components/Heading";

const contacts = () => {
	return (<>
		<Heading tag='h3' text='All contacts:' />
		<Contacts />
	</>
	)
};

export default contacts;