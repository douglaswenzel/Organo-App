export interface IUser {
    id: string;
    name: string;
    charge: string;
    image: string;
    color?: string;
    crew?: string;
    date?: string;
    favorite?: boolean;
    onDelete?: (id: number) => void;
    onFavorite?: (id: number) => object;
}