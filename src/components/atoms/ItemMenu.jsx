const ItemMenu = ({href, item})=>{
    return(
        <li>
            <a href={href}>{item}</a>
        </li>
    )
}

export default ItemMenu