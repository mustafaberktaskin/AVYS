import { useState, useEffect } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Table,
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  Label,
  Input,
} from "reactstrap";
import { Plus, Trash } from "react-feather";
import { addDeclaration, getDeclarations, deleteDeclarations } from "../Firebase";

const Bildiriler = () => {
  const [open, setOpen] = useState("");

  const toggle = (id) => {
    open === id ? setOpen() : setOpen(id);
  };

  const [data, setData] = useState([
    {
        id: 1,
        bildiri_adi: "Affirmative contributions of mobile devices to distance education",
        bildiri_sahibi: "Ferdi Sönmez",
        bildiri_yayin_yeri: "International Conference on Science, Technology, Engineering and Management ",
        bildiri_yayin_tarihi: "2014" 
    },
  ]);

    const [formModal, setFormModal] = useState(false);
    const [submit, setSubmit] = useState(false);
    const [bildiri_adi, setbildiri_adi] = useState("");
    const [bildiri_sahibi, setbildiri_sahibi] = useState("");
    const [bildiri_yayin_yeri, setbildiri_yayin_yeri] = useState("");
    const [bildiri_yayin_tarihi, setbildiri_yayin_tarihi] = useState("");

    const handleSubmit = () => {
      if( bildiri_adi !== '' && bildiri_sahibi !== '' && bildiri_yayin_yeri !== '' && bildiri_yayin_tarihi !== ''){
        addDeclaration(bildiri_adi, bildiri_sahibi, bildiri_yayin_yeri, bildiri_yayin_tarihi);
        setSubmit(!submit);
        setFormModal(!formModal);
        setbildiri_adi("");
        setbildiri_sahibi("");
        setbildiri_yayin_yeri("");
        setbildiri_yayin_tarihi("");
      }
    };

    useEffect(() => {
      const fetchData = async () => {
        try {
          const fetchedData = await getDeclarations();
          setData(fetchedData);
        } catch (error) {
          console.log(error);
        }
      };
      fetchData();
    }, [submit,data]);

  return (
    <div id="dersler">
      <h1>Bildiriler</h1>
      <Accordion className="accordion-margin" open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId="1">Tümü</AccordionHeader>
          <AccordionBody accordionId="1">
            <div className="d-flex justify-content-end flex-row mb-1 ">
              <Button
                color="primary"
                size="sm"
                onClick={() => setFormModal(!formModal)}
              >
                <Plus /> Ekle
              </Button>
              <div className="modal-header d-flex align-items-center justify-content-center flex-row ">
        <Modal isOpen={formModal} className="modal-dialog-centered">
          <h4 className=" text-center fs-1 my-2">Bildiri ekle</h4>
          <h5 className="text-center text-muted mx-2 ">
            Lütfen bilgileri eksiksiz doldurunuz.
          </h5>
          <ModalBody>
            <div className="m-2">
              <Label className="form-label" for="channel">
                Bildiri Adı:
                </Label>
                <Input
                placeholder="bildiri Adı"
                value={bildiri_adi}
                onChange={(e) => setbildiri_adi(e.target.value)}
                />
            </div>
            <div className="m-2">
                <Label className="form-label" for="channel">
                Bildiri Sahibi:
                </Label>
                <Input
                placeholder="bildiri Sahibi"
                value={bildiri_sahibi}
                onChange={(e) => setbildiri_sahibi(e.target.value)}
                />
            </div>
            <div className="m-2">
                <Label className="form-label" for="channel">
                Bildiri Yayın Yeri:
                </Label>
                <Input
                placeholder="bildiri Yayın Yeri"
                value={bildiri_yayin_yeri}
                onChange={(e) => setbildiri_yayin_yeri(e.target.value)}
                />
            </div>
            <div className="m-2">
                <Label className="form-label" for="channel">
                Bildiri Yayın Tarihi:
                </Label>
                <Input
                placeholder="bildiri Yayın Tarihi"
                value={bildiri_yayin_tarihi}
                onChange={(e) => setbildiri_yayin_tarihi(e.target.value)}
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
            </div>
            <Table striped responsive>
              <thead>
                <tr>
                    <th>Bildiri Adı</th>
                    <th>Bildiri Sahibi</th>
                    <th>Bildiri Yayın Yeri</th>
                    <th>Bildiri Yayın Tarihi</th>
                    <th>İşlemler</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    <td>{item.bildiri_adi}</td>
                    <td>{item.bildiri_sahibi}</td>
                    <td>{item.bildiri_yayin_yeri}</td>
                    <td>{item.bildiri_yayin_tarihi}</td>
                    <td>
                      <Button.Ripple
                        color="flat-danger"
                        onClick={() => deleteDeclarations(item.bildiri_adi)}
                      >
                        <Trash className="mr-50" size={15} />
                      </Button.Ripple>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>    
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="2">Uluslararası Konferanslarda</AccordionHeader>
          <AccordionBody accordionId="2">
            <div className="d-flex justify-content-end flex-row mb-1 ">
              <Button
                color="primary"
                size="sm"
                onClick={() => setFormModal(!formModal)}
              >
                <Plus /> Ekle
              </Button>
              <div className="modal-header d-flex align-items-center justify-content-center flex-row ">
        <Modal isOpen={formModal} className="modal-dialog-centered">
          <h4 className=" text-center fs-1 my-2">Bildiri ekle</h4>
          <h5 className="text-center text-muted mx-2 ">
            Lütfen bilgileri eksiksiz doldurunuz.
          </h5>
          <ModalBody>
            <div className="m-2">
              <Label className="form-label" for="channel">
                Bildiri Adı:
                </Label>
                <Input
                placeholder="bildiri Adı"
                value={bildiri_adi}
                onChange={(e) => setbildiri_adi(e.target.value)}
                />
            </div>
            <div className="m-2">
                <Label className="form-label" for="channel">
                Bildiri Sahibi:
                </Label>
                <Input
                placeholder="bildiri Sahibi"
                value={bildiri_sahibi}
                onChange={(e) => setbildiri_sahibi(e.target.value)}
                />
            </div>
            <div className="m-2">
                <Label className="form-label" for="channel">
                Bildiri Yayın Yeri:
                </Label>
                <Input
                placeholder="bildiri Yayın Yeri"
                value={bildiri_yayin_yeri}
                onChange={(e) => setbildiri_yayin_yeri(e.target.value)}
                />
            </div>
            <div className="m-2">
                <Label className="form-label" for="channel">
                Bildiri Yayın Tarihi:
                </Label>
                <Input
                placeholder="bildiri Yayın Tarihi"
                value={bildiri_yayin_tarihi}
                onChange={(e) => setbildiri_yayin_tarihi(e.target.value)}
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
            </div>
            <Table striped responsive>
              <thead>
                <tr>
                    <th>Bildiri Adı</th>
                    <th>Bildiri Sahibi</th>
                    <th>Bildiri Yayın Yeri</th>
                    <th>Bildiri Yayın Tarihi</th>
                    <th>İşlemler</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    <td>{item.bildiri_adi}</td>
                    <td>{item.bildiri_sahibi}</td>
                    <td>{item.bildiri_yayin_yeri}</td>
                    <td>{item.bildiri_yayin_tarihi}</td>
                    <td>
                      <Button.Ripple
                        color="flat-danger"
                        onClick={() => handleDelete(index)}
                      >
                        <Trash className="mr-50" size={15} />
                      </Button.Ripple>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="3">Ulusal Konferanslarda</AccordionHeader>
          <AccordionBody accordionId="3">
            <div className="d-flex justify-content-end flex-row mb-1 ">
              <Button
                color="primary"
                size="sm"
                onClick={() => setFormModal(!formModal)}
              >
                <Plus /> Ekle
              </Button>
              <div className="modal-header d-flex align-items-center justify-content-center flex-row ">
        <Modal isOpen={formModal} className="modal-dialog-centered">
          <h4 className=" text-center fs-1 my-2">Bildiri ekle</h4>
          <h5 className="text-center text-muted mx-2 ">
            Lütfen bilgileri eksiksiz doldurunuz.
          </h5>
          <ModalBody>
            <div className="m-2">
              <Label className="form-label" for="channel">
                Bildiri Adı:
                </Label>
                <Input
                placeholder="bildiri Adı"
                value={bildiri_adi}
                onChange={(e) => setbildiri_adi(e.target.value)}
                />
            </div>
            <div className="m-2">
                <Label className="form-label" for="channel">
                Bildiri Sahibi:
                </Label>
                <Input
                placeholder="bildiri Sahibi"
                value={bildiri_sahibi}
                onChange={(e) => setbildiri_sahibi(e.target.value)}
                />
            </div>
            <div className="m-2">
                <Label className="form-label" for="channel">
                Bildiri Yayın Yeri:
                </Label>
                <Input
                placeholder="bildiri Yayın Yeri"
                value={bildiri_yayin_yeri}
                onChange={(e) => setbildiri_yayin_yeri(e.target.value)}
                />
            </div>
            <div className="m-2">
                <Label className="form-label" for="channel">
                Bildiri Yayın Tarihi:
                </Label>
                <Input
                placeholder="bildiri Yayın Tarihi"
                value={bildiri_yayin_tarihi}
                onChange={(e) => setbildiri_yayin_tarihi(e.target.value)}
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
            </div>
            <Table striped responsive>
              <thead>
                <tr>
                    <th>Bildiri Adı</th>
                    <th>Bildiri Sahibi</th>
                    <th>Bildiri Yayın Yeri</th>
                    <th>Bildiri Yayın Tarihi</th>
                    <th>İşlemler</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    <td>{item.bildiri_adi}</td>
                    <td>{item.bildiri_sahibi}</td>
                    <td>{item.bildiri_yayin_yeri}</td>
                    <td>{item.bildiri_yayin_tarihi}</td>
                    <td>
                      <Button.Ripple
                        color="flat-danger"
                        onClick={() => handleDelete(index)}
                      >
                        <Trash className="mr-50" size={15} />
                      </Button.Ripple>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
export default Bildiriler;
