import axios from "axios";
import { useState } from "react";

function AddStock() {

    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState ("");
    const [date, setDate] = useState("");


    function handleName(event) {
        setName(event.target.value);
    }
    function handleQuantity(event) {
        setQuantity(event.target.value);
    }
    function handleDate(event) {
        setDate(event.target.value);
    }



    function createStock(event) {
        event.preventDefault();

        const data = {
            name: name,
            quantity: quantity,
            date: date
        }





        axios.post("http://localhost:8080/stocks", data)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            })


    }


    return (
        <div>

            <h2>Create Stock</h2>

            <form onSubmit={createStock} >
                <div>
                    <label>Name</label>
                    <input type="text" onChange={handleName} required />
                </div>

                <div>
                    <label>Quantity</label>
                    <input type="text" onChange={handleQuantity} required />
                </div>

                <div>
                    <label>Date</label>
                    <input type="text" onChange={handleDate} required />
                </div>

                <button type="submit" className="btn btn-primary"> Create Stock </button>



            </form>
        </div>




    );

}
export default AddStock;