export class House {
     houseName: string;
     meterNumber: string;
     address: string;
     city: string;
     state: string;
     owner: string;
  
    constructor(
      houseName: string,
      meterNumber: string,
      address: string,
      city: string,
      state: string,
      owner: string
    ) {
      this.houseName = houseName;
      this.meterNumber = meterNumber;
      this.address = address;
      this.city = city;
      this.state = state;
      this.owner = owner;
    }
}