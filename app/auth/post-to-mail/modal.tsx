import { useRouter } from "next/navigation"
interface InputProps {
    inputTextArea: string
    inputTitle: string
    confirmModal: boolean
    closeModal: () => void
    
}


export default function Modal({inputTextArea, inputTitle, confirmModal, closeModal }:InputProps) {
    
    const router = useRouter()
    
    const handleModal = () => {
        !confirmModal
    }


    return (
       

                 <dialog className="modal" onClose={() => closeModal()} open={confirmModal}>
                  <div className="modal-box">
                    
                  <form method="dialog">
                    <button onClick={handleModal} className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2">✕</button>
                  </form>
                  
                    <h3 className="text-lg font-bold">Hello!</h3>
                    <p className="py-4">certeza que deseja enviar?</p>
                    <button className="btn btn-primary" disabled={!inputTextArea || !inputTitle} type="submit">sim!</button>
                  </div>
                  
              </dialog>
       
    )
}