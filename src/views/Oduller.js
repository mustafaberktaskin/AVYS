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
  import { addRewards, getRewards, deleteRewards } from "../Firebase";
  
  const Oduller = () => {
    const [formModal, setFormModal] = useState(false);
    const [submit, setSubmit] = useState(false);
    const [yil, setYil] = useState("");
    const [universite, setUniversite] = useState("");
    const [odul, setOdul] = useState("");
    const [tur, setTur] = useState("");
    const [ulke, setUlke] = useState("");

    const [data, setData] = useState([]);
  
    const handleSubmit = () => {
      if (yil !== '' && universite !== '' && odul !== '' && tur !== '' && ulke !== '') {
        addRewards(yil, universite, odul, tur, ulke);
        setSubmit(!submit);
        setFormModal(!formModal);
        setYil("");
        setUniversite("");
        setOdul("");
        setTur("");
        setUlke("");
      }
    };

    useEffect(() => {
      const fetchData = async () => {
        try{
          const fetchedData = await getRewards();
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
            <h4 className=" text-center fs-1 my-2">Ödül ekle</h4>
            <h5 className="text-center text-muted mx-2 ">
              Lütfen bilgileri eksiksiz doldurunuz.
            </h5>
            <ModalBody>
              <div className="m-2">
                <Label className="form-label" for="channel">
                    Yıl:
                    </Label>
                    <Input
                    placeholder="Yıl"
                    value={yil}
                    onChange={(e) => setYil(e.target.value)}
                    />
              </div>
              <div className="m-2">
                <Label className="form-label">
                    Üniversite:
                    </Label>
                    <Input
                    placeholder="Üniversite"
                    value={universite}
                    onChange={(e) => setUniversite(e.target.value)}
                    />
              </div>
              <div className="m-2">
                <Label className="form-label">
                    Ödül:
                    </Label>
                    <Input
                    placeholder="Ödül"
                    value={odul}
                    onChange={(e) => setOdul(e.target.value)}
                    />
              </div>
              <div className="m-2">
                <Label className="form-label">
                    Tür:
                    </Label>
                    <Input
                    placeholder="Tür"
                    value={tur}
                    onChange={(e) => setTur(e.target.value)}
                    />
              </div>
              <div className="m-2">
                <Label className="form-label">  
                    Ülke:
                    </Label>
                    <Input
                    placeholder="Ülke"
                    value={ulke}
                    onChange={(e) => setUlke(e.target.value)}
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
            <h5 className="text-center text-white fw-bolderer">ÖDÜLLER</h5>
      </Badge>
        </div>
  
        {data.map((item) => (
          <Card className="card-app-design justify-content-center align-items-center text-center w-50 ms-5">
            <>
              <CardHeader>
                <Badge color="warning" className="p-1">
                    <h5 className="fw-bolder">{item.yil}</h5>
                </Badge>
              </CardHeader>
              <CardBody>
              <CardText className="font-large-1 mb-1">
                    <span className="font-weight-bold">{item.odul}</span>{" "}
                    </CardText>
                <CardText className="font-small-2 mb-1">
                    <span className="font-weight-bold">{item.universite}</span>{" "}    
                </CardText>
                    <CardText className="font-small-2">
                    <span className="font-weight-bold">{item.tur},{item.ulke}</span>{" "}
                    </CardText>           
              </CardBody>
              <Button
                color="danger"
                size="sm"
                className="mb-1"
                onClick={() => deleteRewards(item.odul)}
              >
                Sil
              </Button>
            </>
          </Card>
        ))}
      </div>
    );
  };
  
  export default Oduller;
  