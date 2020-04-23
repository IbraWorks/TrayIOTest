import React from "react";
import { IRegistrationValues } from "../interfaces/IFormValues";
import { Form, Button } from "semantic-ui-react";
import { useForm } from "react-hook-form";
interface IProps {
  handleData: (data: IRegistrationValues) => void;
  registrationValues: IRegistrationValues;
}

const RegistrationSection: React.FC<IProps> = ({ handleData, registrationValues }) => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data: any) => {
    handleData(data);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Field required>
          <label style={{ float: "left" }}>Name</label>
          <input
            name="name"
            placeholder="John Smith"
            defaultValue={registrationValues.name}
            ref={register({ required: true })}
          />
          {errors.name && errors.name.type === "required" && (
            <p style={{ color: "red" }}>Your name is required to register</p>
          )}
        </Form.Field>
        <Form.Field>
          <label style={{ float: "left" }}>Role</label>
          <input
            name="role"
            placeholder="Software Engineer"
            defaultValue={registrationValues.role}
            ref={register({ required: false })}
          />
        </Form.Field>
        <Form.Field required>
          <label style={{ float: "left" }}>Email</label>
          <input

            name="email"
            placeholder="email@example.com"
            defaultValue={registrationValues.email}
            ref={register({ required: true, pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })}
          />
          {errors.email && errors.email.type === "required" && (
            <p style={{ color: "red" }}>Your email is required to register</p>
          )}
          {errors.email && errors.email.type === "pattern" && (
            <p style={{ color: "red" }}>Please enter a valid email address</p>
          )}
        </Form.Field>
        <Form.Field required>
          <label style={{ float: "left" }}>Password</label>
          <input
            name="password"
            type="password"
            placeholder="password"
            defaultValue={registrationValues.password}
            ref={register({
              required: true,
              minLength: 10,
              pattern: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/,
            })}
          />
          {errors.password && errors.password.type === "required" && (
            <p style={{ color: "red" }}>A valid password is required to register</p>
          )}
          {errors.password && errors.password.type === "minLength" && (
            <p style={{ color: "red" }}>The minimum length is 10</p>
          )}
          {errors.password && errors.password.type === "pattern" && (
            <p style={{ color: "red" }}>
              Password must contain at least one uppercase, at least one
              lowercase, and at least one digit
            </p>
          )}
        </Form.Field>
        <Button color="green" style={{ float: "right" }} type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default RegistrationSection;
