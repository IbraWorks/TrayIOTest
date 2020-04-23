import React, { useState } from "react";
import RegistrationSection from "./RegistrationSection";
import PrivacySection from "./PrivacySection";
import UserFormSuccess from "./UserFormSuccess";
import { IFormValues, IRegistrationValues, IPrivacyValues } from "../interfaces/IFormValues";

import { Grid, Menu } from "semantic-ui-react";

const UserForm: React.FC = () => {
  const [stage, setStage] = useState<number>(1);
  const [formValues, setFormValues] = useState<IFormValues>({
    registrationValues: {
      name: "",
      role: "",
      email: "",
      password: ""
    },
    privacyValues: {
      updatesByEmail: "",
      communicationByEmail: ""
    }
  });

  const nextStage = () => {
    setStage(stage => stage + 1);
  };

  // const previousStage = () => {
  //   setStage(stage - 1);
  // };

  const handleRegistrationData = (data: IRegistrationValues) => {
    setFormValues({...formValues, registrationValues: data});
    nextStage();
  };

  const handlePrivacyData = (data: IPrivacyValues) => {
    setFormValues({...formValues, privacyValues: data});
    nextStage();
  }

  const renderSwitchForm = (stage: number) => {
    switch (stage) {
      case 1:
        return (
          <RegistrationSection
            handleData={handleRegistrationData}
            registrationValues={formValues.registrationValues}
          />
        );
      case 2:
        return (
          <PrivacySection handleData={handlePrivacyData} privacyValues={formValues.privacyValues} />
        );
      case 3:
        return <UserFormSuccess formValues={formValues}/>;
    }
  };

  return (
    <div>
      <Menu pointing secondary widths="4">
        <Menu.Item color="blue" name="User" active={stage === 1} />
        <Menu.Item color="blue" name="Privacy" active={stage === 2} />
        <Menu.Item color="blue" name="Done" active={stage === 3} />
      </Menu>
      <Grid
        textAlign="center"
        style={{ height: "60vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 500 }}>
          {renderSwitchForm(stage)}
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default UserForm;
