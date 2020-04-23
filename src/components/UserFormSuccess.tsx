import React from "react";
import { Step } from "semantic-ui-react";
import { IFormValues } from "../interfaces/IFormValues";

interface IProps {
    formValues: IFormValues
}
const UserFormSuccess: React.FC<IProps> = ({formValues}) => {
  return (
    <Step.Group ordered>
      <Step completed>
        <Step.Content>
          <Step.Title>Success!</Step.Title>
          <Step.Description>Please verify your email address,</Step.Description>
          <Step.Description>you should have received an email from us already!</Step.Description>
          {console.log(formValues)}
        </Step.Content>
      </Step>
    </Step.Group>
  );
};

export default UserFormSuccess;
