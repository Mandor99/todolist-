import React, { useState, createContext } from 'react';

export const itemsContext = createContext('error')

export const ItemsProvider = (props) => {
    const [items, setItems] = useState([
        {id: 1, name: 'Mahmoud', age: 22},
        {id: 2, name: 'Mohamed', age: 59},
        {id: 3, name: 'Mandor', age: 80},
        {id: 4, name: 'shorouk', age: 6}
    ])

    // useEffect(() => {
        const addItem = (newItem) => {
            newItem.id = Math.trunc(Math.random()*1000 + 1)
            setItems([...items, newItem])
        }

        const deleteItem = (id) => {
            // const setItems = items.filter(item => item.id !== id)
            setItems(items.filter((item) => item.id !== id))
        }
    // }, [items])

    return (
        <itemsContext.Provider value={{items, addItem, deleteItem}}>
            {props.children}
        </itemsContext.Provider>
    )
}

// export default ItemsContext
