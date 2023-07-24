export class Person {
  id: number;
  firstName: string;
  lastName: string;
  gender: string;
  dateOfBirth: string;
  phoneNumber: string;
  email: string;

  constructor(personResponse: any) {
    this.id = personResponse.id;
    this.firstName = personResponse.firstName;
    this.lastName = personResponse.lastName;
    this.gender = personResponse.gender;
    this.dateOfBirth = personResponse.dateOfBirth;
    this.phoneNumber = personResponse.phoneNumber;
    this.email = personResponse.email;
  }
}


