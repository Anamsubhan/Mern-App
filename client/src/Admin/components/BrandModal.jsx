import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { storage } from '../utils/FirebaseConfig'
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import axios from 'axios';
import { AppRoute } from '../../App';


function BrandModal({recallData}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [brandname, setBrandName] = useState("")
    const [brandImage, setBrandImage] = useState([])

    const AddBrand = (e) => {
        e.preventDefault();

        
        const storageRef = ref(storage, `images/brand/${brandImage.name}`);

        uploadBytes(storageRef, brandImage).then((snapshot) => {
            getDownloadURL(snapshot.ref)
                .then((url) => {
                    const payload = {brandname, brandImage : url}
                    axios.post('/api/addbrand',payload)
                    .then((json)=>{
                        setShow(false);
                        recallData(json.data.brands);

                    })
                    .catch((error)=> alert(error.message));
                   
                })
                .catch((error) => console.log(error))
                });
        
    }

    return (
        <>
            <Button variant="dark" onClick={handleShow}>
                Add Brand
            </Button>

            <Modal show={show} onHide={handleClose} centered backdrop='static'>
                <Modal.Header closeButton>
                    <Modal.Title>Add Brand </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={AddBrand}>
                        <div className="mb-3">
                            <label htmlFor="BrandName" className="form-label">
                                Brand Name
                            </label>
                            <input
                                value={brandname}
                                onChange={(e) => setBrandName(e.target.value)}
                                type="text"
                                className="form-control"
                                id="Brandame"
                                aria-describedby="emailHelp"
                            />

                        </div>

                        <div className="mb-3">
                            <label htmlFor="formFile" className="form-label">
                                Brand Image
                            </label>
                            <input className="form-control" onChange={(e) => setBrandImage(e.target.files[0])} type="file" id="formFile" />
                        </div>



                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </form>




                </Modal.Body>

            </Modal>
        </>
    );
}

export default BrandModal;