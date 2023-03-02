import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditList = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [isi, setIsi] = useState("");
    useEffect(() => {
        getListById();
    }, []);
    const getListById = async () => {
        const response = await axios.get(`http://localhost:5000/list/${id}`);
        setIsi(response.data.value)
    }
    const editList = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:5000/list/${id}`, {
                value: isi
            });
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="flex justify-center flex-col items-center  py-10 sm:py-25">
            <p className="text-6xl pb-5 font-Lobster">Edit List</p>
            <form className="form-control" onSubmit={editList}>
                <div className="input-group m-auto w-full">
                    <input
                        type="text"
                        placeholder="Input list ..."
                        className=" pl-10 sm:w-96 w-52 h-14 text-gray-900 bg-gray-50 rounded-lg border justify-center items-center border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value={isi}
                        onChange={(e) => setIsi(e.target.value)}
                    />
                    <button className="btn btn-square h-14">edit</button>
                </div>
            </form>
        </div>
    )
}

export default EditList