import {
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    CardText,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Label,
    Input,
    CardLink,
    Col,
    Row,
    Button,
    Toast
  } from "reactstrap";
  
  import { useState,useEffect } from 'react'
  import { addAdministration, getAdministration, deleteAdministration } from "../Firebase";
  import { Plus } from 'react-feather'
  
  import Timeline from '@components/timeline'
  
  
  
  
  
  
  const IdariGorevler = () => {
  
  const [data, setData] = useState([])
  const [formModal, setFormModal] = useState(false)
  const [submit, setSubmit] = useState(false)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [gorev, setGorev] = useState('')
  const [customContent, setCustomContent] = useState('')
  const [baslangic, setBaslangic] = useState('')
  const [bitis, setBitis] = useState('')



  const handleSubmit = () => {
    if (title !== '' && content !== '' && gorev !== '' && baslangic !== '' && bitis !== '') {
      addAdministration(title, content, gorev, baslangic, bitis);
      setSubmit(!submit);
      setFormModal(!formModal);
      setTitle("");
      setContent("");
      setGorev("");
      setCustomContent("");
      setBaslangic("");
      setBitis("");
    }
  };
  
  useEffect(() => {
    const fetchData = async () => {
      try{
        const fetchedData = await getAdministration();
        setData(fetchedData);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [submit,data]);


    return (
      <div>
        <Col>
        <Row>
        <div className="d-flex justify-content-end flex-row mb-1 ">
            <Button
              color="primary"
              size="sm"
              onClick={() => setFormModal(!formModal)}
            >
              <Plus/>  Ekle
            </Button>
          </div>
          <div className="modal-header d-flex align-items-center justify-content-center flex-row ">
              <Modal isOpen={formModal} className="modal-dialog-centered">
                <h4 className=" text-center fs-1 my-2">İdari Görev Ekle</h4>
                <h5 className="text-center text-muted mx-2 ">
                  Lütfen bilgileri eksiksiz doldurunuz.
                </h5>
                <ModalBody>
                  <div className="m-2">
                    <Label className="form-label" for="channel">
                     Üniversite Adı:
                    </Label>
                    <Input  placeholder="Üniversite Adı" value={title} onChange={e => setTitle(e.target.value)} />
                  </div>
                  <div className="m-2">
                    <Label className="form-label">
                      Bölüm Adı:
                    </Label>
                    <Input  placeholder="Bölüm Adı" value={content} onChange={e => setContent(e.target.value)} />
                  </div>
                  <div className="m-2">
                    <Label className="form-label">
                      Görev Adı:
                    </Label>
                    <Input  placeholder="Görev Adı" value={gorev} onChange={e => setGorev(e.target.value)} />
                  </div>
                  <div className="m-2">
                    <Label className="form-label">
                      Başlangıç Tarihi:
                    </Label>
                    <Input  placeholder="Başlangıç Tarihi" value={baslangic} onChange={e => setBaslangic(e.target.value)} />
                  </div>
                  <div className="m-2">
                    <Label className="form-label">
                      Bitiş Tarihi:
                    </Label>
                    <Input placeholder="Bitiş Tarihi" value={bitis} onChange={e => setBitis(e.target.value)} />
                  </div>
                </ModalBody>
                <ModalFooter className="d-flex justify-content-center align-items-center">
                  <Button
                    color="dark"
                    outline
                    onClick={() => setFormModal(!formModal)}
                  >
                    Vazgeç
                  </Button>
                  <Button
                    color="primary"
                    onClick={handleSubmit}
                  >
                    Kaydet
                  </Button>
  
                  </ModalFooter>
              </Modal>
            </div>
           <Card className="justify-content-center align-items-center text-center w-100 ">
        <CardHeader>
          <CardTitle tag='h2'><h2>İdari Görevler</h2></CardTitle>
        </CardHeader>
        <CardBody className='pt-1'>
          <Timeline data={data.map((item) => {
            return {
              title: item.title,
              content: item.content,
              customContent:(
                <div className='d-flex align-items-center'>
                  <div className='avatar bg-light-primary me-1'>
                    <div className='ms-50'>
                      <h6>{item.gorev}</h6>
                    </div>
                  </div>
                  <CardText tag='span' className='mb-0 font-weight-bold'>
                    {item.baslangic} - {item.bitis}
                  </CardText>
                </div>
              )
            }
          })} />
          <div className='d-flex justify-content-end flex-row mb-1 '>
            <Button
              color="danger"
              size="sm"
              onClick={() => deleteAdministration()}
            >
              Sil
            </Button>
          </div>
        </CardBody>
      </Card>
      </Row>
      </Col>
      <Col>
      </Col>
      </div>
    );
  };
  
  export default IdariGorevler;
  