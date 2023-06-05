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
  import { addPatents, getPatents, deletePatents } from "../Firebase";

  
  const Patentler = () => {
    const [formModal, setFormModal] = useState(false);
    const [submit, setSubmit] = useState(false);
    const [title, setTitle] = useState("");
    const [patent_sahibi, setPatent_sahibi] = useState("");
    const [patent_yili, setPatent_yili] = useState("");
    const [patent_turu, setPatent_turu] = useState("");
    const [section, setSection] = useState("");

    const [data, setData] = useState([]);
  
    const handleSubmit = () => {
      if (title !== '' && patent_sahibi !== '' && patent_yili !== '' && patent_turu !== '' && section !== '') {
        addPatents(title, patent_sahibi, patent_yili, patent_turu, section);
        setSubmit(!submit);
        setFormModal(!formModal);
        setTitle("");
        setPatent_sahibi("");
        setPatent_yili("");
        setPatent_turu("");
        setSection("");
      }
    };

    useEffect(() => {
      const fetchData = async () => {
        try{
          const fetchedData = await getPatents();
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
            <h4 className=" text-center fs-1 my-2">Patent ekle</h4>
            <h5 className="text-center text-muted mx-2 ">
              Lütfen bilgileri eksiksiz doldurunuz.
            </h5>
            <ModalBody>
              <div className="m-2">
                <Label className="form-label" for="channel">
                    Patent Başlığı:
                </Label>
                <Input
                    placeholder="Patent Başlığı"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="m-2">
                <Label className="form-label">Patent Sahibi:</Label>
                    <Input
                    placeholder="Patent Sahibi"
                    value={patent_sahibi}
                    onChange={(e) => setPatent_sahibi(e.target.value)}
                    />
              </div>
              <div className="m-2">
                <Label className="form-label">Patent Yılı:</Label>
                    <Input
                    placeholder="Patent Yılı"
                    value={patent_yili}
                    onChange={(e) => setPatent_yili(e.target.value)}
                    />
              </div>
              <div className="m-2">
                <Label className="form-label">Patent Türü:</Label>
                    <Input
                    placeholder="Patent Türü"
                    value={patent_turu}
                    onChange={(e) => setPatent_turu(e.target.value)}
                    />
              </div>
              <div className="m-2">
                <Label className="form-label">Section:</Label>
                    <Input
                    placeholder="Section"
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
  
        {data.map((item) => (
          <Card className="card-app-design">
            <>
              <CardHeader>
                <CardTitle className="mt-1">
                    <h5 className="mb-25">{item.id}. {item.title}</h5>
                </CardTitle>
              </CardHeader>
              <CardBody>
                <CardText className="font-small-2 mb-1">
                    <span className="font-weight-bold">Patent Sahibi:</span>{" "}  
                    {item.patent_sahibi}
                </CardText>
                <div className="design-group mb-2 pt">
                  <Badge className="me-1" color="light-warning">
                        {item.patent_yili}
                  </Badge>
                  <Badge className="me-1" color="light-primary">
                        {item.patent_turu}
                  </Badge>
                  <Badge color="success">{item.section}</Badge>
                </div>
              </CardBody>
            </>
            <div className="d-flex justify-content-start align-items-center flex-row mb-1 ms-1 ">
              <Button
                color="danger"
                size="sm"
                onClick={() => deletePatents(item.title)}
              >
                <Trash /> Sil
              </Button>
            </div>
          </Card>
        ))}
      </div>
    );
  };
  
  export default Patentler;
  