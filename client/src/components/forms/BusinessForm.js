import React from 'react';
import FormHead from '../select/FormHead';
import { TheForm, FillLabel, FormGroup, MainInput, RoundedBtn } from './Styles';

const BusinessForm = (props) => {

    return (
        <div>
            <FormHead/>
            <TheForm>
                <h3>Create a New Recruiter</h3>
                <FormGroup>
                    <FillLabel>First Name</FillLabel>
                    <MainInput type="text"/>
                </FormGroup>
                <FormGroup>
                    <FillLabel>Last Name</FillLabel>
                    <MainInput type="text"/>
                </FormGroup>
                <FormGroup>
                    <FillLabel>Company Name</FillLabel>
                    <MainInput type="text"/>
                </FormGroup>
                <FormGroup>
                    <FillLabel>Phone Number</FillLabel>
                    <MainInput type="number"/>
                </FormGroup>
                <FormGroup>
                    <FillLabel>Email</FillLabel>
                    <MainInput type="email"/>
                </FormGroup>
                <FormGroup>
                    <FillLabel>Location</FillLabel>
                    <MainInput type="text"/>
                </FormGroup>
                <FormGroup>
                    <FillLabel>Password</FillLabel>
                    <MainInput type="password"/>
                </FormGroup>
                <FormGroup>
                    <FillLabel>Confirm Password</FillLabel>
                    <MainInput type="password"/>
                </FormGroup>
                <RoundedBtn>Add Recruiter</RoundedBtn>
            </TheForm>
        </div>
    )
}

export default BusinessForm;