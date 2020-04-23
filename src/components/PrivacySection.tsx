import React from "react";
import { IPrivacyValues } from "../interfaces/IFormValues";
import { Form, Button } from "semantic-ui-react";
import { useForm } from "react-hook-form";

interface IProps {
  handleData: (data: IPrivacyValues) => void;
  privacyValues: IPrivacyValues;
}

const PrivacySection: React.FC<IProps> = ({ privacyValues, handleData }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
		handleData(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Field>
        <label>
          Receive updates about Tray.io product by email
          <input
            style={{ float: "right", marginTop: "5px" }}
            name="updatesByEmail"
            type="checkbox"
            placeholder="Software Engineer"
            defaultValue={privacyValues.updatesByEmail}
            ref={register()}
          />
        </label>
      </Form.Field>
      <Form.Field>
        <label>
          Receive updates about Tray.io product by email
          <input
            style={{ float: "right", marginTop: "5px"}}
            name="communicationByEmail"
            type="checkbox"
            placeholder="Software Engineer"
            defaultValue={privacyValues.communicationByEmail}
            ref={register()}
          />
        </label>
      </Form.Field>
      <Button color="green" style={{ float: "right" }} type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default PrivacySection;
