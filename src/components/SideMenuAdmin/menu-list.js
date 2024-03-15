import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import paths from '../../constants/paths';

const listLinks = [
    {
        id: 1,
        label: 'Pedidos',
        link: paths.Orders,
        icon: ShoppingBagIcon
    },

    {
        id: 2,
        label: 'Produtos',
        link: paths.ListProducts,
        icon: StorefrontIcon
    },

    {
        id: 3,
        label: 'Adicionar Produto',
        link: paths.NewProduct,
        icon: AddShoppingCartIcon
    }
]

export default listLinks