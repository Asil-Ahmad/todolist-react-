import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { add } from "../assets/icons";
import axios from "axios";

const SaveNotes = () => {
  const url = "https://66b358917fba54a5b7ec8d2f.mockapi.io";

  const formik = useFormik({
    initialValues: {},
    onSubmit: (values) => {
      //   alert(JSON.stringify(values, null, 2));
      console.log(values.notes);
      try {
        values.notes
          ? axios.post(`${url}/notes`, { notes: values.notes })
          : alert("Enter some text!");
      } catch (error) {
        alert("An error occured");
      }
    },
  });

  //   const handleNotes = async () => {
  //     try {
  //       await axios.post;
  //     } catch (error) {}
  //   };

  return (
    <div className='flex justify-center'>
      <div className='px-[20px]'>
        <form
          className='flex items-center gap-2'
          onSubmit={formik.handleSubmit}
        >
          <input
            type='text'
            name='notes'
            id='text'
            onChange={formik.handleChange}
            value={formik.values.text}
            className='rounded-full py-2 px-5 w-[40vw] max-md:w-[70vw] outline-none'
          />
          <button type='submit'>
            <img
              src={add}
              alt='add button'
              className='w-9 rounded-full bg-green-600 hover:bg-green-800 transition-all duration-200'
            />
          </button>
        </form>
      </div>
    </div>
  );
};

export default SaveNotes;
