export interface IFormValues {
	registrationValues: IRegistrationValues;
	privacyValues: IPrivacyValues
}

export interface IPrivacyValues {
  updatesByEmail: string;
  communicationByEmail: string;
}

export interface IRegistrationValues {
  name: string;
  role: string;
  email: string;
  password: string;
}
