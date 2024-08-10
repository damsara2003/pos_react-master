import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function Item() {

    const [item, setItems] = useState(null);

    const [itemCategory, setItemCategory] = useState(null);

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [itemcategoryId, setitemcategoryId] = useState("");


    useEffect(() => {
        axios.get("http://localhost:8080/items")

            .then(function (response) {
                setItems(response.data)
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });



        axios.get("http://localhost:8080/itemCategories")
            .then(function (response) {
                setItemCategory(response.data);
                console.log(response);

            })
            .catch(function (error) {
                console.log(error);
            });

    }, [])

    function handleitemCategory(event) {
        setitemcategoryId(event.target.value);
    }

    function handleName(event) {
        setName(event.target.value);
    }

    function handlePrice(event) {
        setPrice(event.target.value);

    }

    function handleQuantity(event) {
        setQuantity(event.target.value);
    }


    function createItem(event) {
        event.preventDefault();

        const data = {
            name: name,
            price: price,
            quantity: quantity,
            itemcategoryId: itemcategoryId
        }

        



        axios.post("http://localhost:8080/items", data)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            })


    }



    return (

        <div>
            <h1>Items</h1>

            {item && item.map((item) => {
                return (
                    <div key={item.id}>
                        <h2>{item.name}</h2>
                        <p>Category : {item.itemcategory?.name}</p>
                        <p>price :{item.price}</p>
                        <p>Qty: {item.quantity}</p>

                    </div>
                )
            })
        }
            

            <button type='delete' onClick={() => {
                axios.delete("http://localhost:8080/items" + item.id)
                    .then(function () {
                        setItems();
                    })
                    .catch(function (error) {
                        console.log(error)
                    });


            }}>Delete</button>
        
            

            <h2>Create Item</h2>

            <form onSubmit={createItem} >
                <div>
                    <label>Item Name</label>
                    <input type="text" onChange={handleName} required />
                </div>

                <div>
                    <label>Item price</label>
                    <input type="text" onChange={handlePrice} required />
                </div>

                <div>
                    <label>Quantity</label>
                    <input type="text" onChange={handleQuantity} required />
                </div>

                <div>
                    <label> Categories </label>
                    <select onChange={handleitemCategory} required>
                        <option value="" > select a category </option>

                        {itemCategory && itemCategory.map((itemcategory) => (
                            <option key={itemcategory.id} value={itemcategory.id} selected={itemcategory.id === itemcategoryId} > {itemcategory.name}
                            </option>
                        ))}
                    </select>

                </div>

                <button type="submit"> Create Item </button>

            </form>








        </div>
    );





}





export default Item;