export interface IUser {
    id: number;
    name: string,
    startDate: string,
    oficcerDate: string | null,
    items: UserItems[]

}

interface UserItems {
    name: string,
    count: number
}