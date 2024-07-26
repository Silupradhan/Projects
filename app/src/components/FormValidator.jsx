import React, { useEffect, useState } from "react";

const FormValidator = () => {

   const [name,setName] = useState("")
   const [email,setEmail] = useState("")
   const [password,setPassword] = useState("")


   const handelSubmit = (e) =>{
    e.preventDefault()

    if(name === "" || email === "" || password === ""){
      alert("Please fill all the fields")
    }else{
      alert(`thank u ${name},your form is submitted sucessfully`)

    }


    setName("")
    setEmail("");
    setPassword("");

   }
   
   

  return (
    <>
      <div className="bg-blue-200 min-h-screen flex items-center">
        <div className="w-full">
          <h2 className="text-center text-blue-400 font-bold text-2xl uppercase mb-10">
            Fill out our form
          </h2>
          <div className="bg-white p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2">
            <form action="">
              <div className="mb-5">
                <label
                  htmlFor="name"
                  className="block mb-2 font-bold text-gray-600"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Put in your fullname"
                  className="border border-gray-300 shadow p-3 w-full rounded mb-"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>


              <div className="mb-5">
                <label
                  htmlFor="name"
                  className="block mb-2 font-bold text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="name"
                  name="name"
                  placeholder="Put in your email"
                  className="border border-gray-300 shadow p-3 w-full rounded mb-"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mb-5">
                <label
                  htmlFor="name"
                  className="block mb-2 font-bold text-gray-600"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="name"
                  name="name"
                  placeholder="Put in your password"
                  className="border border-gray-300 shadow p-3 w-full rounded mb-"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button className="block w-full bg-blue-500 text-white font-bold p-4 rounded-lg"  onClick={handelSubmit}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormValidator;
