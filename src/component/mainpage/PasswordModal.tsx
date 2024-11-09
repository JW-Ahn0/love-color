import Modal from 'react-modal';
import styled from '@emotion/styled';
import { useState } from 'react';

interface passwordModalProps {
    msg : string;
    password : string;
    passwordModalOpen: boolean;
    setPasswordModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setIsPasswordConfirm:React.Dispatch<React.SetStateAction<boolean>>;
}

const PasswordModal = ({ msg,password,passwordModalOpen,setPasswordModalOpen,setIsPasswordConfirm }: passwordModalProps) => {
    const [inputPassword, setInputPassword] = useState('');
    
    function closeModal(){
        setPasswordModalOpen(false)
    }
    function handleSubmit() {
        if (inputPassword === password) { // 'correctPassword'를 실제 패스워드로 변경하세요.
            setIsPasswordConfirm(true);
        } else {
            alert('패스워드가 틀렸습니다! 다시 입력해주세요 ㅎㅎ');
        }
    }
   return (
    <PasswordModalWrapper>
        <Modal 
            style={customStyles}
            isOpen={passwordModalOpen} 
            onRequestClose={closeModal}
            shouldCloseOnOverlayClick={false} // 모달 바깥 영역 클릭 시 닫힘 설정
            ariaHideApp={false}
        >
            <PasswordModalContent>
                <h2 className='modal-msg'>{msg}</h2>
                <div>
                    <input 
                        type="password"
                        className='modal-input' 
                        placeholder='비밀번호를 입력해주세요.'
                        onChange={(e) => setInputPassword(e.target.value)}
                    />
                </div>
                <div className='modal-buttons'>
                    <button className='modal-close' onClick={closeModal}>닫기</button>
                    <button className='modal-submit' onClick={handleSubmit}>입력</button>
                </div>
            </PasswordModalContent>
        </Modal>
    </PasswordModalWrapper>

   )
}

export default PasswordModal;

const PasswordModalWrapper = styled.div`

`
const PasswordModalContent = styled.div`


.modal-input {
    width: 100%;
    padding: 10px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
  }

.modal-msg{
    display: flex;
    justify-content: center;
}
.modal-submit {
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
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
    gap:10px;
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
        width: '300px', // 가로 크기 조정
        height: 'auto%', // 세로 크기 조정
        overflow:'hidden',
    },
    overlay: {
        zIndex: 1000,
        backgroundColor: 'rgba(0, 0, 0, 0.7)'
    }
  };
  