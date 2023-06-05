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
import { addLessons, getLessons, deleteLessons, addMasterLessons, getMasterLessons, deleteMasterLessons, associateLessons, getAssociateLessons, deleteAssociateLessons, addPhdLessons, getPhdLessons, deletePhdLessons } from "../Firebase";
import { use } from "i18next";

const Dersler = () => {
  const [open, setOpen] = useState("");

  const toggle = (id) => {
    open === id ? setOpen() : setOpen(id);
  };

  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const [data4, setData4] = useState([]);
  const [submit, setSubmit] = useState(false);
  const [submit2, setSubmit2] = useState(false);
  const [submit3, setSubmit3] = useState(false);
  const [submit4, setSubmit4] = useState(false);

    const [formModal, setFormModal] = useState(false);
    const [formModal2, setFormModal2] = useState(false);
    const [formModal3, setFormModal3] = useState(false);
    const [formModal4, setFormModal4] = useState(false);
    const [donem, setDonem] = useState("");
    const [donem2, setDonem2] = useState("");
    const [donem3, setDonem3] = useState("");
    const [donem4, setDonem4] = useState("");
    const [ders_adi, setDers_adi] = useState("");
    const [ders_adi2, setDers_adi2] = useState("");
    const [ders_adi3, setDers_adi3] = useState("");
    const [ders_adi4, setDers_adi4] = useState("");
    const [dili, setDili] = useState("");
    const [dili2, setDili2] = useState("");
    const [dili3, setDili3] = useState("");
    const [dili4, setDili4] = useState("");
    const [saat, setSaat] = useState("");
    const [saat2, setSaat2] = useState("");
    const [saat3, setSaat3] = useState("");
    const [saat4, setSaat4] = useState("");


    const handleSubmit = () => {
        if (donem !== '' && ders_adi !== '' && dili !== '' && saat !== '') {
            addLessons(donem, ders_adi, dili, saat);
            setSubmit(!submit);
            setFormModal2(!formModal2);
            setDonem("");
            setDers_adi("");
            setDili("");
            setSaat("");
        }
    };

    const handleSubmit2 = () => {
        if (donem2 !== '' && ders_adi2 !== '' && dili2 !== '' && saat2 !== '') {
            associateLessons(donem2, ders_adi2, dili2, saat2);
            setSubmit2(!submit2);
            setFormModal(!formModal);
            setDonem2("");
            setDers_adi2("");
            setDili2("");
            setSaat2("");
        }
    };

    const handleSubmit3 = () => {
        if (donem3 !== '' && ders_adi3 !== '' && dili3 !== '' && saat3 !== '') {
            addMasterLessons(donem3, ders_adi3, dili3, saat3);
            setSubmit3(!submit3);
            setFormModal3(!formModal3);
            setDonem3("");
            setDers_adi3("");
            setDili3("");
            setSaat3("");
        }
    };

    const handleSubmit4 = () => {
        if (donem4 !== '' && ders_adi4 !== '' && dili4 !== '' && saat4 !== '') {
            addPhdLessons(donem4, ders_adi4, dili4, saat4);
            setSubmit4(!submit4);
            setFormModal4(!formModal4);
            setDonem4("");
            setDers_adi4("");
            setDili4("");
            setSaat4("");
        }
    };


  useEffect(() => {
    const fetchData = async () => {
      try{
        const fetchedData = await getLessons();
        setData(fetchedData);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [submit, data]);

  useEffect(() => {
    const fetchData2 = async () => {
      try{
        const fetchedData2 = await getAssociateLessons();
        setData2(fetchedData2);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData2();
  }, [submit2, data2]);

  useEffect(() => {
    const fetchData3 = async () => {
      try{
        const fetchedData3 = await getMasterLessons();
        setData3(fetchedData3);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData3();
  }, [submit3, data3]);

  useEffect(() => {
    const fetchData4 = async () => {
      try{
        const fetchedData4 = await getPhdLessons();
        setData4(fetchedData4);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData4();
  }, [submit4, data4]);


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
                value={donem2}
                onChange={(e) => setDonem2(e.target.value)}
                />
            </div>
            <div className="m-2">
                <Label className="form-label">Ders Adı:</Label>
                <Input
                placeholder="Ders Adı"
                value={ders_adi2}
                onChange={(e) => setDers_adi2(e.target.value)}
                />
            </div>
            <div className="m-2">
              <Label className="form-label">Dili:</Label>
                <Input
                placeholder="Dili"
                value={dili2}
                onChange={(e) => setDili2(e.target.value)}
                />
            </div>
            <div className="m-2">
                <Label className="form-label">Saat:</Label>
                <Input
                placeholder="Saat"
                value={saat2}
                onChange={(e) => setSaat2(e.target.value)}
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
            <Button color="primary" onClick={handleSubmit2}>
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
                {data2.map((item, index) => (
                  <tr key={index}>
                    <td>{item.donem2}</td>
                    <td>{item.ders_adi2}</td>
                    <td>{item.dili2}</td>
                    <td>{item.saat2}</td>
                    <td>
                      <Button.Ripple
                        color="flat-danger"
                        onClick={() => deleteAssociateLessons(item.ders_adi2)}
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
                onClick={() => setFormModal2(!formModal2)}
              >
                <Plus /> Ekle
              </Button>
              <div className="modal-header d-flex align-items-center justify-content-center flex-row ">
        <Modal isOpen={formModal2} className="modal-dialog-centered">
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
              onClick={() => setFormModal2(!formModal2)}
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
                        onClick={() => deleteLessons(item.ders_adi)}
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
                onClick={() => setFormModal3(!formModal3)}
              >
                <Plus /> Ekle
              </Button>
              <div className="modal-header d-flex align-items-center justify-content-center flex-row ">
        <Modal isOpen={formModal3} className="modal-dialog-centered">
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
                value={donem3}
                onChange={(e) => setDonem3(e.target.value)}
                />
            </div>
            <div className="m-2">
                <Label className="form-label">Ders Adı:</Label>
                <Input
                placeholder="Ders Adı"
                value={ders_adi3}
                onChange={(e) => setDers_adi3(e.target.value)}
                />
            </div>
            <div className="m-2">
              <Label className="form-label">Dili:</Label>
                <Input
                placeholder="Dili"
                value={dili3}
                onChange={(e) => setDili3(e.target.value)}
                />
            </div>
            <div className="m-2">
                <Label className="form-label">Saat:</Label>
                <Input
                placeholder="Saat"
                value={saat3}
                onChange={(e) => setSaat3(e.target.value)}
                />
            </div>
          </ModalBody>
          <ModalFooter className="d-flex justify-content-center align-items-center">
            <Button
              color="dark"
              outline
              onClick={() => setFormModal3(!formModal3)}
            >
              Vazgeç
            </Button>
            <Button color="primary" onClick={handleSubmit3}>
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
                {data3.map((item, index) => (
                  <tr key={index}>
                    <td>{item.donem3}</td>
                    <td>{item.ders_adi3}</td>
                    <td>{item.dili3}</td>
                    <td>{item.saat3}</td>
                    <td>
                      <Button.Ripple
                        color="flat-danger"
                        onClick={() => deleteMasterLessons(item.ders_adi3)}
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
                onClick={() => setFormModal4(!formModal4)}
              >
                <Plus /> Ekle
              </Button>
              <div className="modal-header d-flex align-items-center justify-content-center flex-row ">
        <Modal isOpen={formModal4} className="modal-dialog-centered">
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
                value={donem4}
                onChange={(e) => setDonem4(e.target.value)}
                />
            </div>
            <div className="m-2">
                <Label className="form-label">Ders Adı:</Label>
                <Input
                placeholder="Ders Adı"
                value={ders_adi4}
                onChange={(e) => setDers_adi4(e.target.value)}
                />
            </div>
            <div className="m-2">
              <Label className="form-label">Dili:</Label>
                <Input
                placeholder="Dili"
                value={dili4}
                onChange={(e) => setDili4(e.target.value)}
                />
            </div>
            <div className="m-2">
                <Label className="form-label">Saat:</Label>
                <Input
                placeholder="Saat"
                value={saat4}
                onChange={(e) => setSaat4(e.target.value)}
                />
            </div>
          </ModalBody>
          <ModalFooter className="d-flex justify-content-center align-items-center">
            <Button
              color="dark"
              outline
              onClick={() => setFormModal4(!formModal4)}
            >
              Vazgeç
            </Button>
            <Button color="primary" onClick={handleSubmit4}>
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
                {data4.map((item, index) => (
                  <tr key={index}>
                    <td>{item.donem4}</td>
                    <td>{item.ders_adi4}</td>
                    <td>{item.dili4}</td>
                    <td>{item.saat4}</td>
                    <td>
                      <Button.Ripple
                        color="flat-danger"
                        onClick={() => deletePhdLessons(item.ders_adi4)}
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
