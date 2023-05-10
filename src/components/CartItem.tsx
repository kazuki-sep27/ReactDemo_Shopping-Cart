import { Button, Stack } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import storeItem from "../data/items.json"
import { formatCurrency } from "../utilities/formatCurrency"

type CartItemProps = {
    id: number
    quantity: number
}

export function CartItem({id,quantity} : CartItemProps) {
    const { removeFromCart } = useShoppingCart()

    const item = storeItem.find(item => item.id === id)
    if(item == null) {
        return null
    }
    
    return (
        <Stack direction="horizontal" gap={2} className="d-flex align-item-center">
            <img src={item.imgUrl} style={{width: "125px",height: "75px",objectFit:"cover"}} />
            <div className="me-auto">
                <div>
                    {item.name} { quantity > 0 && 
                    <span className="text-muted" style={{fontSize:"1rem"}}>x{quantity}</span> }    
                    <div className="text-muted" style={{fontSize:"1rem"}}>{formatCurrency(item.price)}</div>
                </div>
            </div>
            <div className="text-muted" style={{fontSize:"2rem"}}>{formatCurrency(item.price*quantity)}</div>
            <Button variant="outline-danger" size="sm" onClick={()=>removeFromCart(id)}>X</Button>
        </Stack>
    )
}