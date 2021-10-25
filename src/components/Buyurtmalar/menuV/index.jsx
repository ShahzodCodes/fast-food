import React from 'react'
// import { card } from '../../../mock/card'
import ProductCard from '../../ProductCard'
import { Container, Wrapper } from './style'
import { BuyurtmaContext } from '../../../context/Buyurtmalar/buyurtmalar'

export const Body = () => {
	const [card] = BuyurtmaContext()
	return (
		<Container>
			<h2>MenuV</h2>
			<Wrapper>
				{card.yangi.map(value => (
					<ProductCard key={value.id} value={value} />
				))}
			</Wrapper>
			<Wrapper>
				{card.qabul.map(value => (
					<ProductCard key={value.id} value={value} />
				))}
			</Wrapper>
			<Wrapper>
				{card.jonatilgan.map(value => (
					<ProductCard key={value.id} value={value} />
				))}
			</Wrapper>
			<Wrapper>
				{card.yopilgan.map(value => (
					<ProductCard key={value.id} value={value} />
				))}
			</Wrapper>
		</Container>
	)
}
export default Body
