import {useDropzone} from 'react-dropzone';
import styled from '@emotion/styled';
import {useState } from 'react';
import AlertModal from './AlertModal';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {storage} from '../../firebase';

const getColor = (props:any) => {
  if (props.isDragAccept) {
      return '#00e676';
  }
  if (props.isDragReject) {
      return '#ff1744';
  }
  if (props.isFocused) {
      return '#2196f3';
  }
  return '#eeeeee';
}

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-width: 2px;
  border-radius: 15px;
  border-color: ${props => getColor(props)};
  border-style: dashed;
  background-color: #fafafa;
  color: #bdbdbd;
  outline: none;
  transition: border .24s ease-in-out;
  
`;
interface dropzoneProps {
  uuid : string;
  setImgUrlData : (imgUrl: string, uuid: string) => void;
}
const StyledDropzone = ({uuid,setImgUrlData} :dropzoneProps) => {
  const [showAlert, setShowAlert] = useState(false); // 경고창을 표시할지 여부를 관리하는 상태 추가
  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject
  } = useDropzone(
    {accept: {'image/*': []},
    maxFiles:1,
    onDropRejected:onDropRejected,
    onDropAccepted:uploadFile
    });

  const acceptedFileItems = acceptedFiles.map(file => (
    <li key={file.name}>
      {file.name}
    </li>
  ));
  function onDropRejected() {
    setShowAlert(true); // 파일 거부 시 경고창을 표시
  }
  async function uploadFile(acceptedFiles: Array<File>) {
    await uploadBytes(ref(storage,`images/${uuid}`),acceptedFiles[0]);
    const file_url = await getDownloadURL(ref(storage,`images/${uuid}`));
    console.log(uuid);
    console.log(file_url);
    setImgUrlData(uuid,file_url);
  }
  return (
    <div className="container">
      <Container {...getRootProps({isFocused, isDragAccept, isDragReject})}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
        <em>(1 file are the maximum number of files you can drop here)</em>
      </Container>
      <aside>
        <h4>첨부된 이미지 파일</h4>
        <ul>{acceptedFileItems}</ul>
      </aside>
      {showAlert && <AlertModal msg={'파일이 2개 이상입니다.'} alertModalOpen={showAlert} setAlertModalOpen={setShowAlert}></AlertModal>   } 
    </div>
  );
}
export default StyledDropzone;