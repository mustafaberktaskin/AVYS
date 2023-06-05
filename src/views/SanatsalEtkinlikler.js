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
  import { Plus, Trash} from "react-feather";
  import { addActivitys, getActivitys, deleteActivitys} from "../Firebase";
  
  const SanatsalEtkinlikler = () => {
    const [formModal, setFormModal] = useState(false);
    const [submit, setSubmit] = useState(false);
    const [katilim_turu, setKatilim_turu] = useState("");
    const [etkinlik_adi, setEtkinlik_adi] = useState("");
    const [etkinlik_tarihi, setEtkinlik_tarihi] = useState("");
    const [etkinlik_yeri, setEtkinlik_yeri] = useState("");
    const [etkinlik_konusu, setEtkinlik_konusu] = useState("");




    const [data, setData] = useState([]);
  
    const handleSubmit = () => {
      if (katilim_turu !== '' && etkinlik_adi !== '' && etkinlik_tarihi !== '' && etkinlik_yeri !== '' && etkinlik_konusu !== '') {
        addActivitys(katilim_turu, etkinlik_adi, etkinlik_tarihi, etkinlik_yeri, etkinlik_konusu);
        setSubmit(!submit);
        setFormModal(!formModal);
        setKatilim_turu("");
        setEtkinlik_adi("");
        setEtkinlik_tarihi("");
        setEtkinlik_yeri("");
        setEtkinlik_konusu("");
      }
    };

    useEffect(() => {
      const fetchData = async () => {
        try{
          const fetchedData = await getActivitys();
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
            <Plus /> Ekle
          </Button>
        </div>
        <div className="modal-header d-flex align-items-center justify-content-center flex-row ">
          <Modal isOpen={formModal} className="modal-dialog-centered">
            <h4 className=" text-center fs-1 my-2">Sanatsal Etkinlik ekle</h4>
            <h5 className="text-center text-muted mx-2 ">
              Lütfen bilgileri eksiksiz doldurunuz.
            </h5>
            <ModalBody>
              <div className="m-2">
                <Label className="form-label">
                    Katılım Türü:
                    </Label>
                    <Input
                    placeholder="Katılım Türü"
                    value={katilim_turu}
                    onChange={(e) => setKatilim_turu(e.target.value)}
                    />
              </div>
              <div className="m-2">
                <Label className="form-label">
                    Etkinlik Adı:
                    </Label>
                    <Input
                    placeholder="Etkinlik Adı"
                    value={etkinlik_adi}
                    onChange={(e) => setEtkinlik_adi(e.target.value)}
                    />
              </div>
                <div className="m-2">
                <Label className="form-label">
                    Etkinlik Tarihi:
                    </Label>
                    <Input
                    placeholder="Etkinlik Tarihi"
                    value={etkinlik_tarihi}
                    onChange={(e) => setEtkinlik_tarihi(e.target.value)}
                    />
                </div>
                <div className="m-2">
                <Label className="form-label">
                    Etkinlik Yeri:
                    </Label>
                    <Input
                    placeholder="Etkinlik Yeri"
                    value={etkinlik_yeri}
                    onChange={(e) => setEtkinlik_yeri(e.target.value)}
                    />
                </div>
                <div className="m-2">
                <Label className="form-label">
                    Etkinlik Konusu:
                    </Label>
                    <Input
                    placeholder="Etkinlik Konusu"
                    value={etkinlik_konusu}
                    onChange={(e) => setEtkinlik_konusu(e.target.value)}
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
        <div className="d-flex justify-content-start flex-row mb-1">
        <Badge color='danger' className="px-2 py-1">
            <h5 className="text-center text-white fw-bolderer">SANATSAL ETKİNLİKLER</h5>
      </Badge>
        </div>
  
        {data.map((item) => (
          <Card className="card-app-design ms-5 bg-transparent border-warning shadow-none">
            <>
                <CardBody className="d-flex flex-row justify-content-between">
                <div className="d-flex flex-column">
                    <h5 className="fw-bolder">{item.etkinlik_adi}</h5>
                    <h6 className="text-bolder">{item.katilim_turu}</h6>
                    <h6 className="text-muted">{item.etkinlik_tarihi}</h6>
                    <h5 className="fw-bolder">{item.etkinlik_yeri}</h5>
                    <h6 className="text-bolder">{item.etkinlik_konusu}</h6>
                    <h5 className="fw-bolder">{item.etkinlik_icerigi}</h5>
                </div>
                <div className="d-flex flex-column justify-content-center">
                    <Button
                    color="danger"
                    size="sm"
                    onClick={() => deleteActivitys(item.etkinlik_adi)}
                    >
                    <Trash />
                    </Button>
                </div>
                </CardBody>
            </>
          </Card>
        ))}
      </div>
    );
  };
  
  export default SanatsalEtkinlikler;
  