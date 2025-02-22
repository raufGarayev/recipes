import { Recipe } from "@/lib/types"

export async function getRecipes(params: { [key: string]: string | undefined }) {
    const { query, cuisine, maxReadyTime } = params;
    const searchParams = new URLSearchParams();

    if (query) searchParams.append('query', query);
    if (cuisine) searchParams.append('cuisine', cuisine);
    if (maxReadyTime) searchParams.append('maxReadyTime', maxReadyTime);
    searchParams.append('apiKey', process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY!);

    try {
        const res = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?${searchParams.toString()}`,
            {
                next: { revalidate: 60 } // Cache for 1 minute
            }
        );

        if (!res.ok) throw new Error('Failed to fetch recipes');

        const data = await res.json();
        return data.results;
    } catch (error) {
        throw new Error('Failed to fetch recipes');
    }
}

export async function getRecipeDetails(id: string): Promise<Recipe> {
    try {
        const res = await fetch(
            `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY}`,
            {
                next: { revalidate: 60 }
            }
        );

        if (!res.ok) throw new Error('Failed to fetch recipe details');

        return res.json();
    } catch (error) {
        throw new Error('Failed to fetch recipe details');
    }
}