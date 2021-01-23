import React from 'react'
import Items from './components/Items'
import Form from './components/Form'
import {ItemsProvider} from './context/ItemContext'
const App = () => {
  // const [items, addItem, deleteItem] = useContext(itemsContext)
  // state = {
  //   items: [
  //     {id: 1, name: 'Mahmoud', age: 22},
  //     {id: 2, name: 'Mohamed', age: 59},
  //     {id: 3, name: 'Mandor', age: 80},
  //     {id: 4, name: 'shorouk', age: 6}
  //   ]
  // }
  // const addItem = (newItem) => {
  //   newItem.id = Math.trunc(Math.random()*1000 + 1)
  //   // this.setState({
  //   //   items: [...this.state.items, newItem]
  //   // })
  // }
  // const deleteItem = (id) => {
  //   const setItems = this.state.items.filter(item => item.id !== id)
  //   this.setState({items: setItems})
  // }
  // render() {
    return (
      <div className= 'App'>
        <ItemsProvider>
          <>
            <Form /*addedItem= {addItem}*//>
            <Items /*items= {items} deleting= {deleteItem}*/ />
          </>
        </ItemsProvider>
      </div>
    )
  // }
}

export default App
