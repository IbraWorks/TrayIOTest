import { shallow } from 'enzyme'
import PrivacySection from './PrivacySection'
import React from 'react'

describe('PrivacySection', () => {
    it('should render', () => {
        const mockHandleData = jest.fn();
        const privacyValues = {
            updatesByEmail: "",
            communicationByEmail: ""
        }

        const wrapper = shallow(<PrivacySection handleData={mockHandleData} privacyValues={privacyValues}/>)
        expect(wrapper.exists()).toBe(true)
    });

    it('matches snapshot', () => {

        const mockHandleData = jest.fn();
        const privacyValues = {
            updatesByEmail: "",
            communicationByEmail: ""
        }

        const wrapper = shallow(<PrivacySection handleData={mockHandleData} privacyValues={privacyValues}/>);
        expect(wrapper.html()).toMatchSnapshot();
    });

    it('submitting the form should call handle data', () => {
        const mockHandleData = jest.fn();
        const privacyValues = {
            updatesByEmail: "",
            communicationByEmail: ""
        }

        const wrapper = shallow(<PrivacySection handleData={mockHandleData} privacyValues={privacyValues}/>)
        wrapper.find('Form').simulate('submit')
        expect(mockHandleData).toBeCalledTimes(1)
    });

    it('has updatesByEmail input', () => {

        const mockHandleData = jest.fn();
        const privacyValues = {
            updatesByEmail: "",
            communicationByEmail: ""
        }

        const wrapper = shallow(<PrivacySection handleData={mockHandleData} privacyValues={privacyValues}/>);
        expect(wrapper.find("input[name='updatesByEmail']").length).toEqual(1);
    });

    it('has communicationByEmail input', () => {

        const mockHandleData = jest.fn();
        const privacyValues = {
            updatesByEmail: "",
            communicationByEmail: ""
        }

        const wrapper = shallow(<PrivacySection handleData={mockHandleData} privacyValues={privacyValues}/>);
        expect(wrapper.find("input[name='communicationByEmail']").length).toEqual(1);
    });

    it('has submit button', () => {

        const mockHandleData = jest.fn();
        const privacyValues = {
            updatesByEmail: "",
            communicationByEmail: ""
        }

        const wrapper = shallow(<PrivacySection handleData={mockHandleData} privacyValues={privacyValues}/>);
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
