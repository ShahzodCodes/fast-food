import React, { useState, createContext, useContext, useReducer } from 'react'
import { card } from '../../mock/card'

export const BuyurtmalarContext = createContext()
export const BuyurtmaContext = () => useContext(BuyurtmalarContext)

export const Buyurtmalar = ({ children }) => {
	const [buyurtmalaData, setBuyurtmalaData] = useState(card)
	return (
		<BuyurtmalarContext.Provider value={[buyurtmalaData, setBuyurtmalaData]}>
			{children}
		</BuyurtmalarContext.Provider>
	)
}
