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
import { Plus } from "react-feather";

const Deneyimler = () => {
  const [formModal, setFormModal] = useState(false);
  const [kurum_adi, setKurum_adi] = useState("");
  const [unvan_en, setUnvan_en] = useState("");
  const [unvan_tr, setUnvan_tr] = useState("");
  const [baslama_tarihi, setBaslama_tarihi] = useState("");
  const [section, setSection] = useState("");

  const [data, setData] = useState([
    {
      kurum_adi: "Türkiye İş Bankası",
      unvan_en: "Software Developer",
      unvan_tr: "Yazılım Geliştirici",
      baslama_tarihi: "2020",
      section: "Diğer",
    },
  ]);

  const handleSubmit = () => {
    const updatedData = data.concat({
      kurum_adi: kurum_adi,
      unvan_en: unvan_en,
      unvan_tr: unvan_tr,
      baslama_tarihi: baslama_tarihi,
      section: section,
    });
    setData(updatedData);
    setFormModal(!formModal);
    setKurum_adi("");
    setUnvan_en("");
    setUnvan_tr("");
    setBaslama_tarihi("");
    setSection("");
  };

  return (
    <div>
      <div className="modal-header d-flex align-items-center justify-content-center flex-row ">
        <Modal isOpen={formModal} className="modal-dialog-centered">
          <h4 className=" text-center fs-1 my-2">Deneyim ekle</h4>
          <h5 className="text-center text-muted mx-2 ">
            Lütfen bilgileri eksiksiz doldurunuz.
          </h5>
          <ModalBody>
            <div className="m-2">
              <Label className="form-label" for="channel">
                Kurum Adı:
              </Label>
              <Input
                placeholder="Kurum Adı"
                value={kurum_adi}
                onChange={(e) => setKurum_adi(e.target.value)}
              />
            </div>
            <div className="m-2">
              <Label className="form-label">Ünvan (İngilizce):</Label>
              <Input
                placeholder="Ünvan (İngilizce)"
                value={unvan_en}
                onChange={(e) => setUnvan_en(e.target.value)}
              />
            </div>
            <div className="m-2">
              <Label className="form-label">Ünvan (Türkçe):</Label>
              <Input
                placeholder="Ünvan (Türkçe)"
                value={unvan_tr}
                onChange={(e) => setUnvan_tr(e.target.value)}
              />
            </div>
            <div className="m-2">
              <Label className="form-label">Başlama Tarihi:</Label>
              <Input
                placeholder="Başlama Tarihi"
                value={baslama_tarihi}
                onChange={(e) => setBaslama_tarihi(e.target.value)}
              />
            </div>
            <div className="m-2">
              <Label className="form-label">Tür:</Label>
              <Input
                placeholder="Bölüm"
                value={section}
                onChange={(e) => setSection(e.target.value)}
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
      <div className="d-flex justify-content-end flex-row">
        <Button
          color="primary"
          size="sm"
          onClick={() => setFormModal(!formModal)}
        >
          <Plus /> Ekle
        </Button>
      </div>
      <div className="d-flex justify-content-start flex-row mb-1">
        <Badge color="primary" className="px-2 py-1">
          <h5 className="text-center text-white fw-bolderer">Deneyimler</h5>
        </Badge>
      </div>
      {data.map((item) => (
        <Card className="card-app-design ms-5 bg-transparent border-dark shadow-none">
          <>
            <CardHeader>
              <CardTitle tag="h2">
                <span className="">{item.kurum_adi}</span>
              </CardTitle>
            </CardHeader>
            <CardBody>
              <CardText className="font-medium-2 mb-1">
                <span className="fw-bolder">
                  {item.unvan_en}, {item.unvan_tr}
                </span>
              </CardText>
              <div className="justify-content-end align-items-center">
                <Badge color="info">
                  <span className="fw-bolder">{item.baslama_tarihi}</span>
                </Badge>
                <Badge className="ms-1" color="success">
                  <span className="fw-bolder">{item.section}</span>
                </Badge>
              </div>
            </CardBody>
          </>
        </Card>
      ))}
    </div>
  );
};

export default Deneyimler;
