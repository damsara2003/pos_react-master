import axios from "axios";
import { useState } from "react";


function Itemcategory() {

    //getitem categories
    const [itemcategories, setItemCategory] = useState(null);



    //createitemcategories
    const [name, setName] = useState("");



    //getItem category
    function GetItemCategory() {

        axios.get("http://localhost:8080/itemCategories")

            .then(function (response) {
                setItemCategory(response.data)
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    //createitemcategory
    function handleName(event) {
        setName(event.target.value);

    }

    function CreateItemcategory(event) {
        event.preventDefault();

        const data = {
            name: name
        }

        axios.post("http://localhost:8080/itemCategories", data)
            .then(function (response) {
                GetItemCategory();
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            })

    }




    return (
        <div className="Itemcategory">
            <div className="text-end">

            <button type="button" className="btn btn-primary" onClick={GetItemCategory}> Get All ItemCategories </button>
            </div>

            {itemcategories && itemcategories.map((row) => (
                <div key={row.id} >
                    {row.name}


                    <button type='button' onClick={() => {
                        axios.delete("http://localhost:8080/itemCategories/" + row.id)
                            .then(function () {
                                GetItemCategory();
                            })
                            .catch(function (error) {
                                console.log(error)
                            });


                    }}>Delete</button>   

                </div>
            ))

            }
      


            







            <h2>Create New Itemcategory </h2><br/><br/>

            <form onSubmit={CreateItemcategory}>
                <div>
                    <label> Category Name </label>
                    <input type="text" onChange={handleName} required />
                </div>
                <br/>

                <button type="submit" className="btn btn-primary"> Create Category</button>
            </form>






        </div>
    );

}

export default Itemcategory;
