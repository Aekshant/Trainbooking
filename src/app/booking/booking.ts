export class Booking {
    constructor(
        public type : string,
        public from : string,
        public to : string,
        public depart : string,
        public retirn : string,
        public adult : number,
        public children : number,
        public travelClass : string
    ) { }
}
