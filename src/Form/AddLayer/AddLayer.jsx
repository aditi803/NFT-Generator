import React, { useState, useEffect } from "react";
import style from "./AddLayer.module.css";
import { useFormik } from "formik";
// import Modal from 'react-bootstrap/Modal';
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import UploadImage from "../../modals/UploadImage/UploadImage";

import { useLayer } from "../../context/LayerContext";
import useLoader from "../../hooks/useLoader";

export let responseApi;

// export let layerGetApi

const AddLayer = (props) => {
  const { layerId, setLayerId, collectionId, loader, setLoader } = useLayer();
//   const { loader, showLoader, hideLoader } = useLoader();

  // console.log(props, '123456789')
  const { getLayer, setShow, show } = props;
  const token = localStorage.getItem("token");
  // getLayer()

  const [layer, setLayer] = useState("");
  const [upload, setUpload] = useState(false);
  const [resApi, setResApi] = useState();

  const initialValues = {
    layer: "",
  };
  const validationSchema = Yup.object({
    layer: Yup.string().required("*Required"),
  });

  const onSubmit = async () => {
    // const collectionId = localStorage.getItem('collectionId')
    const data = {
      name: formik.values.layer,
      collectionId,
    };
    // showLoader();
    setLoader(true)
    // console.log(collectionId, '>>>>>>>>>>>>>>>>>>CollectionID')

    console.log('testing', loader)
    await axios
      .post("https://nftsgenerator.herokuapp.com/api/user/addLayer", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        // console.log(res, "Add layer response")
        setResApi(res);
        // console.log("meeeeeee");
        // console.log(res.data.data.layer._id, "Layer id")
        localStorage.setItem("LayerId", res.data.data.layer._id); // Not in use for R.B
        setLayerId(res.data.data.layer._id);
        setShow(false);
        formik.resetForm();
        // setTimeout(() => {
        props.getLayer(collectionId);
        // }, 1000)
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        // hideLoader();
        setLoader(false)
      });
  };
  // useEffect(() => {
  //     props.getLayer()
  // }, []);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const handleClose = () => {
    setShow(false);
  };

  return (
    <div>
      {/* {console.log('layerName', formik.values.layer)} */}
      <Modal onHide={handleClose} show={show}>
        <UploadImage show={upload} setShow={setUpload} />
        <form className={style.form} onSubmit={formik.handleSubmit}>
          <Modal.Header closeButton className={style.addHeader}>
            <h5>Add Layer</h5>
          </Modal.Header>
          <Modal.Body>
            <div>
              <input
                autoComplete="off"
                type="text"
                className="form-control"
                placeholder="Add Layer"
                name="layer"
                value={layer}
                // onChange={(e) => setLayer(e.target.value)}
                {...formik.getFieldProps("layer")}
              />
              {formik.touched.layer && formik.errors.layer ? (
                <p className="text-danger error pl-2">{formik.errors.layer}</p>
              ) : null}
            </div>
          </Modal.Body>
          <Modal.Footer className={style.addFooter}>
            <Button variant="light" onClick={handleClose} className={style.Btn}>
              Cancel
            </Button>
            <Button
              variant="primary"
              className={style.Btn}
              type="submit"
            //   onClick={(e) => props.getLayer(e)}
            >
              Add Layer
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  );
};

export default AddLayer;
