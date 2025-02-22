export interface Recipe {
    id: number;
    title: string;
    image: string;
    readyInMinutes: number;
    servings: number;
    instructions: string;
    extendedIngredients: {
        id: number;
        original: string;
    }[];
}
