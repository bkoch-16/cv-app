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

export default function Section() {
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
