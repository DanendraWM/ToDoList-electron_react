import React from 'react'
import { useState, useEffect } from "react";
import axios from 'axios';
import { MdDelete } from 'react-icons/md';
import { MdModeEdit } from 'react-icons/md';
import { Link } from 'react-router-dom';
const HomeList = () => {
    const [lists, setLists] = useState([]);
    const [isi, setIsi] = useState("");
    useEffect(() => {
        getList();
    }, [])
    const getList = async () => {
        const response = await axios.get('http://localhost:5000/lists');
        setLists(response.data);
    }
    const addList = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/list/add', {
                value: isi
            });
            setIsi("");
            getList();
        } catch (error) {
            console.log(error);
        }
    }
    const deleteList = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/list/delete/${id}`);
            window.location.href = '#header';
            getList();
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="flex justify-center flex-col items-center  py-10 sm:py-25 ">
            <p className="text-6xl pb-5 font-Lobster">ToDo List</p>
            <form className="form-control" onSubmit={addList}>
                <div className="input-group m-auto w-full">
                    <input
                        type="text"
                        placeholder="Input list ..."
                        className=" pl-10 sm:w-96 w-52 h-14 text-gray-900 bg-gray-50 rounded-lg border justify-center items-center border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value={isi}
                        onChange={(e) => setIsi(e.target.value)}
                    />
                    <button className="btn btn-square h-14">add</button>
                </div>
            </form>
            {lists.map((list, index) => (
                <div key={index + 1} className="flex flex-wrap gap-5 my-3 ">
                    <div className="card card-compact sm:w-96 w-52 bg-base-100 shadow-xl">
                        <div className="card-body flex flex-row">
                            <p className="text-xl">{list.value}</p>
                            <Link to={`/list/${list._id}`} className="btn btn-warning btn-sm "><MdModeEdit /></Link>
                            <a className="btn btn-error btn-sm " href={"#modal-" + index + 1}><MdDelete /></a>
                            <div className="modal m-0" id={"modal-" + index + 1}>
                                <div className="modal-box bg-base-100">
                                    <a
                                        href="#header"
                                        className="btn btn-sm btn-circle absolute right-2 top-2"
                                    >
                                        ✕
                                    </a>
                                    <h3 className="font-bold text-lg">Konfirmasi hapus list</h3>
                                    <p className="py-4">
                                        Apakah anda yakin ingin hapus {list.value} ?
                                    </p>
                                    <div className="modal-action">
                                        <button onClick={() => deleteList(list._id)} className="btn w-full bg-[#6f1d1b] text-white border-none hover:bg-slate-400 hover:text-slate-800 hover:outline-3">
                                            Yakin
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default HomeList