import React, { useEffect, useState } from "react";
import { copy, delete_icon } from "../assets/icons";
import axios from "axios";

const Home = () => {
  const [getNotes, setGetNotes] = useState([]);
  const [visible, setVisible] = useState(false);
  const url = "https://66b358917fba54a5b7ec8d2f.mockapi.io";

  const fetchNotes = async () => {
    try {
      const res = await axios.get(`${url}/notes`);
      //   console.log(res.data);
      setGetNotes(res.data);
    } catch (error) {
      //   alert("An error occured!");
    }
  };
  useEffect(() => {
    fetchNotes();
  });

  const deleteNote = async (id) => {
    try {
      await axios.delete(`${url}/notes/${id}`);
      location.reload();
    } catch (error) {
      alert("An error occured!");
    }
  };

  const copyNote = async (id) => {
    try {
      const res = await axios.get(`${url}/notes/${id}`);
      const copiedText = res.data.notes;
      navigator.clipboard.writeText(copiedText);
      alert("Text Copied");
    } catch (error) {
      alert("An error occured!");
    }
  };

  return (
    <div className='flex justify-center relative'>
      <div className='container max-md:px-5'>
        <div className='grid grid-cols-2 gap-4 items-center max-md:flex flex-wrap'>
          {getNotes.map(({ id, notes }) => (
            <div
              key={id}
              className='bg-[#fdd598] p-5 rounded-xl flex flex-col justify-center gap-5 transition-all duration-1000
              shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]
              '
            >
              <p>{notes}</p>
              <div className='flex justify-center  w-full transition-all duration-300 '>
                <img
                  src={delete_icon}
                  alt='delete icon'
                  className='w-5 hover:bg-red-500'
                  onClick={() => deleteNote(id)}
                />
                <img
                  src={copy}
                  alt='copy icon'
                  className='w-5 hover:bg-white'
                  onClick={() => copyNote(id)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <div className='bg-white w-[30%] absolute top-0 bottom-0 p-2 flex flex-col justify-between'>
        <div className="flex gap-2 flex-col ">
          <h1 className='text-4xl'>Delete Confirmation</h1>
          <hr />
          <p className='bg-red-400 text-red-700 px-2 rounded'>Are you sure want to delete</p>
          <hr />
        </div>
        <div className="flex justify-end gap-4">
          <button>Cancel</button>
          <button className="bg-red-500 text-white py-1 px-3 rounded">Delete</button>
        </div>
      </div> */}
    </div>
  );
};

export default Home;
