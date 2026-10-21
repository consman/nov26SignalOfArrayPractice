export interface Dog {
    name: string;
    breed: string;
    id: number;
}

export const initialDog : Dog = {
    name: "",
    breed: "",
    id: 0
}

export const CHOOSEABLEDOGS:Dog []=[
    {"name": "Missie", "breed": "Rotwheiler", "id":0}, //TODO fix the breed names
    {"name": "Darmah", "breed": "Malamoot", "id":0},
    {"name": "Koda", "breed": "Doberman", "id":0},
    {"name": "Jeter", "breed": "Golden Retriever", "id":0},
];