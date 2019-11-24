export default interface IRoom {
    id: string;
    title: string;
    description: string;
    capacity: number;
    address: string;
    lat: number;
    long: number;
    likes: string[];
    rating: number[];
    available: boolean;
    fromDate: any;
    toDate: any;
    imageUrl: string;
    landlord: string;
}
