import React, { useState } from "react";
import FormHead from "../select/FormHead";
import axios from "axios";
import { navigate } from "@reach/router";
import { TheForm, FillLabel, FormGroup, MainInput, RoundedBtn } from './Styles';

const UserForm = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      firstName,
      lastName,
      phoneNumber,
      email,
      password,
      confirmPassword,
    };

    axios
      .post("http://localhost:8000/users", newUser)
      .then((res) => {
        navigate("/users");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <FormHead />
      <TheForm
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <h3>Create a New User</h3>
        <FormGroup>
          <FillLabel>First Name</FillLabel>
          <MainInput
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            type="text"
            value={firstName}
          />
        </FormGroup>
        <FormGroup>
          <FillLabel>Last Name</FillLabel>
          <MainInput
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            type="text"
            value={lastName}
          />
        </FormGroup>
        <FormGroup>
          <FillLabel>Company:</FillLabel>
          <MainInput
            onChange={(e) => {
              setCompany(e.target.value);
            }}
            type="text"
            value={company}
          />
        </FormGroup>
        <FormGroup>
          <FillLabel>Phone Number</FillLabel>
          <MainInput
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
            type="number"
            value={phoneNumber}
          />
        </FormGroup>
        <FormGroup>
          <FillLabel>Email</FillLabel>
          <MainInput
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            value={email}
          />
        </FormGroup>
        <FormGroup>
          <FillLabel>Location</FillLabel>
          <MainInput
            onChange={(e) => {
              setLocation(e.target.value);
            }}
            type="text"
            value={location}
          />
        </FormGroup>
        <FormGroup>
          <FillLabel>Password</FillLabel>
          <MainInput
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            value={password}
          />
        </FormGroup>
        <FormGroup>
          <FillLabel>Confirm Password</FillLabel>
          <MainInput
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
            type="password"
            value={confirmPassword}
          />
        </FormGroup>
        <RoundedBtn>Add User</RoundedBtn>
      </TheForm>
    </div>
  );
};

export default UserForm;
