import styled from 'styled-components'
import { ReactComponent as plus } from '../../../assets/icons/plus.svg'
import { ReactComponent as menuV } from '../../../assets/icons/menuV.svg'

const GetOrder = ({ order }) => {
	switch (order) {
		case 'first':
			return 1
		case 'second':
			return 3
		case 'third':
			return 2
		default:
			return 1
	}
}

export const Container = styled.div`
	display: flex;
	@media (max-width: 1530px) {
		/* order: ${GetOrder}; */
		flex-direction: column;
	}
`
export const Wrapper = styled.div`
	display: flex;
	height: 80px;
	padding: 22px 40px;
	background-color: white;
	align-items: center;
	width: ${({ align }) => (align ? '300px' : '100%')};
	border: 1px solid #e5e5e5;
	@media (max-width: 1530px) {
		order: ${GetOrder};
		flex: 1;
		width: 100%;
		display: ${({ order }) => order === 'third' && 'none'};
	}
`
export const Plus = styled(plus)`
	padding: 11px;
	background: #20d472;
	width: 36px;
	height: 36px;
	min-width: 36px;
	min-height: 36px;
	border-radius: 50%;
	cursor: pointer;
	margin-right: 14px;
`
export const Title = styled.div`
	font-family: SFProDisplay;
	font-weight: bold;
	font-size: 12px;
	line-height: 16px;
	color: #2d3a45;
`

export const Tab = styled.div`
	width: 100%;
	height: 50px;
	display: flex;
	background: #edeff3;
	border-radius: 24px;
	padding: 6px;
	justify-content: space-around;
	align-items: center;
`
Tab.Item = styled.div`
	cursor: pointer;
	font-family: SFProDisplay;
	font-size: 14px;
	line-height: 16px;
	color: #9c9fa2;
	width: 130px;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 36px;
	border-radius: 18px;
	transition: all 0.3s;
	background-color: ${({ active }) => active && 'white'};
	box-shadow: ${({ active }) =>
		active && '0px 2px 2px rgba(174, 176, 181, 0.314986)'};
`

// export const Container = styled.div``

export const Toggle = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100px;
	height: 50px;
	padding: 6px;
	border-radius: 24px;
	background: #edeff3;
`
export const ToggleClone = styled(Toggle)`
	display: none;
	@media (max-width: 1530px) {
		display: flex;
		margin-left: auto;
	}
`

export const MenuV = styled(menuV)`
	width: 14px;
	height: 14px;
`

export const MenuH = styled(menuV)`
	transform: rotate(90deg);
	width: 14px;
	height: 14px;
`
export const IconsWrapper = styled.div`
	padding: 11px;
	display: flex;
	align-items: center;
	justify-content: center;
	background: ${({ active }) => (active ? 'white' : 'transparent')};
	width: 36px;
	height: 36px;
	min-width: 36px;
	min-height: 36px;
	border-radius: 50%;
	cursor: pointer;
	transform-origin: all 0.2s;
`
