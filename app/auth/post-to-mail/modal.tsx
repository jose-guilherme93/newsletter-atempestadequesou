
interface InputProps {
    inputTextArea: string
    inputTitle: string
    confirmModal: boolean
    wordCount: number
    closeModal: () => void
}


export default function Modal({inputTextArea, inputTitle, confirmModal, closeModal, wordCount }:InputProps) {
    
   
    
    const handleModal = () => {
        !confirmModal
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
                    <button className="btn btn-primary" disabled={!inputTextArea || !inputTitle} type="submit">enviar</button>
                  </div>

                </dialog>
              </div>
       
    )
}