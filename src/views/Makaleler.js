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
import { addArticles, getArticles, deleteArticles} from "../Firebase";

const Makaleler = () => {
  const [open, setOpen] = useState("");

  const toggle = (id) => {
    open === id ? setOpen() : setOpen(id);
  };

  const [data, setData] = useState([]);

    const [formModal, setFormModal] = useState(false);
    const [submit, setSubmit] = useState(false);
    const [makale_adi, setMakale_adi] = useState("");
    const [makale_sahibi, setMakale_sahibi] = useState("");
    const [makale_yayin_yeri, setMakale_yayin_yeri] = useState("");
    const [makale_yayin_tarihi, setMakale_yayin_tarihi] = useState("");
    const [makale_link, setMakale_link] = useState("");

    const handleSubmit = () => {
      if( makale_adi !== '' && makale_sahibi !== '' && makale_yayin_yeri !== '' && makale_yayin_tarihi !== '' && makale_link !== ''){
        addArticles(makale_adi, makale_sahibi, makale_yayin_yeri, makale_yayin_tarihi, makale_link).then(() => {
          setSubmit(!submit);
          setFormModal(!formModal);
          setMakale_adi("");
          setMakale_sahibi("");
          setMakale_yayin_yeri("");
          setMakale_yayin_tarihi("");
          setMakale_link("");
        });
      }
      else{
        alert("Lütfen tüm alanları doldurunuz.");
      }
    };

    useEffect(() => {
      const fetchData = async () => {
        try {
          const fetchedData = await getArticles();
          setData(fetchedData);
        } catch (error) {
          console.log(error);
        }
      };
      fetchData();
    }, [submit,data]);

      return (
    <div id="dersler">
      <h1>Makaleler</h1>
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
          <h4 className=" text-center fs-1 my-2">Makale ekle</h4>
          <h5 className="text-center text-muted mx-2 ">
            Lütfen bilgileri eksiksiz doldurunuz.
          </h5>
          <ModalBody>
            <div className="m-2">
              <Label className="form-label" for="channel">
                Makale Adı:
                </Label>
                <Input
                placeholder="Makale Adı"
                value={makale_adi}
                onChange={(e) => setMakale_adi(e.target.value)}
                />
            </div>
            <div className="m-2">
                <Label className="form-label" for="channel">
                Makale Sahibi:
                </Label>
                <Input
                placeholder="Makale Sahibi"
                value={makale_sahibi}
                onChange={(e) => setMakale_sahibi(e.target.value)}
                />
            </div>
            <div className="m-2">
                <Label className="form-label" for="channel">
                Makale Yayın Yeri:
                </Label>
                <Input
                placeholder="Makale Yayın Yeri"
                value={makale_yayin_yeri}
                onChange={(e) => setMakale_yayin_yeri(e.target.value)}
                />
            </div>
            <div className="m-2">
                <Label className="form-label" for="channel">
                Makale Yayın Tarihi:
                </Label>
                <Input
                placeholder="Makale Yayın Tarihi"
                value={makale_yayin_tarihi}
                onChange={(e) => setMakale_yayin_tarihi(e.target.value)}
                />
            </div>
            <div className="m-2">
                <Label className="form-label" for="channel">
                Makale Linki:
                </Label>
                <Input
                placeholder="Makale Linki"
                value={makale_link}
                onChange={(e) => setMakale_link(e.target.value)}
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
                    <th>Makale Adı</th>
                    <th>Makale Sahibi</th>
                    <th>Makale Yayın Yeri</th>
                    <th>Makale Yayın Tarihi</th>
                    <th>Makale Linki</th>
                    <th>İşlemler</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    <td>{item.makale_adi}</td>
                    <td>{item.makale_sahibi}</td>
                    <td>{item.makale_yayin_yeri}</td>
                    <td>{item.makale_yayin_tarihi}</td>
                    <td>{item.makale_link}</td>
                    <td>
                      <Button.Ripple
                        color="flat-danger"
                        onClick={() => {
                          deleteArticles(item.makale_adi);
                          setSubmit(!submit);
                        }}
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
          <AccordionHeader targetId="2">Uluslararası Hakemli</AccordionHeader>
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
          <h4 className=" text-center fs-1 my-2">Makale ekle</h4>
          <h5 className="text-center text-muted mx-2 ">
            Lütfen bilgileri eksiksiz doldurunuz.
          </h5>
          <ModalBody>
            <div className="m-2">
              <Label className="form-label" for="channel">
                Makale Adı:
                </Label>
                <Input
                placeholder="Makale Adı"
                value={makale_adi}
                onChange={(e) => setMakale_adi(e.target.value)}
                />
            </div>
            <div className="m-2">
                <Label className="form-label" for="channel">
                Makale Sahibi:
                </Label>
                <Input
                placeholder="Makale Sahibi"
                value={makale_sahibi}
                onChange={(e) => setMakale_sahibi(e.target.value)}
                />
            </div>
            <div className="m-2">
                <Label className="form-label" for="channel">
                Makale Yayın Yeri:
                </Label>
                <Input
                placeholder="Makale Yayın Yeri"
                value={makale_yayin_yeri}
                onChange={(e) => setMakale_yayin_yeri(e.target.value)}
                />
            </div>
            <div className="m-2">
                <Label className="form-label" for="channel">
                Makale Yayın Tarihi:
                </Label>
                <Input
                placeholder="Makale Yayın Tarihi"
                value={makale_yayin_tarihi}
                onChange={(e) => setMakale_yayin_tarihi(e.target.value)}
                />
            </div>
            <div className="m-2">
                <Label className="form-label" for="channel">
                Makale Linki:
                </Label>
                <Input
                placeholder="Makale Linki"
                value={makale_link}
                onChange={(e) => setMakale_link(e.target.value)}
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
                    <th>Makale Adı</th>
                    <th>Makale Sahibi</th>
                    <th>Makale Yayın Yeri</th>
                    <th>Makale Yayın Tarihi</th>
                    <th>Makale Linki</th>
                    <th>İşlemler</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    <td>{item.makale_adi}</td>
                    <td>{item.makale_sahibi}</td>
                    <td>{item.makale_yayin_yeri}</td>
                    <td>{item.makale_yayin_tarihi}</td>
                    <td>{item.makale_link}</td>
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
          <AccordionHeader targetId="3">Ulusal Hakemli</AccordionHeader>
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
          <h4 className=" text-center fs-1 my-2">Makale ekle</h4>
          <h5 className="text-center text-muted mx-2 ">
            Lütfen bilgileri eksiksiz doldurunuz.
          </h5>
          <ModalBody>
            <div className="m-2">
              <Label className="form-label" for="channel">
                Makale Adı:
                </Label>
                <Input
                placeholder="Makale Adı"
                value={makale_adi}
                onChange={(e) => setMakale_adi(e.target.value)}
                />
            </div>
            <div className="m-2">
                <Label className="form-label" for="channel">
                Makale Sahibi:
                </Label>
                <Input
                placeholder="Makale Sahibi"
                value={makale_sahibi}
                onChange={(e) => setMakale_sahibi(e.target.value)}
                />
            </div>
            <div className="m-2">
                <Label className="form-label" for="channel">
                Makale Yayın Yeri:
                </Label>
                <Input
                placeholder="Makale Yayın Yeri"
                value={makale_yayin_yeri}
                onChange={(e) => setMakale_yayin_yeri(e.target.value)}
                />
            </div>
            <div className="m-2">
                <Label className="form-label" for="channel">
                Makale Yayın Tarihi:
                </Label>
                <Input
                placeholder="Makale Yayın Tarihi"
                value={makale_yayin_tarihi}
                onChange={(e) => setMakale_yayin_tarihi(e.target.value)}
                />
            </div>
            <div className="m-2">
                <Label className="form-label" for="channel">
                Makale Linki:
                </Label>
                <Input
                placeholder="Makale Linki"
                value={makale_link}
                onChange={(e) => setMakale_link(e.target.value)}
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
                    <th>Makale Adı</th>
                    <th>Makale Sahibi</th>
                    <th>Makale Yayın Yeri</th>
                    <th>Makale Yayın Tarihi</th>
                    <th>Makale Linki</th>
                    <th>İşlemler</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    <td>{item.makale_adi}</td>
                    <td>{item.makale_sahibi}</td>
                    <td>{item.makale_yayin_yeri}</td>
                    <td>{item.makale_yayin_tarihi}</td>
                    <td>{item.makale_link}</td>
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
          <AccordionHeader targetId="4">Diğer</AccordionHeader>
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
          <h4 className=" text-center fs-1 my-2">Makale ekle</h4>
          <h5 className="text-center text-muted mx-2 ">
            Lütfen bilgileri eksiksiz doldurunuz.
          </h5>
          <ModalBody>
            <div className="m-2">
              <Label className="form-label" for="channel">
                Makale Adı:
                </Label>
                <Input
                placeholder="Makale Adı"
                value={makale_adi}
                onChange={(e) => setMakale_adi(e.target.value)}
                />
            </div>
            <div className="m-2">
                <Label className="form-label" for="channel">
                Makale Sahibi:
                </Label>
                <Input
                placeholder="Makale Sahibi"
                value={makale_sahibi}
                onChange={(e) => setMakale_sahibi(e.target.value)}
                />
            </div>
            <div className="m-2">
                <Label className="form-label" for="channel">
                Makale Yayın Yeri:
                </Label>
                <Input
                placeholder="Makale Yayın Yeri"
                value={makale_yayin_yeri}
                onChange={(e) => setMakale_yayin_yeri(e.target.value)}
                />
            </div>
            <div className="m-2">
                <Label className="form-label" for="channel">
                Makale Yayın Tarihi:
                </Label>
                <Input
                placeholder="Makale Yayın Tarihi"
                value={makale_yayin_tarihi}
                onChange={(e) => setMakale_yayin_tarihi(e.target.value)}
                />
            </div>
            <div className="m-2">
                <Label className="form-label" for="channel">
                Makale Linki:
                </Label>
                <Input
                placeholder="Makale Linki"
                value={makale_link}
                onChange={(e) => setMakale_link(e.target.value)}
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
                    <th>Makale Adı</th>
                    <th>Makale Sahibi</th>
                    <th>Makale Yayın Yeri</th>
                    <th>Makale Yayın Tarihi</th>
                    <th>Makale Linki</th>
                    <th>İşlemler</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    <td>{item.makale_adi}</td>
                    <td>{item.makale_sahibi}</td>
                    <td>{item.makale_yayin_yeri}</td>
                    <td>{item.makale_yayin_tarihi}</td>
                    <td>{item.makale_link}</td>
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
export default Makaleler;
