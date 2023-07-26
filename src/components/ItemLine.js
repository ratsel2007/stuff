import { Item } from "./item"

export const ItemLine = ({data}) => {
    return <div className="item-line">

        {data.map((item,index) => {
            return <Item key={index} item={item}/>
        })}
    </div>
}