import { Status } from "./BillStatus";

export class Bill {
    usedUnit: number;
    total: number;
    billStatus: Status;
    housename: string;
    meterNumber:string;
    owner: string;
    billDate?: Date;  
    dueDate?: Date;   
    paidDate?: Date;

    constructor(
        usedUnit: number,
        total: number,
        billStatus: Status,
        housename: string,
        meterNumber:string,
        owner: string,
        billDate?: Date,
        dueDate?: Date,
        paidDate?: Date
    ) {
        this.usedUnit = usedUnit;
        this.total = total;
        this.billStatus = billStatus;
        this.housename = housename;
        this.meterNumber = meterNumber;
        this.owner = owner;
        this.billDate = billDate;
        this.dueDate = dueDate;
        this.paidDate = paidDate;
    }
}
