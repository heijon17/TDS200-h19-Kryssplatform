export default interface IRoom {
    id: string;
    title: string;
    description: string;
    capacity: number;
    address: string;
    lat: number;
    long: number;
    likes: number;
    available: boolean;
    fromDate: any;
    toDate: any;
    imageUrl: string;
}
