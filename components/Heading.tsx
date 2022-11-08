import React, { Component } from "react"

interface IHeading {
	tag: any
	text: string
	style?: object
}

const Heading = ({ tag, text, style }: IHeading) => {
	const Tag = tag || 'h1';
	return (<Tag style={style}>{text}</Tag>

	)
};

export default Heading;
