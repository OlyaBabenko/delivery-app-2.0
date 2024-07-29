import useProduct from "@/hooks/useProduct"
import Image from "next/image"
import { useEffect } from "react";

const ProductItem = ({item, setTotal}) => {
    const {product} = useProduct(item.product);
    useEffect(() => {
        if(product) {
            const productTotal = product.actualPrice * item.quantity;
            setTotal(state => state += productTotal)
        }
    }, [item.quantity, product, setTotal])
    return product && (
        <div className="grid grid-cols-3">
            <Image src={product} alt={product.id}/>
            <span>{product.name}</span>
            <span>{item.quantity}</span>
        </div>
    )
}

export default ProductItem