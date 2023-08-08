import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import conferenceService from "../service/conference.service";

const EditConference = () => {
  const [conference, setConference] = useState({
    id: "",
    place: "",
    date: "",
    name: "",
    status: "",
    link: "",
  });

  const navigate = useNavigate();

  const { id } = useParams();
  console.log(id);

  const [msg, setMsg] = useState("");

  useEffect(() => {
    conferenceService
      .getConferenceById(Number(id))
      .then((res) => {
        setConference(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;

    setConference({ ...conference, [e.target.name]: value });
  };

  const ConferenceUpdate = (e) => {
    //e.preventDefault();
    conferenceService
      .editConference(conference)
      .then((res) => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="container editConference">
        <div className="edit_Card">
          <div className="editConferenceCard">
            <div className="card-header fs-3 text-center">Edit Conference</div>
            {msg && <p className="fs-4 text-center text-success">{msg}</p>}
            <div className="card-body">
              <form onSubmit={(e) => ConferenceUpdate(e)}>
                <div className="mb-3">
                  <label>Enter Place</label>
                  <input
                    type="text"
                    name="place"
                    className="form-control"
                    onChange={(e) => handleChange(e)}
                    value={conference.place}
                  ></input>
                </div>

                <div className="mb-3">
                  <label>Enter Date</label>
                  <input
                    type="date"
                    name="date"
                    className="form-control"
                    onChange={(e) => handleChange(e)}
                    value={conference.date}
                  ></input>
                </div>

                <div className="mb-3">
                  <label>Enter Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    onChange={(e) => handleChange(e)}
                    value={conference.name}
                  ></input>
                </div>
                <div className="mb-3">
                  <label>Enter Link</label>
                  <input
                    type="text"
                    name="link"
                    className="form-control"
                    onChange={(e) => handleChange(e)}
                    value={conference.link}
                  ></input>
                </div>

                <div className="mb-3">
                  <label>Enter Status</label>
                  <input
                    type="text"
                    name="status"
                    className="form-control"
                    onChange={(e) => handleChange(e)}
                    value={conference.status}
                  ></input>
                </div>
                <button className="btn btn-success col-md-12">Update</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default EditConference;
