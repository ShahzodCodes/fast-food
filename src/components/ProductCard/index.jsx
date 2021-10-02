import React from 'react'
import Done from '../Generic/Done'
import Cancel from '../Generic/Cancel'
import { Container, Wrapper, Info, IconWrapper, Timer, Footer } from './style'

export const ProductCard = ({ value }) => {
	console.log(value.time.getHours())
	return (
		<Container>
			<Wrapper>
				<Info.OrderID> {value.orderId} </Info.OrderID>
				<IconWrapper>
					<Info.Save />
				</IconWrapper>
				<Timer>
					<Info.Clock />
					<Info.Text>
						{`${value.time.getHours()} : ${value.time.getMinutes()}`}
					</Info.Text>
				</Timer>
			</Wrapper>
			<Wrapper flex>
				<Info>
					<Info.User />
					<div>
						<Info.Name>{value.user.name}</Info.Name>
						<Info.Number>{value.user.phone}</Info.Number>
					</div>
				</Info>
				<Info payme>
					<div>
						<Info.Total top>Umumiy summa</Info.Total>
						<Info.Price>{value.total}</Info.Price>
					</div>
					<Info end={'true'}>
						<Info.PaymeIcon />
						<Info.Payme>Payme</Info.Payme>
					</Info>
				</Info>
			</Wrapper>
			<Wrapper flex last>
				<Footer>
					<div>
						<Info.Total>Operator:</Info.Total>
						<Info.Name>{value.operator.name}</Info.Name>
					</div>
					<Cancel />
				</Footer>
				<Footer>
					<div>
						<Info.Total>Filial:</Info.Total>
						<Info.Name>
							{value.filial.title} <br /> {value.filial.location}
						</Info.Name>
					</div>
					<Done />
				</Footer>
			</Wrapper>
		</Container>
	)
}
export default ProductCard
