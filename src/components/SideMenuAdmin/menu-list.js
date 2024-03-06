import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const listLinks = [
    {
        id: 1,
        label: 'Pedidos',
        link: './pedidos',
        icon: ShoppingBagIcon
    },

    {
        id: 2,
        label: 'Produtos',
        link: './produtos',
        icon: StorefrontIcon
    },

    {
        id: 3,
        label: 'Adicionar Produto',
        link: './carrinho',
        icon: AddShoppingCartIcon
    },
]

export default listLinks