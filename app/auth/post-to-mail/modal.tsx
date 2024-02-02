import axios, { AxiosResponse } from "axios"
import { useEffect, useState } from "react"

interface ModalProps {
  
  confirmModal: boolean
  wordCount: number
  closeModal: () => void
  isDisabled: boolean
  inputTextArea: string
}
export default function Modal({
      isDisabled,
      confirmModal, 
      closeModal, 
      inputTextArea, 
      wordCount 
    } :ModalProps) {
      
      const handleModal = () => {
        !confirmModal
        !isDisabled
      }
  const [quote, setQuote] = useState('');

  const getQuote = async () => {
    try {
      const response= await axios.get('https://api.quotable.io/random/?author=william-shakespeare');
      setQuote(response.data.content || 'take a time, my storm. the sun always come.');
      console.log(response.data.content)
    } catch (error) {
      console.error('Erro ao obter citação:', error);
    }
  };
  useEffect(() => {
    getQuote();
  }, []); // 
    return (
       
              <div className="bg-zinc-200">
                 <dialog className="font-medium modal" onClose={() => closeModal()} open={confirmModal}>
                  <div className="modal-box">
                    
                  <form className="bg-zinc-200" method="dialog">
                    <button onClick={handleModal} className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2">✕</button>
                  </form>
                  
                    <i className="block h-full mb-4 font-thin">{`${quote}` }</i>
                    <p>palavras: {wordCount}</p>
                    <p>caracteres: {inputTextArea.length}</p>
                    {isDisabled ? " checando o texto..." : inputTextArea.length < 75 ? ' menos de 75 caracteres, enviar mesmo assim?' : ' tudo certo!'}
                    <div className="mt-2">

                    <button className="btn btn-primary w-36" disabled={isDisabled} type="submit">enviar</button>
                    </div>
                  </div>
                </dialog>
              </div>
       
    )
}