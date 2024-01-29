"use client"
import React, { useState } from "react";

import { useSession } from "next-auth/react";
import axios from "axios";
import Modal from "./modal";

export default function PostToMail() {

  const { status } = useSession();

  const [wordCount, setWordCount] = useState(0)
  const [inputTitle, setInputTitle] = useState("");
  const [inputTextArea, setInputTextArea] = useState("");
  const [confirmModal, setConfirmModal] = useState(false);
 
  const handleWordsCounter = () => {
    const words = inputTextArea.split(/\s+/).filter((word) => word !== "")
    setWordCount(words.length)
  }
 
  const handleModalOpen = () => {
    setConfirmModal(true)
    handleWordsCounter()
  }
  
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
        window.location.reload()
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
                  className="w-full py-2 text-lg font-medium label-text"
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
                cols={40} 
                rows={10}
                required
                className="overflow-visible font-medium text-md textarea textarea-bordered">
                </textarea>
      
              <button
                disabled={!inputTextArea || !inputTitle}
                onClick={handleModalOpen} 
                type="button"
                className="my-4 disabled:btn-ghost disabled:opacity-25 disabled:btn-outline btn btn-primary w-fit">
                  enviar postagem
              </button>

              {
              confirmModal &&
              
              <Modal
              confirmModal
              inputTextArea={inputTextArea} 
              inputTitle={inputTitle}
              closeModal={closeModal}
              wordCount={wordCount}/>
              }
              
            </div>
          </form>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center w-screen h-screen">
          <h1>você não está autorizado</h1>
        </div>
      )}
    </>
  );
}
