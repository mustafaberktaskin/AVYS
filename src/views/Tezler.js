import { MoreVertical, Edit, Trash, Plus } from "react-feather";
import {
  Table,
  Badge,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Button,
    Modal,
    ModalBody,
    ModalFooter,
    Label,
    Input,
} from "reactstrap";
import { useState, useEffect } from "react";
import { addThesis, getThesis, deleteThesis } from "../Firebase";



const Tezler = () => {
    const [formModal, setFormModal] = useState(false);
    const [submit, setSubmit] = useState(false);
    const [yil, setYil] = useState("");
    const [ad_soyad, setAd_soyad] = useState("");
    const [tez_adi, setTez_adi] = useState("");
    const [universite, setUniversite] = useState("");
    

const [data, setData] = useState([]);

    const handleSubmit = () => {
        if (yil !== '' && ad_soyad !== '' && tez_adi !== '' && universite !== '') {
            addThesis(yil, ad_soyad, tez_adi, universite);
            setSubmit(!submit);
            setFormModal(!formModal);
            setYil("");
            setAd_soyad("");
            setTez_adi("");
            setUniversite("");
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedData = await getThesis();
                setData(fetchedData);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, [submit, data]);

  return (
    <div id="tezler">
        <div className="content-header">
            <h5 className="mb-1">Yüksek Lisans</h5>
        </div>
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
          <h4 className=" text-center fs-1 my-2">Tez ekle</h4>
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
                <Label className="form-label">Hazırlayan Ad Soyad:</Label>
                <Input
                placeholder="Hazırlayan Ad Soyad"
                value={ad_soyad}
                onChange={(e) => setAd_soyad(e.target.value)}
                />
            </div>
            <div className="m-2">
              <Label className="form-label">Tez Adı:</Label>
                <Input
                placeholder="Tez Adı"
                value={tez_adi}
                onChange={(e) => setTez_adi(e.target.value)}
                />
            </div>
            <div className="m-2">
                <Label className="form-label">Üniversite:</Label>
                <Input
                placeholder="Üniversite"
                value={universite}
                onChange={(e) => setUniversite(e.target.value)}
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
          <th>Yıl</th>
          <th>Hazırlayan Ad Soyad</th>
          <th>Tez Adı</th>
          <th>Üniversite</th>
          <th>İşlemler</th>
        </tr>
      </thead>
        <tbody>
            {data.map((item, index) => (
                <tr key={index}>
                    <td>{item.yil}</td>
                    <td>{item.ad_soyad}</td>
                    <td>{item.tez_adi}</td>
                    <td>{item.universite}</td>
                    <td>     
                          <Button.Ripple color="flat-danger" onClick={() => deleteThesis(item.tez_adi)}>
                                <Trash className="mr-50" size={15} />
                            </Button.Ripple>
                    </td>
                </tr>
            ))}


        </tbody>
    </Table>

    </div>
  );
};

export default Tezler;
