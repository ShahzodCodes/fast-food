import React, { useState } from 'react'
import { Container, Wrapper, Info, IconWrapper, Timer } from './style'

export const ProductCard = () => {
	return (
		<Container>
			<Wrapper>
				<Info.OrderID>12345</Info.OrderID>
				<IconWrapper>
					<Info.Save />
				</IconWrapper>
				<Timer>
					<Info.Clock />
					<Info.Text>12:45</Info.Text>
				</Timer>
			</Wrapper>
			<Wrapper flex>
				<Info>
					<Info.User />
					<div>
						<Info.Name>Shahzod Yoqubov</Info.Name>
						<Info.Number>+998 (99) 123 45 67</Info.Number>
					</div>
				</Info>
				<Info>
					<div>
						<Info.Total>Umumiy summa</Info.Total>
						<Info.Price>40 000 UZS</Info.Price>
					</div>
					<Info end>
						<Info.PaymeIcon />
						<Info.Payme>Payme</Info.Payme>
					</Info>
				</Info>
			</Wrapper>
			<Wrapper></Wrapper>
		</Container>
	)
}
export default ProductCard
