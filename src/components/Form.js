import React, { useContext, useState } from 'react'
import { itemsContext } from '../context/ItemContext'

const Form = () => {
    const {addItem} = useContext(itemsContext)
    const [item, setItem] = useState({id: '', name: '', age: ''})
    // state = {
    //     id: '',
    //     name: '',
    //     age: ''
    // }
    const handleSubmit = (e) => {
        e.preventDefault()
        addItem(item)
        setItem({name: '', age: ''})
    };
    const handleChange = (e) => {
    //     // this.setState({
    //     //     [e.target.id]: e.target.value //to specify which value to name or age, it depends on what target
    //     // })
        setItem({...item, [e.target.id]: e.target.value})
    }
    // render() {
        return (
            <form onSubmit= {handleSubmit}>
                <input onChange= {handleChange} value= {item.name} type= 'text' id= 'name' placeholder= 'name'/>
                <input onChange= {handleChange} value= {item.age} type= 'number' id= 'age' placeholder= 'age'/>
                <input type= 'submit' value= 'ADD' className= 'add btn'/>
            </form>
        )
    // }
}

export default Form
