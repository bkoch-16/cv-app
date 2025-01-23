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

  const handleSubmit = () => {
    setEditToggle(false);
  };

  return (
    <>
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
      />
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
      />
    </>
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
}) {
  if (!editToggle) {
    return (
      <>
        <span>{name}</span>
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
}) {
  return (
    <>
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
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </>
  );
}

Input.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  value: PropTypes.node,
  onChange: PropTypes.node,
  type: PropTypes.string,
};

Section.propTypes = {
  name: PropTypes.string,
  handleNameChange: PropTypes.function,
  email: PropTypes.string,
  handleEmailChange: PropTypes.function,
  phone: PropTypes.string,
  handlePhoneChange: PropTypes.function,
  location: PropTypes.string,
  handleLocationChange: PropTypes.function,
  handleSubmit: PropTypes.function,
};

Output.propTypes = {
  name: PropTypes.string,
  handleNameChange: PropTypes.function,
  email: PropTypes.string,
  handleEmailChange: PropTypes.function,
  phone: PropTypes.string,
  handlePhoneChange: PropTypes.function,
  location: PropTypes.string,
  handleLocationChange: PropTypes.function,
  handleSubmit: PropTypes.function,
};
