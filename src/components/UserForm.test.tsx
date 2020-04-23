import { shallow, ShallowWrapper } from 'enzyme'
import UserForm from './UserForm'
import React from 'react'
import { Menu } from 'semantic-ui-react';

describe("UserForm", () => {
    let wrapper: ShallowWrapper;

    beforeEach(() => {
        wrapper = shallow(<UserForm />)
    })
    it('should render with user privacy and done headers', () => {
          expect(wrapper.exists()).toBe(true)
    });

    it('matches snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot();
    });

    it('should activate User header initally', () => {
        expect(wrapper.find(Menu).find("MenuItem[name='User']").props()).toEqual({"active": true, "color": "blue", "name": "User"})
        expect(wrapper.find(Menu).find("MenuItem[name='Privacy']").props()).toEqual({"active": false, "color": "blue", "name": "Privacy"})
        expect(wrapper.find(Menu).find("MenuItem[name='Done']").props()).toEqual({"active": false, "color": "blue", "name": "Done"})
    });
})