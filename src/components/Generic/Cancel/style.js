import styled from 'styled-components'

import { ReactComponent as cancel } from '../../../assets/icons/cancel.svg'

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 54px;
	min-width: 54px;
	min-height: 54px;
	height: 54px;
	background: #edeff3;
	border-radius: 50%;
	cursor: pointer;
`

export const Cancel = styled(cancel)`
	width: 42px;
	height: 42px;
	padding: 12px;
	background: #ffffff;
	box-shadow: 0px 2px 2px rgba(174, 176, 181, 0.314986);
	border-radius: 20px;
`
