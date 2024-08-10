import { Link } from "react-router-dom";

function Home() {

    return (
        <div>
            <div class="card text-bg-info mb-3">


            <h1>Home</h1>
           
            <p>Welcome to the home page</p>
           



            <nav class="navbar navbar-expand-lg bg-secondary text-white ">
                <div class="container" >


                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                            <li class="nav-item">
                            <div class= "mx-auto p-4">
                                <div class="p-0.25 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-2">
                                    <a class="nav-link active" aria-current="page" href="/items" >Item</a>
                                </div>
                                </div>


                            </li>
                            <li class="nav-item">
                            <div class= "mx-auto p-4">
                                <div class="p-0.25 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-2">

                                    <a class="nav-link active" aria-current="page" href="/itemcategories" >Item category</a>
                                </div>
                                </div>

                            </li>



                            <li class="nav-item">
                            <div class= "mx-auto p-4">
                                <div class="p-0.25 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-2">
                                    <a class="nav-link active" href="/stocks" >Stocks </a>
                                </div>
                                </div>
                            </li>


                            <li class="nav-item">
                            <div class= "mx-auto p-4">
                                <div class="p-0.25 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-2">
                                    <a class="nav-link active" aria-current="page" href="/addstocks" >Add Stock</a>
                                </div>
                                </div>
                            </li>
                        




                        </ul>

                    </div>
                   
                </div>
            </nav>
            </div>



        </div>
    )

}
export default Home;