import React from 'react'
import {
	Container,
	IconWrapper,
	Item,
	Link,
	LogoWrapper,
	Text,
	Wrapper,
	activeStyle
} from './style'
import logo from '../../assets/imgs/logo.png'
import { sidebar } from '../../utils/sidebar'
import { ReactComponent as Chiqish } from '../../assets/icons/logout.svg'

export const Sidebar = () => {
	return (
		<Container>
			<LogoWrapper>
				<LogoWrapper.Img src={logo} alt='logo' />
				<Text>
					<Text.Title>Fast Food</Text.Title>
					<Text.Desc>Online maxsulot sotuvi</Text.Desc>
				</Text>
			</LogoWrapper>

			<Wrapper>
				{sidebar.map(({ id, path, Component, Icon, Title, hiddin }) => {
					return (
						<Item key={id}>
							<Link exact activeStyle={activeStyle} key={id} to={path}>
								<Icon className='icon' />
								{Title}
							</Link>
						</Item>
					)
				})}
			</Wrapper>
			<Wrapper chiqish>
				<IconWrapper>
					<Chiqish />
				</IconWrapper>
				<IconWrapper.Title>Chiqish</IconWrapper.Title>
			</Wrapper>
		</Container>
	)
}

export default Sidebar
