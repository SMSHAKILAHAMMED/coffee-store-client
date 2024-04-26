import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

    const handleDelele = () => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Coffee has been deleted.",
                                icon: "success"

                            })

                            const remaining = coffees.filter(c => c._id!== _id);
                            setCoffees(remaining);
                        }

                    })

            }
        });
    }

    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img className="w-60" src={photo} alt="Movie" /></figure>
                <div className="flex justify-between w-96 pr-2">
                    <div className="ml-2 space-y-3">
                        <h2 className="card-title">Name : {name}</h2>
                        <p>{quantity}</p>
                        <p>{supplier}</p>
                        <p>{taste}</p>
                        <p>{category}</p>
                        <p>{details}</p>
                    </div>
                    <div className="card-actions justify-end mt-5">
                        <div className="join join-vertical space-y-5 rounded-lg">
                            <button className="btn bg-yellow-400 join-item">view</button>
                            <Link to={`updateCoffee/${_id}`}><button className="btn bg-orange-400 join-item p-6">Edit</button></Link>
                            <button onClick={() => handleDelele(_id)} className="btn bg-red-500 join-item">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;