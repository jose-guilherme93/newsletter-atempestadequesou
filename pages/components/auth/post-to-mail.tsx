import React, { useState } from "react";
import Router from "next/router";
import { useSession } from "next-auth/react";
import axios from "axios";

import sanitize from "sanitize-html";


import {
  BtnBold,
  BtnClearFormatting,
  BtnItalic,
  BtnLink,
  BtnRedo,
  BtnUnderline,
  BtnUndo,
  ContentEditableEvent,
  Editor,
  EditorProvider,
  Toolbar,
} from "react-simple-wysiwyg";

export default function PostToInstagram() {
  const { status } = useSession();
  const [inputTextArea, setInputTextArea] = useState("");
  const [inputTitle, setInputTitle] = useState("");

  const handleEditorChange = (event: ContentEditableEvent) => {
    setInputTextArea(sanitize(event.target.value));
  };
  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputTitle(sanitize(event.target.value));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const confirmMessage = confirm("enviar postagem?");
    if (confirmMessage) {
      await axios
        .post("/api/server/mail-handling", {
          inputTextArea,
          inputTitle,
        })
        .then(() => {
          alert("post enviado");
          Router.reload();
        })

        .catch((error) => {
          console.log(error);
        });
    }
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
                  name="title"
                />
              </section>

              <EditorProvider>
                <Editor
                  containerProps={{
                    style: {
                      width: "100%",
                      height: "50%",
                    },
                  }}
                  onChange={handleEditorChange}
                  value={inputTextArea}
                >
                  <Toolbar>
                    <BtnBold />
                    <BtnItalic />
                    <BtnUnderline />
                    <BtnUndo />
                    <BtnRedo />
                    <BtnLink />
                    <BtnClearFormatting />
                  </Toolbar>
                </Editor>
              </EditorProvider>

              <button
                className="w-1/3 mt-5 text-white disabled:btn-disabled btn btn-primary"
                disabled={!inputTextArea}
              >
                enviar post
              </button>
            </div>
          </form>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center w-screen h-screen">
          <h1>você não está autorizado</h1>
          <button
            className="w-32 p-2 font-sans bg-yellow-400 border border-solid rounded-md disabled:bg-yellow-50 text-zinc-900"
            onClick={() => {
              Router.replace("/components/auth");
            }}
          >
            {" "}
            logar
          </button>
        </div>
      )}
    </>
  );
}
