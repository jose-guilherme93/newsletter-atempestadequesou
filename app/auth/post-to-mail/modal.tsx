
interface ModalProps {
    
    confirmModal: boolean
    wordCount: number
    closeModal: () => void
    isDisabled: boolean
}
   export default function Modal({ isDisabled,  confirmModal, closeModal, wordCount }:ModalProps) {
    
   
    const handleModal = () => {
        !confirmModal
        !isDisabled
    }
    
    return (
       
              <div className="bg-zinc-200">
                 <dialog className="modal" onClose={() => closeModal()} open={confirmModal}>
                  <div className="modal-box">
                    
                  <form method="dialog">
                    <button onClick={handleModal} className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2">✕</button>
                  </form>
                  
                    <h3 className="text-lg font-bold">Hello!</h3>
                    <p>palavras: {wordCount}</p>
                    <p className="py-4">certeza que deseja enviar?</p>
                    <button className="btn btn-primary" disabled={isDisabled} type="submit">enviar</button>
                    {isDisabled ? " checando o texto..." : " tudo certo!"}
                  </div>

                </dialog>
              </div>
       
    )
}