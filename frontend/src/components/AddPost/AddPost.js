import React, { useState, useEffect } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBValidation,
  MDBBtn,
  MDBInput,
} from "mdb-react-ui-kit";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

import "mdb-react-ui-kit/dist/css/mdb.min.css";

const initialState = {
  title: "",
  quantity: "",
  Address: "",
};
const AddPost = () => {
  const [PostData, setPostData] = useState(initialState);
  //   const { error } = useSelector((state) => ({ ...state.Post }));

  //   const dispatch = useDispatch();
  const navigate = useNavigate();
  const { title, quantity, Address } = PostData;

  //   useEffect(() => {
  //     error && toast.error(error);
  //   }, [error]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && quantity && Address) {
      const updatedPostData = { ...PostData };
      //   dispatch(createPost({ updatedPostData, navigate, toast }));

      handleClear();
    }
  };
  const onInputChange = (e) => {
    const { name, value } = e.target;
    setPostData({ ...PostData, [name]: value });
  };

  const handleClear = () => {
    setPostData({ title: "", quantity: "", Address: "" });
  };
  return (
    <div className="back">
      {/* <Header /> */}
      <div
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "450px",
          alignContent: "center",
          color: "grey",
        }}
        className="container"
      >
        <MDBCard alignment="center">
          <h5>Add Post</h5>
          <MDBCardBody>
            <MDBValidation
              onSubmit={handleSubmit}
              className="row g-3"
              noValidate
            >
              <div className="col-md-12">
                <span className="lname">Your Post</span>
                <MDBInput
                  placeholder="Enter Post"
                  type="text"
                  value={title}
                  name="title"
                  onChange={onInputChange}
                  className="form-control"
                  required
                  invalid
                  validation="Please provide Name"
                />
              </div>

              <div className="col-12">
                <MDBBtn style={{ width: "100%" }}>Submit</MDBBtn>
                <MDBBtn
                  style={{ width: "100%" }}
                  className="mt-2"
                  color="danger"
                  onClick={handleClear}
                >
                  Clear
                </MDBBtn>
              </div>
            </MDBValidation>
          </MDBCardBody>
        </MDBCard>
      </div>
    </div>
  );
};

export default AddPost;
