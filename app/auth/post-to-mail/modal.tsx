
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
    
    return (
       
              <div className="bg-zinc-200">
                 <dialog className="font-medium modal" onClose={() => closeModal()} open={confirmModal}>
                  <div className="modal-box">
                    
                  <form className="bg-zinc-200" method="dialog">
                    <button onClick={handleModal} className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2">✕</button>
                  </form>
                  
                    <h3 className="text-lg font-bold">Hello!</h3>
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