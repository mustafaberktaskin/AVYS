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


import { Plus } from 'react-feather'

import Timeline from '@components/timeline'






const KisiselBilgiler = () => {



  
const [data, setData] = useState([
  {
    title: 'FENERBAHÇE ÜNİVERSİTESİ',
    content: 'Bilgisayar Mühendisliği',
    customContent: (
      <div className='d-flex align-items-center'>
        <div className='avatar bg-light-primary me-1'>
          <div className='ms-50'>
            <h6>Araştırma Görevlisi</h6>
          </div>
        </div>
        <CardText tag='span' className='mb-0 font-weight-bold'>
          2019 - Devam Ediyor
        </CardText>
      </div>
    )
  },
  {
    title: 'FENERBAHÇE ÜNİVERSİTESİ',
    content: 'Bilgisayar Mühendisliği',
    customContent: (
      <div className='d-flex align-items-center'>
        <div className='avatar bg-light-primary me-1'>
          <div className='ms-50'>
            <h6>Araştırma Görevlisi</h6>
          </div>
        </div>
        <CardText tag='span' className='mb-0 font-weight-bold'>
          2019 - Devam Ediyor
        </CardText>
      </div>
    ),
    color:'danger'
  },
  {
    title: 'FENERBAHÇE ÜNİVERSİTESİ',
    content: 'Bilgisayar Mühendisliği',
    customContent: (
      <div className='d-flex align-items-center'>
        <div className='avatar bg-light-primary me-1'>
          <div className='ms-50'>
            <h6>Araştırma Görevlisi</h6>
          </div>
        </div>
        <CardText tag='span' className='mb-0 font-weight-bold'>
          2019
        </CardText>
        <CardText tag='span' className='mb-0 font-weight-bold'>
          - 2023
        </CardText>
      </div>
    ),
    color:'success'
  }
])
const [formModal, setFormModal] = useState(false)
const [submit, setSubmit] = useState(false)
const [title, setTitle] = useState('')
const [content, setContent] = useState('')
const [customContent, setCustomContent] = useState('')
const [color, setColor] = useState('primary')
const [startDate, setStartDate] = useState('')
const [endDate, setEndDate] = useState('')

const handleAddSubmit = () => {
  const updatedData = data.concat({
    title: title,
    content: content,
    customContent: (
      <div className='d-flex align-items-center'>
        <div className='avatar bg-light-primary me-1'>
          <div className='ms-50'>
            <h6>{customContent}</h6>
          </div>
        </div>
        <CardText tag='span' className='mb-0 font-weight-bold'>
          {startDate}
        </CardText>
        <CardText tag='span' className='mb-0 font-weight-bold'>
          - {endDate}
        </CardText>
      </div>
    ),
    color: color
  })
  setData(updatedData)
  setSubmit(true)
  setFormModal(!formModal)
  setTitle('')
  setContent('')
  setCustomContent('')
  setColor('primary')
  setStartDate('')
  setEndDate('')
}

useEffect(() => {
  if (submit) {
    console.log(data)
    setSubmit(false)
  }
}, [submit])

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
            <Plus/>  Düzenle
          </Button>
        </div>
        <div className="modal-header d-flex align-items-center justify-content-center flex-row ">
            <Modal isOpen={formModal} className="modal-dialog-centered">
              <h4 className=" text-center fs-1 my-2">Kişisel Bilgileri Düzenle</h4>
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
                  <Input  placeholder="Görev Adı" value={customContent} onChange={e => setCustomContent(e.target.value)} />
                </div>
                <div className="m-2">
                  <Label className="form-label">
                    Başlangıç Tarihi:
                  </Label>
                  <Input  placeholder="Başlangıç Tarihi" value={startDate} onChange={e => setStartDate(e.target.value)} />
                </div>
                <div className="m-2">
                  <Label className="form-label">
                    Bitiş Tarihi:
                  </Label>
                  <Input placeholder="Bitiş Tarihi" value={endDate} onChange={e => setEndDate(e.target.value)} />
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
                  onClick={() => handleAddSubmit()}
                
                >
                  Kaydet
                </Button>

                </ModalFooter>
            </Modal>
          </div>
         <Card>
      <CardHeader>
        <CardTitle tag='h4'>Akademik Görevler</CardTitle>
      </CardHeader>
      <CardBody className='pt-1'>
        <Timeline data={data} className='ms-50' />
      </CardBody>
    </Card>
    </Row>
    </Col>
    <Col>
    <Row>
    <div className="d-flex justify-content-end flex-row mb-1 ">
          <Button
            color="primary"
            size="sm"
            onClick={() => setFormModal(!formModal)}
          >
            <Plus/>  Düzenle
          </Button>
        </div>
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Öğrenim Bilgisi</CardTitle>
      </CardHeader>
      <CardBody className='pt-1'>
        <Timeline data={data} className='ms-50' />
      </CardBody>
    </Card>
    </Row>
    </Col>
    </div>
  );
};

export default KisiselBilgiler;
