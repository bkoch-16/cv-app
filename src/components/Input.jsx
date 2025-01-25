import PropTypes from "prop-types";
import "../styles/input.css";
import { useState } from "react";

export function Input({ title, value, onChange, type = "text" }) {
  return (
    <>
      <label htmlFor="title">{title}</label>
      <input type={type} value={value} onChange={onChange} />
    </>
  );
}

export default function Combine() {
  const [editToggle, setEditToggle] = useState(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");

  const [schoolOne, setSchoolOne] = useState({
    schoolName: "",
    studyName: "",
    studyDate: "",
  });

  const [schoolTwo, setSchoolTwo] = useState({
    schoolName: "",
    studyName: "",
    studyDate: "",
  });

  const [schoolThree, setSchoolThree] = useState({
    schoolName: "",
    studyName: "",
    studyDate: "",
  });

  const [jobOne, setJobOne] = useState({
    companyName: "",
    jobName: "",
    responsibilities: [],
    date: "",
  });

  const [jobTwo, setJobTwo] = useState({
    companyName: "",
    jobName: "",
    responsibilities: [],
    date: "",
  });

  const [jobThree, setJobThree] = useState({
    companyName: "",
    jobName: "",
    responsibilities: [],
    date: "",
  });

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePhoneChange(e) {
    setPhone(e.target.value);
  }

  function handleLocationChange(e) {
    setLocation(e.target.value);
  }

  function handleSchoolOneNameChange(e) {
    setSchoolOne({ ...schoolOne, schoolName: e.target.value });
  }

  function handleSchoolOneStudyChange(e) {
    setSchoolOne({ ...schoolOne, studyName: e.target.value });
  }

  function handleSchoolOneDateChange(e) {
    setSchoolOne({ ...schoolOne, studyDate: e.target.value });
  }

  function handleSchoolTwoNameChange(e) {
    setSchoolTwo({ ...schoolTwo, schoolName: e.target.value });
  }

  function handleSchoolTwoStudyChange(e) {
    setSchoolTwo({ ...schoolTwo, studyName: e.target.value });
  }

  function handleSchoolTwoDateChange(e) {
    setSchoolTwo({ ...schoolTwo, studyDate: e.target.value });
  }

  function handleSchoolThreeNameChange(e) {
    setSchoolThree({ ...schoolThree, schoolName: e.target.value });
  }

  function handleSchoolThreeStudyChange(e) {
    setSchoolThree({ ...schoolThree, studyName: e.target.value });
  }

  function handleSchoolThreeDateChange(e) {
    setSchoolThree({ ...schoolThree, studyDate: e.target.value });
  }

  function handleJobOneCompanyChange(e) {
    setJobOne({ ...jobOne, companyName: e.target.value });
  }

  function handleJobOneTitleChange(e) {
    setJobOne({ ...jobOne, jobName: e.target.value });
  }

  function handleJobOneResponsibilitiesChange(e) {
    setJobOne({ ...jobOne, responsibilities: e.target.value });
  }

  function handleJobOneDateChange(e) {
    setJobOne({ ...jobOne, date: e.target.value });
  }

  function handleJobTwoCompanyChange(e) {
    setJobTwo({ ...jobTwo, companyName: e.target.value });
  }

  function handleJobTwoTitleChange(e) {
    setJobTwo({ ...jobTwo, jobName: e.target.value });
  }

  function handleJobTwoResponsibilitiesChange(e) {
    setJobTwo({ ...jobTwo, responsibilities: e.target.value });
  }

  function handleJobTwoDateChange(e) {
    setJobTwo({ ...jobTwo, date: e.target.value });
  }

  function handleJobThreeCompanyChange(e) {
    setJobThree({ ...jobThree, companyName: e.target.value });
  }

  function handleJobThreeTitleChange(e) {
    setJobThree({ ...jobThree, jobName: e.target.value });
  }

  function handleJobThreeResponsibilitiesChange(e) {
    setJobThree({ ...jobThree, responsibilities: e.target.value });
  }

  function handleJobThreeDateChange(e) {
    setJobThree({ ...jobThree, date: e.target.value });
  }

  const handleSubmit = () => {
    setEditToggle(false);
  };

  const handleEdit = () => {
    setEditToggle(true);
  };

  if (editToggle === false) {
    return (
      <Output
        editToggle={editToggle}
        name={name}
        handleNameChange={handleNameChange}
        email={email}
        handleEmailChange={handleEmailChange}
        phone={phone}
        handlePhoneChange={handlePhoneChange}
        location={location}
        handleLocationChange={handleLocationChange}
        handleSubmit={handleSubmit}
        handleEdit={handleEdit}
        schoolOne={schoolOne}
        handleSchoolOneNameChange={handleSchoolOneNameChange}
        handleSchoolOneStudyChange={handleSchoolOneStudyChange}
        handleSchoolOneDateChange={handleSchoolOneDateChange}
        schoolTwo={schoolTwo}
        handleSchoolTwoNameChange={handleSchoolTwoNameChange}
        handleSchoolTwoStudyChange={handleSchoolTwoStudyChange}
        handleSchoolTwoDateChange={handleSchoolTwoDateChange}
        schoolThree={schoolThree}
        handleSchoolThreeNameChange={handleSchoolThreeNameChange}
        handleSchoolThreeStudyChange={handleSchoolThreeStudyChange}
        handleSchoolThreeDateChange={handleSchoolThreeDateChange}
      />
    );
  }
  return (
    <Section
      name={name}
      handleNameChange={handleNameChange}
      email={email}
      handleEmailChange={handleEmailChange}
      phone={phone}
      handlePhoneChange={handlePhoneChange}
      location={location}
      handleLocationChange={handleLocationChange}
      handleSubmit={handleSubmit}
      schoolOne={schoolOne}
      handleSchoolOneNameChange={handleSchoolOneNameChange}
      handleSchoolOneStudyChange={handleSchoolOneStudyChange}
      handleSchoolOneDateChange={handleSchoolOneDateChange}
      schoolTwo={schoolTwo}
      handleSchoolTwoNameChange={handleSchoolTwoNameChange}
      handleSchoolTwoStudyChange={handleSchoolTwoStudyChange}
      handleSchoolTwoDateChange={handleSchoolTwoDateChange}
      schoolThree={schoolThree}
      handleSchoolThreeNameChange={handleSchoolThreeNameChange}
      handleSchoolThreeStudyChange={handleSchoolThreeStudyChange}
      handleSchoolThreeDateChange={handleSchoolThreeDateChange}
      jobOne={jobOne}
      handleJobOneCompanyChange={handleJobOneCompanyChange}
      handleJobOneTitleChange={handleJobOneTitleChange}
      handleJobOneResponsibilitiesChange={handleJobOneResponsibilitiesChange}
      handleJobOneDateChange={handleJobOneDateChange}
      jobTwo={jobTwo}
      handleJobTwoCompanyChange={handleJobTwoCompanyChange}
      handleJobTwoTitleChange={handleJobTwoTitleChange}
      handleJobTwoResponsibilitiesChange={handleJobTwoResponsibilitiesChange}
      handleJobTwoDateChange={handleJobTwoDateChange}
      jobThree={jobThree}
      handleJobThreeCompanyChange={handleJobThreeCompanyChange}
      handleJobThreeTitleChange={handleJobThreeTitleChange}
      handleJobThreeResponsibilitiesChange={
        handleJobThreeResponsibilitiesChange
      }
      handleJobThreeDateChange={handleJobThreeDateChange}
      j
    />
  );
}

export function Output({
  editToggle,
  name,
  handleNameChange,
  email,
  handleEmailChange,
  phone,
  handlePhoneChange,
  location,
  handleLocationChange,
  handleSubmit,
  handleEdit,
  schoolOne,
  handleSchoolOneNameChange,
  handleSchoolOneStudyChange,
  handleSchoolOneDateChange,
  schoolTwo,
  handleSchoolTwoNameChange,
  handleSchoolTwoStudyChange,
  handleSchoolTwoDateChange,
  schoolThree,
  handleSchoolThreeNameChange,
  handleSchoolThreeStudyChange,
  handleSchoolThreeDateChange,
  jobOne,
  handleJobOneCompanyChange,
  handleJobOneTitleChange,
  handleJobOneResponsibilitiesChange,
  handleJobOneDateChange,
  jobTwo,
  handleJobTwoCompanyChange,
  handleJobTwoTitleChange,
  handleJobTwoResponsibilitiesChange,
  handleJobTwoDateChange,
  jobThree,
  handleJobThreeCompanyChange,
  handleJobThreeTitleChange,
  handleJobThreeResponsibilitiesChange,
  handleJobThreeDateChange,
}) {
  if (!editToggle) {
    return (
      <>
        <h2>General Info</h2>
        <br />
        <span>{name}</span>
        <br />
        <span>{email}</span>
        <br />
        <span>{phone}</span>
        <br />
        <span>{location}</span>
        <br />

        <h2>School One</h2>
        <span>{schoolOne.schoolName}</span>
        <br />
        <span>{schoolOne.studyName}</span>
        <br />
        <span>{schoolOne.studyDate}</span>
        <h2>School Two</h2>
        <span>{schoolTwo.schoolName}</span>
        <br />
        <span>{schoolTwo.studyName}</span>
        <br />
        <span>{schoolTwo.studyDate}</span>
        <h2>School Three</h2>
        <span>{schoolThree.schoolName}</span>
        <br />
        <span>{schoolThree.studyName}</span>
        <br />
        <span>{schoolThree.studyDate}</span>
        <br />

        <button type="button" onClick={handleEdit}>
          Edit
        </button>
      </>
    );
  }
}

export function Section({
  name,
  handleNameChange,
  email,
  handleEmailChange,
  phone,
  handlePhoneChange,
  location,
  handleLocationChange,
  handleSubmit,
  schoolOne,
  handleSchoolOneNameChange,
  handleSchoolOneStudyChange,
  handleSchoolOneDateChange,
  schoolTwo,
  handleSchoolTwoNameChange,
  handleSchoolTwoStudyChange,
  handleSchoolTwoDateChange,
  schoolThree,
  handleSchoolThreeNameChange,
  handleSchoolThreeStudyChange,
  handleSchoolThreeDateChange,
  jobOne,
  handleJobOneCompanyChange,
  handleJobOneTitleChange,
  handleJobOneResponsibilitiesChange,
  handleJobOneDateChange,
  jobTwo,
  handleJobTwoCompanyChange,
  handleJobTwoTitleChange,
  handleJobTwoResponsibilitiesChange,
  handleJobTwoDateChange,
  jobThree,
  handleJobThreeCompanyChange,
  handleJobThreeTitleChange,
  handleJobThreeResponsibilitiesChange,
  handleJobThreeDateChange,
}) {
  return (
    <>
      <h2>General</h2>
      <Input title="Full Name" value={name} onChange={handleNameChange} />
      <br />
      <Input
        title="Email"
        value={email}
        onChange={handleEmailChange}
        type="email"
      />
      <br />
      <Input
        title="Phone"
        value={phone}
        onChange={handlePhoneChange}
        type="tel"
      />
      <br />
      <Input
        title="Location"
        value={location}
        onChange={handleLocationChange}
      />
      <br />
      <h2>School One</h2>
      <Input
        title="Name"
        value={schoolOne.schoolName}
        onChange={handleSchoolOneNameChange}
      />
      <br />
      <Input
        title="Major"
        value={schoolOne.studyName}
        onChange={handleSchoolOneStudyChange}
      />
      <br />
      <Input
        title="Date"
        value={schoolOne.studyDate}
        onChange={handleSchoolOneDateChange}
      />
      <br />
      <h2>School Two</h2>
      <Input
        title="Name"
        value={schoolTwo.schoolName}
        onChange={handleSchoolTwoNameChange}
      />
      <br />
      <Input
        title="Major"
        value={schoolTwo.studyName}
        onChange={handleSchoolTwoStudyChange}
      />
      <br />
      <Input
        title="Date"
        value={schoolTwo.studyDate}
        onChange={handleSchoolTwoDateChange}
      />
      <br />
      <h2>School Three</h2>
      <Input
        title="Name"
        value={schoolThree.schoolName}
        onChange={handleSchoolThreeNameChange}
      />
      <br />
      <Input
        title="Major"
        value={schoolThree.studyName}
        onChange={handleSchoolThreeStudyChange}
      />
      <br />
      <Input
        title="Date"
        value={schoolThree.studyDate}
        onChange={handleSchoolThreeDateChange}
      />
      <br />
      <h2>Jobs</h2>
      <Input
        title="Company"
        value={jobOne.companyName}
        onChange={handleJobOneCompanyChange}
      />
      <br />
      <Input
        title="Job Title"
        value={jobOne.jobName}
        onChange={handleJobOneTitleChange}
      />
      <br />
      <Input
        title="Responsibilities"
        value={jobOne.responsibilities}
        onChange={handleJobOneResponsibilitiesChange}
      />
      <br />
      <Input
        title="Date"
        value={jobOne.date}
        onChange={handleJobOneDateChange}
      />
      <br />
      <br />
      <Input
        title="Company"
        value={jobTwo.companyName}
        onChange={handleJobTwoCompanyChange}
      />
      <br />
      <Input
        title="Job Title"
        value={jobTwo.jobName}
        onChange={handleJobTwoTitleChange}
      />
      <br />
      <Input
        title="Responsibilities"
        value={jobTwo.responsibilities}
        onChange={handleJobTwoResponsibilitiesChange}
      />
      <br />
      <Input
        title="Date"
        value={jobTwo.date}
        onChange={handleJobTwoDateChange}
      />
      <br />
      <br />
      <Input
        title="Company"
        value={jobThree.companyName}
        onChange={handleJobThreeCompanyChange}
      />
      <br />
      <Input
        title="Job Title"
        value={jobThree.jobName}
        onChange={handleJobThreeTitleChange}
      />
      <br />
      <Input
        title="Responsibilities"
        value={jobThree.responsibilities}
        onChange={handleJobThreeResponsibilitiesChange}
      />
      <br />
      <Input
        title="Date"
        value={jobThree.date}
        onChange={handleJobThreeDateChange}
      />
      <br />
      <br />
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </>
  );
}
