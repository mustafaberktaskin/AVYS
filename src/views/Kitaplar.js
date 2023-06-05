import { Card, CardHeader, CardBody, CardTitle, CardText, Badge, Button, Modal, ModalBody, ModalFooter, Label, Input } from "reactstrap";
import { useState,useEffect } from 'react'
import { Plus } from 'react-feather'
import { addBooks, getBooks, deleteBooks } from "../Firebase";


const Kitaplar = () => {

  const [formModal, setFormModal] = useState(false);
  const [title, setTitle] = useState('');
  const [kitap_bolum, setKitap_bolum] = useState('');
  const [yazar, setYazar] = useState('');
  const [yayın_yeri, setYayın_yeri] = useState('');
  const [editor, setEditor] = useState('');
  const [basim_sayisi, setBasim_sayisi] = useState('');
  const [ISBN, setISBN] = useState('');
  const [basim_tarihi, setBasim_tarihi] = useState('');
  const [kitap_turu, setKitap_turu] = useState('');
  const [data, setData] = useState([]);
  const [submit, setSubmit] = useState(false);
  
  
  const handleSubmit = () => {
    if(title !== '' && kitap_bolum !== '' && yazar !== '' && yayın_yeri !== '' && editor !== '' && basim_sayisi !== '' && ISBN !== '' && basim_tarihi !== '' && kitap_turu !== ''){
      addBooks(title,kitap_bolum,yazar,yayın_yeri,editor,basim_sayisi,ISBN,basim_tarihi,kitap_turu)
      .then(() => {
        setSubmit(true);
        setFormModal(!formModal);
        setTitle('');
        setKitap_bolum('');
        setYazar('');
        setYayın_yeri('');
        setEditor('');
        setBasim_sayisi('');
        setISBN('');
        setBasim_tarihi('');
        setKitap_turu('');
      }
      )
      .catch((err) => console.log(err));
    }else{
      alert('Lütfen tüm alanları doldurunuz.');
    }
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await getBooks();
        setData(fetchedData);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [submit, data]);
  return (
    <div>
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
              <h4 className=" text-center fs-1 my-2">Kitap ekle</h4>
              <h5 className="text-center text-muted mx-2 ">
                Lütfen bilgileri eksiksiz doldurunuz.
              </h5>
              <ModalBody>
                <div className="m-2">
                  <Label className="form-label" for="channel">
                    Kitap Adı:
                  </Label>
                  <Input  placeholder="Kitap Adı" value={title} onChange={e => setTitle(e.target.value)} />
                </div>
                <div className="m-2">
                  <Label className="form-label">
                    Kitap Bölümü:
                  </Label>
                  <Input  placeholder="Kitap Bölümü" value={kitap_bolum} onChange={e => setKitap_bolum(e.target.value)} />
                </div>
                <div className="m-2">
                  <Label className="form-label">
                    Yazar:
                  </Label>
                  <Input  placeholder="Yazar" value={yazar} onChange={e => setYazar(e.target.value)} />
                </div>
                <div className="m-2">
                  <Label className="form-label">
                    Yayın Yeri: 
                  </Label>
                  <Input  placeholder="Yayın Yeri" value={yayın_yeri} onChange={e => setYayın_yeri(e.target.value)} />
                </div>
                <div className="m-2">
                  <Label className="form-label">
                    Editör:
                  </Label>
                  <Input  placeholder="Editör" value={editor} onChange={e => setEditor(e.target.value)} />
                </div>
                <div className="m-2">
                  <Label className="form-label">
                    Basım Sayısı:
                  </Label>
                  <Input  placeholder="Basım Sayısı" value={basim_sayisi} onChange={e => setBasim_sayisi(e.target.value)} />
                </div>
                <div className="m-2">
                  <Label className="form-label">
                    ISBN:
                  </Label>
                  <Input  placeholder="ISBN" value={ISBN} onChange={e => setISBN(e.target.value)} />
                </div>
                <div className="m-2">
                  <Label className="form-label">
                    Basım Tarihi:
                  </Label>
                  <Input  placeholder="Basım Tarihi" value={basim_tarihi} onChange={e => setBasim_tarihi(e.target.value)} />
                </div>
                <div className="m-2">
                  <Label className="form-label">
                    Kitap Türü:
                  </Label>
                  <Input  placeholder="Kitap Türü" value={kitap_turu} onChange={e => setKitap_turu(e.target.value)} />
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
                  onClick= {handleSubmit}
                >
                  Kaydet
                </Button>
                </ModalFooter>
            </Modal>
          </div>

    {data.map((item) => (
    <Card className='card-app-design'>
        <>
      <CardHeader>
        <CardTitle className='mt-1'>{item.title}</CardTitle>
     </CardHeader>
    <CardBody>
      <CardText className='font-small-2 mb-2'>
        Yazar: {item.yazar}, Yayın yeri: {item.yayın_yeri}, Editör: {item.editor}, Basım yılı: {item.basim_sayisi}, ISBN: {item.ISBN}
      </CardText>
      <div className='design-group mb-2 pt-50'>
        <Badge className='me-1' color='light-warning'>
          {item.basim_tarihi}
        </Badge>
        <Badge className='me-1' color='light-primary'>{item.kitap_turu}</Badge>
        <Badge color='success'>{item.kitap_bolum}</Badge>
      </div>
      <div className='design-group'>
        <Button.Ripple
          color='danger'
          outline
          size='sm'
          onClick={() => {
            deleteBooks(item.title);
          }}
        >
          Sil
        </Button.Ripple>
      </div>
    </CardBody>
    </>
  </Card>
    ))}
    </div>
  )
}


export default Kitaplar;
