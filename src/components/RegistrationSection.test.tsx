import { shallow } from 'enzyme'
import React from 'react'
import RegistrationSection from './RegistrationSection';

describe("RegistrationSection", () => {
    

    it('should render', () => {
        const mockHandleData = jest.fn();
        const registrationValues = {
            name: "",
            role: "",
            email: "",
            password: ""
          }
        const wrapper = shallow(<RegistrationSection handleData={mockHandleData} registrationValues={registrationValues}/>)
        expect(wrapper.exists()).toBe(true)
    });

    it('matches snapshot', () => {
        const mockHandleData = jest.fn();
        const registrationValues = {
            name: "",
            role: "",
            email: "",
            password: ""
          }
        const wrapper = shallow(<RegistrationSection handleData={mockHandleData} registrationValues={registrationValues}/>)
        expect(wrapper.html()).toMatchSnapshot();
    });


    it('submitting the form should call handle data', () => {
        const mockHandleData = jest.fn();
        const registrationValues = {
            name: "John Smith",
            role: "Software Engineer",
            email: "email@example.com",
            password: "Password12345"
          }
        const wrapper = shallow(<RegistrationSection handleData={mockHandleData} registrationValues={registrationValues}/>)
        wrapper.find('Form').simulate('submit');
        expect(mockHandleData).toBeCalledTimes(1);
    });

    it('has inputs for name, role, email and password', () => {
        const mockHandleData = jest.fn();
        const registrationValues = {
            name: "",
            role: "",
            email: "",
            password: ""
          }
        const wrapper = shallow(<RegistrationSection handleData={mockHandleData} registrationValues={registrationValues}/>)
        expect(wrapper.find("input[name='name']").length).toEqual(1);
        expect(wrapper.find("input[name='role']").length).toEqual(1);
        expect(wrapper.find("input[name='email']").length).toEqual(1);
        expect(wrapper.find("input[name='password']").length).toEqual(1);
    });

    it('has a submit button', () => {
        const mockHandleData = jest.fn();
        const registrationValues = {
            name: "",
            role: "",
            email: "",
            password: ""
          }
        const wrapper = shallow(<RegistrationSection handleData={mockHandleData} registrationValues={registrationValues}/>)
        expect(wrapper.find("Button").length).toEqual(1);
        expect(wrapper.find('Button').props()).toEqual({
            "as": "button",
            "children": "Submit",
            "color": "green",
            "style": {float: "right"},
            "type": "submit",
        })
    });
})