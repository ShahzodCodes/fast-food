import styled from 'styled-components'

import { ReactComponent as save } from '../../assets/icons/save.svg'
import { ReactComponent as clock } from '../../assets/icons/clock.svg'
import { ReactComponent as user } from '../../assets/icons/user.svg'

export const Container = styled.div`
	width: 100%;
	min-height: 375px;
	padding: 0 16px 18px 16px;
	display: flex;
	flex-direction: column;
	background: #ffffff;
	box-shadow: 0px 2px 2px rgba(174, 176, 181, 0.314986);
	border-radius: 6px;
	transition: all 0.3s;
	margin-bottom: 10px;
	:hover {
		/* transform: scale(1.01); */
		box-shadow: 0px 20px 25px rgba(176, 177, 181, 0.432802);
		border-radius: 6px;
	}
`
export const Wrapper = styled.div`
	display: flex;
	flex-direction: ${({ flex }) => flex && 'column'};
	/* width: 234px; */
	width: 100%;
	padding-top: 20px;
	padding-bottom: ${({ last }) => !last && '20px'};
	border-bottom: ${({ last }) => !last && '1px solid #d9d7d7'};
`
export const Info = styled.div`
	display: flex;
	align-items: ${({ payme }) => payme && 'center'};
	margin-left: ${({ end }) => end && 'auto'};
`
Info.OrderID = styled.div`
	margin-right: 20px;
	min-width: 60px;
	max-width: fit-content;
	padding: 0 5px;
	height: 36px;
	background: #20d472;
	border-radius: 18px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-family: SFProDisplay;
	font-size: 14px;
	line-height: 16px;
	letter-spacing: 0.466667px;
	color: #ffffff;
`

export const IconWrapper = styled.div`
	width: 36px;
	height: 36px;
	background: #edeff3;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
`

Info.Save = styled(save)`
	width: 14px;
	height: 16px;
`
Info.Clock = styled(clock)`
	width: 20px;
	height: 20px;
`
Info.Text = styled.div`
	font-family: SFProDisplay;
	font-size: 14px;
	line-height: 16px;
	color: #2d3a45;
	margin-left: 8px;
`
export const Timer = styled.div`
	display: flex;
	margin-left: auto;
	align-items: center;
`

Info.User = styled(user)`
	width: 20px;
	height: 20px;
	margin-right: 22px;
`

Info.Name = styled.div`
	font-family: SFProDisplay;
	font-size: 16px;
	line-height: 20px;
	letter-spacing: 0.533333px;
	color: #2d3a45;
`
Info.Number = styled.div`
	font-family: SFProDisplay;
	font-size: 12px;
	line-height: 18px;
	letter-spacing: 0.4px;
	color: #2d3a45;
	mix-blend-mode: normal;
	opacity: 0.7;
	margin: 5px 0 20px 0;
`
Info.Total = styled.div`
	font-family: SFProDisplay;
	font-size: 13px;
	line-height: 18px;
	letter-spacing: 0.366667px;
	color: #8d9ba8;
	margin-bottom: 5px;
	margin-top: ${({ top }) => top && '20px'};
`
Info.Price = styled.div`
	font-family: SFProDisplay;
	font-weight: bold;
	font-size: 20px;
	line-height: 18px;
	letter-spacing: 0.666667px;
	color: #2d3a45;
`
Info.PaymeIcon = styled.div`
	width: 14px;
	height: 14px;
	border-radius: 50%;
	background: #14e5e4;
`
Info.Payme = styled.div`
	font-family: SFProDisplay;
	font-size: 14px;
	line-height: 18px;
	letter-spacing: 0.466667px;
	color: #2d3a45;
	margin-left: 8px;
`
export const Footer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	margin-bottom: 15px;
`
