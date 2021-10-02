import React, { useState } from 'react'
import ProductCard from '../../ProductCard'
import { Container, Wrapper } from './style'

export const Body = () => {
	return (
		<Container>
			<Wrapper>
				<ProductCard />
			</Wrapper>
			<Wrapper></Wrapper>
			<Wrapper></Wrapper>
			<Wrapper></Wrapper>
		</Container>
	)
}
export default Body
