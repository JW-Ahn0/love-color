import Modal from 'react-modal';
import styled from '@emotion/styled';

interface alertModalProps {
    msg : string;
    alertModalOpen: boolean;
    setAlertModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AlertModal = ({ msg,alertModalOpen, setAlertModalOpen }: alertModalProps) => {

    function closeModal(){
        setAlertModalOpen(false)
    }
   return (
    <AlertModalWrapper>
        <Modal 
            style={customStyles}
            isOpen={alertModalOpen} 
            onRequestClose={closeModal}
            shouldCloseOnOverlayClick={true} // 모달 바깥 영역 클릭 시 닫힘 설정
            ariaHideApp={false}
        >
            <ModalContent>
                <h2 className='modal-msg'>{msg}</h2>
                <div className='modal-buttons'>
                    <button className='modal-close' onClick={closeModal}>닫기</button>
                </div>
            </ModalContent>
        </Modal>
    </AlertModalWrapper>

   )
}

export default AlertModal;

const AlertModalWrapper = styled.div`

`
const ModalContent = styled.div`

.modal-msg{
    display: flex;
    justify-content: center;
}
.modal-close {
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
    background-color: #ccc;
}

.modal-buttons{
    margin-top: 50px;
    display: flex;
    justify-content: end;
}
`
const customStyles = {
    content: {
        borderRadius: '15px',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        padding: '20px',
        backgroundColor: 'white',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        width: '20%', // 가로 크기 조정
        height: 'auto%', // 세로 크기 조정
        overflow:'hidden',
    },
    overlay: {
        zIndex: 1000,
        backgroundColor: 'rgba(0, 0, 0, 0.7)'
    }
  };
  