import React from 'react'
import Done from '../Generic/Done'
import Cancel from '../Generic/Cancel'
import { Container, Wrapper, Info, IconWrapper, Timer, Footer } from './style'
import { BuyurtmaContext } from '../../context/Buyurtmalar/buyurtmalar'

export const ProductCard = ({ value }) => {
	const [card, setBuyurtmaData] = BuyurtmaContext()

	const onCancel = value => {
		let filteredData = card[value.categoria].filter(
			data => data.id !== value.id
		)
		let newData = { ...card, [value.categoria]: filteredData }
		setBuyurtmaData(newData)
	}
	const onDone = value => {
		console.log(value)
	}

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
					<div onClick={() => onCancel(value)}>
						<Cancel />
					</div>
				</Footer>
				<Footer>
					<div>
						<Info.Total>Filial:</Info.Total>
						<Info.Name>
							{value.filial.title} <br /> {value.filial.location}
						</Info.Name>
					</div>
					<div onClick={() => onDone(value)}>
						<Done />
					</div>
				</Footer>
			</Wrapper>
		</Container>
	)
}
export default ProductCard
