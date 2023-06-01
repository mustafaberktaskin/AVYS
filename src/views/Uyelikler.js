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
  
  const Uyelikler = () => {
    const [formModal, setFormModal] = useState(false);
    const [kurum_adi, setKurum_adi] = useState("");
    const [uye_tipi, setUye_tipi] = useState("");
    const [uyelik_tarihi, setUyelik_tarihi] = useState("");


    const [data, setData] = useState([
      {
        kurum_adi: "IEEE (COMPUTER SOCIETY)",
        uye_tipi: "Öğrenci",
        uyelik_tarihi: "2020",

      },
    ]);
  
    const handleSubmit = () => {
      const updatedData = data.concat({
        kurum_adi: kurum_adi,
        uye_tipi: uye_tipi,
        uyelik_tarihi: uyelik_tarihi,

      });
        setData(updatedData);
        setFormModal(!formModal);
        setKurum_adi("");
        setUye_tipi("");
        setUyelik_tarihi("");
    };
  
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
            <h4 className=" text-center fs-1 my-2">Üyelik ekle</h4>
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
                <Label className="form-label">
                    Üye Tipi:
                    </Label>
                    <Input
                    placeholder="Üye Tipi"
                    value={uye_tipi}
                    onChange={(e) => setUye_tipi(e.target.value)}
                    />
              </div>
              <div className="m-2">
                <Label className="form-label">
                    Üyelik Tarihi:
                    </Label>
                    <Input
                    placeholder="Üyelik Tarihi"
                    value={uyelik_tarihi}
                    onChange={(e) => setUyelik_tarihi(e.target.value)}
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
        <Badge color='success' className="px-2 py-1">
            <h5 className="text-center text-white fw-bolderer">ÜYELİKLER</h5>
      </Badge>
        </div>
  
        {data.map((item) => (
          <Card className="card-app-design ms-5 bg-transparent border-warning shadow-none">
            <>
              <CardHeader>
                <CardTitle tag="h2">
                    <span className="fw-bolder">{item.kurum_adi}</span>
                </CardTitle>
              </CardHeader>
              <CardBody>
              <CardText className="font-medium-2 mb-1">
                    <span className="font-weight-bold">{item.uye_tipi} {item.uyelik_tarihi}</span>{" "}
                    </CardText>          
              </CardBody>
            </>
          </Card>
        ))}
      </div>
    );
  };
  
  export default Uyelikler;
  