import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 300px;
	min-width: 300px;
	height: 100%;
	padding: 28px 0 40px 0;
	background-color: white;
	position: sticky;
	top: 0;
`

export const LogoWrapper = styled.div`
	display: flex;
	margin-bottom: 64px;
	padding: 0 24px;
	height: 100px;
	align-items: center;
`
LogoWrapper.Img = styled.img`
	width: 70px;
	height: 70px;
	border-radius: 50%;
	margin-right: 20px;
`
export const Text = styled.div`
	display: flex;
	flex-direction: column;
`

Text.Title = styled.div`
	font-size: 18px;
	line-height: 19px;
	color: #2d3a45;
	font-weight: bold;
`
Text.Desc = styled.div`
	font-size: 14px;
	line-height: 14px;
	color: #2d3a45;
	mix-blend-mode: normal;
	opacity: 0.5;
`
export const Wrapper = styled.div`
	display: flex;
	flex-direction: ${({ chiqish }) => (chiqish ? 'row' : 'column')};
	align-items: ${({ chiqish }) => chiqish && 'center'};
	margin-top: ${({ chiqish }) => chiqish && '100px'};
	/* margin-top: ${({ chiqish }) => chiqish && 'auto'}; */
	cursor: ${({ chiqish }) => chiqish && 'pointer'};
`
export const Item = styled.div`
	display: flex;
	align-items: center;
	height: 48px;
	margin: 10px 0;
`
export const Link = styled(NavLink)`
	width: 100%;
	font-family: SFProDisplay;
	font-size: 17px;
	line-height: 18px;
	color: #2d3a45;
	text-decoration: none;
	display: flex;
	align-items: center;
	margin: 0 24px 0 0px;
	border-radius: 0px 6px 6px 0px;
	transition: all 0.2s;
	.icon {
		margin-right: 20px;
		width: 36px;
		height: 36px;
		padding: 10px;
		background: #f6f6f6;
		border-radius: 6px;
		margin-left: 40px;
	}
`
export const IconWrapper = styled.div`
	width: 36px;
	height: 36px;
	padding: 10px;
	background-color: #f6f6f6;
	border-radius: 6px;
	margin: 0px 10px 0 40px;
`
IconWrapper.Title = styled.div`
	font-family: SFProDisplay;
	font-size: 16px;
	line-height: 19px;
	color: #2d3a45;
`
export const activeStyle = {
	color: 'white',
	background: '#FCB600',
	padding: '10px 0'
}
