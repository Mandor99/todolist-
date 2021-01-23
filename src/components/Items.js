import React, {useContext} from 'react'
import { itemsContext } from '../context/ItemContext'

const Items = () => {
    const {items, deleteItem} = useContext(itemsContext)
    // const showItems = items.map( (item) => (
    //         <div key= {item.id} className= 'item-container'>
    //             {/* <Item key={item.id} item={item}/> */}
    //             <h3>{item.name}</h3>
    //             <p>{item.age}</p>
    //             <button onClick= {() => deleteItem(item.id)} className= 'btn'>DELETE</button>
    //         </div>
        // ) )
    
    return (
        <div>
            <div className= 'items'>
                {items.map((item) =>(
                <div key={item.id} className='item-container'>
                    <h3>{item.name}</h3>
                    <p>{item.age}</p>
                    <button className='btn' onClick={() => deleteItem(item.id)}>DELETE</button>
                </div>))}
            </div>
        </div>
    )
}

export default Items
