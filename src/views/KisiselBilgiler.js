import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  CardText
} from "reactstrap";

import { useState,useEffect } from 'react'
import Timeline from '@components/timeline'

import { db, addAcademicRecord, getAcademicRecord, addEducationRecord, getEducationRecord, deleteAcademicRecord, deleteEducationRecord} from "../Firebase";


const KisiselBilgiler = () => {
  
  const [data, setData] = useState([])
  const [educationData, setEducationData] = useState([])
  const [formModal, setFormModal] = useState(false)
  const [submit, setSubmit] = useState(false)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [customContent, setCustomContent] = useState('')
  const [gorev, setGorev] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [educationTitle, setEducationTitle] = useState('')
  const [educationContent, setEducationContent] = useState('')
  const [educationCustomContent, setEducationCustomContent] = useState('')
  const [educationStartDate, setEducationStartDate] = useState('')
  const [educationEndDate, setEducationEndDate] = useState('')
  const [educationFormModal, setEducationFormModal] = useState(false)
  const [educationSubmit, setEducationSubmit] = useState(false)

  const handleAddEducationSubmit = () => {
    if(educationTitle !== '' && educationContent !== ''&& educationStartDate !== '' && educationEndDate !== '') {
      addEducationRecord(educationTitle,educationContent,educationStartDate,educationEndDate)
        .then(() => {
          setEducationSubmit(true)
          setEducationFormModal(!educationFormModal)
        })
        .catch(error => {
          console.error('Error adding education record: ', error);
        });
    } else {
      alert("Please fill in all fields.");
    }
  }


  useEffect(() => {
    const fetchData2 = async () => {
      try {
        const fetchedData2 = await getEducationRecord()
        setEducationData(fetchedData2)
      } catch (error) {
        console.error('Error getting education records: ', error);
      } 
    }
    fetchData2()
  }, [educationSubmit, educationData])


  const handleAddSubmit = () => {
    if(title !== '' && content !== '' && gorev !== '' && startDate !== '' && endDate !== '') {
      addAcademicRecord(title,content,gorev,startDate,endDate)
        .then(() => {
          setSubmit(true)
          setFormModal(!formModal)
        })
        .catch(error => {
          console.error('Error adding academic record: ', error);
        });
    } else {
      alert("Please fill in all fields.");
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await getAcademicRecord()
        setData(fetchedData)
      } catch (error) {
        console.error('Error getting academic records: ', error);
      }
    }
    fetchData()
  }, [submit, data])


  return (
    <div>
      <div className="d-flex justify-content-end flex-row mb-1 ">
      <Button
        color="primary"
        size="sm"
        onClick={() => setFormModal(!formModal)}
      >
        Ekle
      </Button>
      </div>
      <Modal isOpen={formModal} toggle={() => setFormModal(!formModal)}>
        <ModalHeader toggle={() => setFormModal(!formModal)}>Kişisel Bilgileri Düzenle</ModalHeader>
        <ModalBody>
          <Label for="university">Üniversite Adı:</Label>
          <Input id="university" placeholder="Üniversite Adı" value={title} onChange={e => setTitle(e.target.value)} />
          <Label for="department">Bölüm Adı:</Label>
          <Input id="department" placeholder="Bölüm Adı" value={content} onChange={e => setContent(e.target.value)} />
          <Label for="duty">Görev Adı:</Label>
          <Input id="duty" placeholder="Görev Adı" value={gorev} onChange={e => setGorev(e.target.value)} />
          <Label for="start-date">Başlangıç Tarihi:</Label>
          <Input id="start-date" placeholder="Başlangıç Tarihi" value={startDate} onChange={e => setStartDate(e.target.value)} />
          <Label for="end-date">Bitiş Tarihi:</Label>
          <Input id="end-date" placeholder="Bitiş Tarihi" value={endDate} onChange={e => setEndDate(e.target.value)} />
        </ModalBody>
        <ModalFooter>
          <Button color="dark" onClick={() => setFormModal(!formModal)}>Vazgeç</Button>
          <Button color="primary" onClick={handleAddSubmit}>Kaydet</Button>
        </ModalFooter>
      </Modal>
      <Card>
        <CardHeader>
          <CardTitle tag='h4'>Akademik Görevler</CardTitle>
        </CardHeader>
        <CardBody className='pt-1'>
          <Timeline data={
            data.map((item) => {
              return {
                title: item.title,
                content: item.content,
                customContent: (
                  <div className='d-flex align-items-center'>
                  <div className='avatar bg-light-primary me-1'>
                    <div className='ms-50'> 
                    <h6>{item.gorev}</h6>
                    </div>
                  </div>
                  <CardText tag='span' className='mb-0 font-weight-bold'>
                    {item.startDate} - {item.endDate}
                  </CardText>
                    <Button 
                    className="ms-50"
            color="danger"
            size="sm"
            onClick={() => { 
              deleteAcademicRecord(item.title)
              setSubmit(true)
            }}
          >
            Sil
          </Button>
                  </div>
                )
              }
            })
          } className='ms-50' />
        </CardBody>
      </Card>
      <div className="d-flex justify-content-end flex-row mb-1 ">
      <Button
        color="primary"
        size="sm"
        onClick={() => setEducationFormModal(!educationFormModal)}
      > 
        Ekle
      </Button>
      </div>
      <Modal isOpen={educationFormModal} toggle={() => setEducationFormModal(!educationFormModal)}>

        <ModalHeader toggle={() => setEducationFormModal(!educationFormModal)}>Eğitim Bilgileri Düzenle</ModalHeader>
        <ModalBody>
          <Label for="university">Üniversite Adı:</Label>

          <Input id="university" placeholder="Üniversite Adı" value={educationTitle} onChange={e => setEducationTitle(e.target.value)} />
          <Label for="department">Bölüm Adı:</Label>
          <Input id="department" placeholder="Bölüm Adı" value={educationContent} onChange={e => setEducationContent(e.target.value)} />
          <Label for="start-date">Başlangıç Tarihi:</Label>
          <Input id="start-date" placeholder="Başlangıç Tarihi" value={educationStartDate} onChange={e => setEducationStartDate(e.target.value)} />
          <Label for="end-date">Bitiş Tarihi:</Label>
          <Input id="end-date" placeholder="Bitiş Tarihi" value={educationEndDate} onChange={e => setEducationEndDate(e.target.value)} />
        </ModalBody>
        <ModalFooter>
          <Button color="dark" onClick={() => setEducationFormModal(!educationFormModal)}>Vazgeç</Button>
          <Button color="primary" onClick={handleAddEducationSubmit}>Kaydet</Button>
        </ModalFooter>
      </Modal>
      <Card>
        <CardHeader>
          <CardTitle tag='h4'>Eğitim Bilgileri</CardTitle>
        </CardHeader>
        <CardBody className='pt-1'>
          <Timeline data= {
            educationData.map((item2) => {
              return {
                educationTitle: item2.educationTitle,
                educationContent: item2.educationContent,
                educationStartDate: item2.educationStartDate,
                educationEndDate: item2.educationEndDate,
                customContent: (
                  <div>
                    <p className = "fw-bold">{item2.educationTitle}</p>
                    <p>{item2.educationContent}</p>
                    <p>{item2.educationStartDate} - {item2.educationEndDate}</p>
                    <Button 
            color="danger"
            size="sm"
            onClick={() => { 
              deleteEducationRecord(item2.educationTitle)
              setSubmit(true)
            }}
          >
            Sil
          </Button>
                  </div>
                  
                )    
              }
            })
          } className='ms-50' />
        </CardBody>
      </Card>
    </div>
  );
};

export default KisiselBilgiler;
