import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";





function Stock() {

    const [stock, setStock] = useState(null);




    useEffect(() => {
        axios.get("http://localhost:8080/stocks")

            .then(function (response) {
                setStock(response.data)
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });

    }, [])



    return (
        <div className="container">
            <h1>Stock</h1>
            <div className="text-end">
                <button type="button" className="btn btn-primary">Create Stock</button>

            </div>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>#ID</th>
                        <th>Name</th>
                        <th>Stock In date</th>
                        <th>Quantity</th>
                        <th>Actions</th>

                    </tr>
                </thead>

                <tbody>
                    {stock && stock.map((stock) => (
                        <tr key={stock.id}>
                            <td>{stock.id}</td>
                            <td>{stock.name}</td>
                            <td>{stock.stockDate}</td>
                            <td>{stock.quantity}</td>
                            <td><button className="btn btn-primary btn-sm" >Edit </button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>





    );


}
export default Stock;