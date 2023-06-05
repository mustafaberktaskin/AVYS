import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  Badge,
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  Label,
  Input,
} from "reactstrap";
import { useState, useEffect } from "react";
import { Plus, Trash } from "react-feather";
import { addProjects, getProjects, deleteProjects} from "../Firebase";


const Projeler = () => {
  const [formModal, setFormModal] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [title, setTitle] = useState("");
  const [proje_sahibi, setProje_sahibi] = useState("");
  const [yayın_yeri, setYayın_yeri] = useState("");
  const [proje_baslangic, setProje_baslangic] = useState("");
  const [proje_bitis, setProje_bitis] = useState("");
  const [maliyet, setMaliyet] = useState("");
  const [tamamlanma_durumu, setTamamlanma_durumu] = useState("");
  const [proje_turu, setProje_turu] = useState("");

  const [data, setData] = useState([]);

  const handleSubmit = () => {
    if (title !== '' && proje_sahibi !== '' && yayın_yeri !== '' && proje_baslangic !== '' && proje_bitis !== '' && maliyet !== '' && tamamlanma_durumu !== '' && proje_turu !== '') {
      addProjects(title, proje_sahibi, yayın_yeri, proje_baslangic, proje_bitis, maliyet, tamamlanma_durumu, proje_turu);
      setSubmit(!submit);
      setFormModal(!formModal);
      setTitle("");
      setProje_sahibi("");
      setYayın_yeri("");
      setProje_baslangic("");
      setProje_bitis("");
      setMaliyet("");
      setTamamlanma_durumu("");
      setProje_turu("");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try{
        const fetchedData = await getProjects();
        setData(fetchedData);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [submit,data]);



  return (
    <div>
      <div className="d-flex justify-content-end flex-row mb-1 ">
        <Button
          color="primary"
          size="sm"
          onClick={() => setFormModal(!formModal)}
        >
          <Plus /> Düzenle
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
                Proje Adı:
              </Label>
              <Input
                placeholder="Kitap Adı"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="m-2">
              <Label className="form-label">Proje Sahibi:</Label>
                <Input
                placeholder="Proje Sahibi"
                value={proje_sahibi}
                onChange={(e) => setProje_sahibi(e.target.value)}
                />
            </div>
            <div className="m-2">
              <Label className="form-label">Yayın Yeri:</Label>
                <Input
                placeholder="Yayın Yeri"
                value={yayın_yeri}
                onChange={(e) => setYayın_yeri(e.target.value)}
                />
            </div>
            <div className="m-2">
              <Label className="form-label">Proje Başlangıç Tarihi:</Label>
                <Input
                placeholder="Proje Başlangıç Tarihi"
                type="date"
                value={proje_baslangic}
                onChange={(e) => setProje_baslangic(e.target.value)}
                />
            </div>
            <div className="m-2">
              <Label className="form-label">Proje Bitiş Tarihi:</Label>
                <Input
                placeholder="Proje Bitiş Tarihi"
                type="date"
                value={proje_bitis}
                onChange={(e) => setProje_bitis(e.target.value)}
                />
            </div>
            <div className="m-2">
              <Label className="form-label">Maliyet:</Label>
                <Input
                placeholder="Maliyet"
                type="number"
                value={maliyet}
                onChange={(e) => setMaliyet(e.target.value)}
                />
            </div>
            <div className="m-2">
              <Label className="form-label">
                Tamamlanma Durumu:
                </Label>
                <Input
                placeholder="Tamamlanma Durumu"
                value={tamamlanma_durumu}
                onChange={(e) => setTamamlanma_durumu(e.target.value)}
                />
            </div>
            <div className="m-2">
              <Label className="form-label">Proje Türü:</Label>
                <Input
                placeholder="Proje Türü"
                value={proje_turu}
                onChange={(e) => setProje_turu(e.target.value)}
                />
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
            <Button color="primary" onClick={handleSubmit}>
              Kaydet
            </Button>
          </ModalFooter>
        </Modal>
      </div>

      {data.map((item) => (
        <Card className="card-app-design">
          <>
            <CardHeader>
              <CardTitle className="mt-1">
                {item.title}
              </CardTitle>
            </CardHeader>
            <CardBody>
              <CardText className="font-small-2 mb-1">
                <span className="font-weight-bold">Proje Sahibi:</span>{" "}
                {item.proje_sahibi}
              </CardText>
              <div className="design-group mb-2 pt">
                <Badge className="me-1" color="light-warning">
                    {item.yayın_yeri}
                </Badge>
                <Badge className="me-1" color="light-primary">
                    {item.proje_turu}
                </Badge>
                <Badge color="success">{item.tamamlanma_durumu}</Badge>
                <CardText className="font-small-2 mt-2">
                <span className="font-weight-bold">Proje Başlangıç Tarihi:</span>{" "}
                {item.proje_baslangic}- {item.proje_bitis}, {item.maliyet} TL
                </CardText>
              </div>
              <div className='design-group'>
        <Button.Ripple
          color='danger'
          outline
          size='sm'
          onClick={() => {
            deleteProjects(item.title);
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
  );
};

export default Projeler;
