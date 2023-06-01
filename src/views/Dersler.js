import { useState } from "react";
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

const Dersler = () => {
  const [open, setOpen] = useState("");

  const toggle = (id) => {
    open === id ? setOpen() : setOpen(id);
  };

  const [data, setData] = useState([
    {
      donem: "2020-2021",
      ders_adi: "Veri Yapıları",
      dili: "Türkçe",
      saat: "3",
    },
  ]);

    const [formModal, setFormModal] = useState(false);
    const [donem, setDonem] = useState("");
    const [ders_adi, setDers_adi] = useState("");
    const [dili, setDili] = useState("");
    const [saat, setSaat] = useState("");

    const handleSubmit = () => {
        const updatedData = data.concat({
            donem: donem,
            ders_adi: ders_adi,
            dili: dili,
            saat: saat,
        });
        setData(updatedData);
        setFormModal(!formModal);
        setDonem("");
        setDers_adi("");
        setDili("");
        setSaat("");
    };
    
    const handleDelete = (donem) => {   
        const updatedData = data.filter((item) => item.donem !== donem);
        setData(updatedData);
    };

  return (
    <div id="dersler">
      <h1>Dersler</h1>
      <Accordion className="accordion-margin" open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId="1">Önlisans</AccordionHeader>
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
          <h4 className=" text-center fs-1 my-2">Ders ekle</h4>
          <h5 className="text-center text-muted mx-2 ">
            Lütfen bilgileri eksiksiz doldurunuz.
          </h5>
          <ModalBody>
            <div className="m-2">
              <Label className="form-label" for="channel">
                Dönem:
                </Label>
                <Input
                placeholder="Dönem"
                value={donem}
                onChange={(e) => setDonem(e.target.value)}
                />
            </div>
            <div className="m-2">
                <Label className="form-label">Ders Adı:</Label>
                <Input
                placeholder="Ders Adı"
                value={ders_adi}
                onChange={(e) => setDers_adi(e.target.value)}
                />
            </div>
            <div className="m-2">
              <Label className="form-label">Dili:</Label>
                <Input
                placeholder="Dili"
                value={dili}
                onChange={(e) => setDili(e.target.value)}
                />
            </div>
            <div className="m-2">
                <Label className="form-label">Saat:</Label>
                <Input
                placeholder="Saat"
                value={saat}
                onChange={(e) => setSaat(e.target.value)}
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
                  <th>Dönem</th>
                  <th>Ders Adı</th>
                  <th>Dili</th>
                  <th>Saat</th>
                  <th>İşlemler</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    <td>{item.donem}</td>
                    <td>{item.ders_adi}</td>
                    <td>{item.dili}</td>
                    <td>{item.saat}</td>
                    <td>
                      <Button.Ripple
                        color="flat-danger"
                        onClick={() => handleDelete(item.donem)}
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
          <AccordionHeader targetId="2">Lisans</AccordionHeader>
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
          <h4 className=" text-center fs-1 my-2">Ders ekle</h4>
          <h5 className="text-center text-muted mx-2 ">
            Lütfen bilgileri eksiksiz doldurunuz.
          </h5>
          <ModalBody>
            <div className="m-2">
              <Label className="form-label" for="channel">
                Dönem:
                </Label>
                <Input
                placeholder="Dönem"
                value={donem}
                onChange={(e) => setDonem(e.target.value)}
                />
            </div>
            <div className="m-2">
                <Label className="form-label">Ders Adı:</Label>
                <Input
                placeholder="Ders Adı"
                value={ders_adi}
                onChange={(e) => setDers_adi(e.target.value)}
                />
            </div>
            <div className="m-2">
              <Label className="form-label">Dili:</Label>
                <Input
                placeholder="Dili"
                value={dili}
                onChange={(e) => setDili(e.target.value)}
                />
            </div>
            <div className="m-2">
                <Label className="form-label">Saat:</Label>
                <Input
                placeholder="Saat"
                value={saat}
                onChange={(e) => setSaat(e.target.value)}
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
                  <th>Dönem</th>
                  <th>Ders Adı</th>
                  <th>Dili</th>
                  <th>Saat</th>
                  <th>İşlemler</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    <td>{item.donem}</td>
                    <td>{item.ders_adi}</td>
                    <td>{item.dili}</td>
                    <td>{item.saat}</td>
                    <td>
                      <Button.Ripple
                        color="flat-danger"
                        onClick={() => handleDelete(item.donem)}
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
          <AccordionHeader targetId="3">Yüksek Lisans</AccordionHeader>
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
          <h4 className=" text-center fs-1 my-2">Ders ekle</h4>
          <h5 className="text-center text-muted mx-2 ">
            Lütfen bilgileri eksiksiz doldurunuz.
          </h5>
          <ModalBody>
            <div className="m-2">
              <Label className="form-label" for="channel">
                Dönem:
                </Label>
                <Input
                placeholder="Dönem"
                value={donem}
                onChange={(e) => setDonem(e.target.value)}
                />
            </div>
            <div className="m-2">
                <Label className="form-label">Ders Adı:</Label>
                <Input
                placeholder="Ders Adı"
                value={ders_adi}
                onChange={(e) => setDers_adi(e.target.value)}
                />
            </div>
            <div className="m-2">
              <Label className="form-label">Dili:</Label>
                <Input
                placeholder="Dili"
                value={dili}
                onChange={(e) => setDili(e.target.value)}
                />
            </div>
            <div className="m-2">
                <Label className="form-label">Saat:</Label>
                <Input
                placeholder="Saat"
                value={saat}
                onChange={(e) => setSaat(e.target.value)}
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
                  <th>Dönem</th>
                  <th>Ders Adı</th>
                  <th>Dili</th>
                  <th>Saat</th>
                  <th>İşlemler</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    <td>{item.donem}</td>
                    <td>{item.ders_adi}</td>
                    <td>{item.dili}</td>
                    <td>{item.saat}</td>
                    <td>
                      <Button.Ripple
                        color="flat-danger"
                        onClick={() => handleDelete(item.donem)}
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
          <AccordionHeader targetId="4">Doktora</AccordionHeader>
          <AccordionBody accordionId="4">
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
          <h4 className=" text-center fs-1 my-2">Ders ekle</h4>
          <h5 className="text-center text-muted mx-2 ">
            Lütfen bilgileri eksiksiz doldurunuz.
          </h5>
          <ModalBody>
            <div className="m-2">
              <Label className="form-label" for="channel">
                Dönem:
                </Label>
                <Input
                placeholder="Dönem"
                value={donem}
                onChange={(e) => setDonem(e.target.value)}
                />
            </div>
            <div className="m-2">
                <Label className="form-label">Ders Adı:</Label>
                <Input
                placeholder="Ders Adı"
                value={ders_adi}
                onChange={(e) => setDers_adi(e.target.value)}
                />
            </div>
            <div className="m-2">
              <Label className="form-label">Dili:</Label>
                <Input
                placeholder="Dili"
                value={dili}
                onChange={(e) => setDili(e.target.value)}
                />
            </div>
            <div className="m-2">
                <Label className="form-label">Saat:</Label>
                <Input
                placeholder="Saat"
                value={saat}
                onChange={(e) => setSaat(e.target.value)}
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
                  <th>Dönem</th>
                  <th>Ders Adı</th>
                  <th>Dili</th>
                  <th>Saat</th>
                  <th>İşlemler</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    <td>{item.donem}</td>
                    <td>{item.ders_adi}</td>
                    <td>{item.dili}</td>
                    <td>{item.saat}</td>
                    <td>
                      <Button.Ripple
                        color="flat-danger"
                        onClick={() => handleDelete(item.donem)}
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
export default Dersler;
