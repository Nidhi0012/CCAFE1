import React, { useState } from "react";
import conferenceService from "../service/conference.service";
import styles from "./AddConference.module.css"; 

const AddConference = () => {
  const [conference, setConference] = useState({
    place: "",
    date: "",
    name: "",
    status: "",
    link: "",
  });

  const [msg, setMsg] = useState("");
  const handleChange = (e) => {
    const value = e.target.value;
    setConference({ ...conference, [e.target.name]: value });
  };

  const ConferenceRegister = (e) => {
    conferenceService.saveConference(conference).then((res) => {
       // console.log("Conference added successfully");
        setMsg("Conference added successfully");
        
        setConference({
          place: "",
          date: "",
          name: "",
          status: "",
          link: "",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={`container ${styles.addConference}`}>
      <div className={`card-header fs-3 text-center ${styles.cardHeader}`}>
        Add Conference
      </div>
      <div className={`card-body ${styles.cardBody}`}>
        {msg && (
          <p className={`fs-4 text-center text-success ${styles.successMsg}`}>
            {msg}
          </p>
        )}
        <form onSubmit={(e) => ConferenceRegister(e)}>
          <div className="mb-3">
            <label>Enter Place</label>
            <input
              type="text"
              name="place"
              className="form-control"
              onChange={(e) => handleChange(e)}
              value={conference.place}
            />
          </div>

          <div className="mb-3">
            <label>Enter Date</label>
            <input
              type="date"
              name="date"
              className="form-control"
              onChange={(e) => handleChange(e)}
              value={conference.date}
            />
          </div>

          <div className="mb-3">
            <label>Enter Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              onChange={(e) => handleChange(e)}
              value={conference.name}
            />
          </div>
          <div className="mb-3">
            <label>Enter Link</label>
            <input
              type="text"
              name="link"
              className="form-control"
              onChange={(e) => handleChange(e)}
              value={conference.link}
            />
          </div>

          <div className="mb-3">
            <label>Enter Status</label>
            <input
              type="text"
              name="status"
              className="form-control"
              onChange={(e) => handleChange(e)}
              value={conference.status}
            />
          </div>
          <button className="btn btn-success col-md-12">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddConference;
