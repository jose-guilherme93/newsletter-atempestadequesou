"use client"
import React, { useEffect, useState } from "react";
import {useRouter} from "next/navigation";
import { useSession } from "next-auth/react";
import axios from "axios";
import Modal from "./modal";






export default function PostToInstagram() {

  const route = useRouter()
  const { status } = useSession();
  const [inputTextArea, setInputTextArea] = useState("");
  const [inputTitle, setInputTitle] = useState("");
  const [confirmModal, setConfirmModal] = useState(false);

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    setInputTitle((event.target.value));
  };

  const handleTextAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    event.preventDefault()
    setInputTextArea((event.target.value));
  };

  
  const sendPostToMail = async (confirmModal: boolean) => {

    if(confirmModal === true) {

      await axios
      .post("/api/server/mail-handling", {
        inputTextArea,
        inputTitle,
      })

      .then((error) => {
        console.log(error)
      })
      
      .then(() => {
        alert("post enviado");
        route.replace('/auth/post-to-mail');
      })
      
      .catch((error) => {
        console.log(error);
      });
    }
  }

  const closeModal = () => {
    setConfirmModal(false);
  };


  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    sendPostToMail(confirmModal)
  };

  return (
    <>
      {status === "loading" ? (
        <div className="flex items-center justify-center w-screen h-screen">
          <p>loading...</p>
        </div>
      ) : status === "authenticated" ? (
        <>
          <form
            onSubmit={handleSubmit}
            className="items-center justify-center w-full h-full"
          >
            <div className="flex w-full max-w-3xl p-4 bg-c form-control">
              <div className="w-1/2 mt-10 ">
                <label
                  className="w-full font-sans text-4xl text-zinc-700"
                  htmlFor="post"
                >
                  nova postagem
                </label>
              </div>

              <section className="w-full my-4 form-control">
                <label
                  className="w-full py-2 text-lg label-text"
                  htmlFor="title"
                >
                  Título da postagem
                </label>

                <input
                  onChange={handleTitleChange}
                  required
                  type="text"
                  id="title"
                  className="p-4 md:w-1/2 input input-bordered"
                  
                />
              </section>

              <textarea

                onChange={handleTextAreaChange}
                maxLength={2000}
                minLength={75} 
                cols={30} 
                rows={10}
                required
                className="font-medium textarea textarea-bordered">
                </textarea>
              
              <button 
                onClick={() => setConfirmModal(true)} 
                type="button">
                  abrir modal
              </button>

              {
              confirmModal
              
                &&

                <Modal
                confirmModal
                inputTextArea={inputTextArea} 
                inputTitle={inputTitle}
                closeModal={closeModal}/>
              }
              
            </div>
          </form>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center w-screen h-screen">
          <h1>você não está autorizado</h1>
          <button
            className="w-32 p-2 font-sans bg-yellow-400 border border-solid rounded-md disabled:bg-yellow-50 text-zinc-900"
            onClick={() => {
              route.replace("/auth");
            }}
          >
            {" "} logar
          </button>
        </div>
      )}
    </>
  );
}
