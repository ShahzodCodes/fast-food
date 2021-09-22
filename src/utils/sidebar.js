import Generic from '../page/Generic'

// Icons
import { ReactComponent as buyurtmalar } from '../assets/icons/buyurtmalar.svg'
import { ReactComponent as filial } from '../assets/icons/filial.svg'
import { ReactComponent as hisobot } from '../assets/icons/hisobot.svg'
import { ReactComponent as hodimlar } from '../assets/icons/hodimlar.svg'
import { ReactComponent as kategoriya } from '../assets/icons/kategoriya.svg'
import { ReactComponent as mijozlar } from '../assets/icons/mijozlar.svg'
import { ReactComponent as maxsulotlar } from '../assets/icons/maxsulotlar.svg'
import { ReactComponent as katalog } from '../assets/icons/katalog.svg'

export const sidebar = [
	{
		id: 1,
		path: 'buyurtmalar',
		Title: 'Buyurtmalar',
		Component: Generic,
		hidden: false,
		Icon: buyurtmalar
	},
	{
		id: 2,
		path: 'maxsulotlar',
		Title: 'Maxsulotlar',
		Component: Generic,
		hidden: false,
		Icon: maxsulotlar
	},
	{
		id: 3,
		path: 'kategoriyalar',
		Title: 'Kategoriyalar',
		Component: Generic,
		hidden: false,
		Icon: kategoriya
	},
	{
		id: 4,
		path: 'filiallar',
		Title: 'Filiallar',
		Component: Generic,
		hidden: false,
		Icon: filial
	},
	{
		id: 5,
		path: 'mijozlar',
		Title: 'Mijozlar',
		Component: Generic,
		hidden: false,
		Icon: mijozlar
	},
	{
		id: 6,
		path: 'xisobot',
		Title: 'Xisobot',
		Component: Generic,
		hidden: false,
		Icon: hisobot
	},
	{
		id: 7,
		path: 'hodimlar',
		Title: 'Hodimlar',
		Component: Generic,
		hidden: false,
		Icon: hodimlar
	},
	{
		id: 8,
		path: 'katalog',
		Title: 'Katalog',
		Component: Generic,
		hidden: false,
		Icon: katalog
	}
]
