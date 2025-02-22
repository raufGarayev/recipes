import { Suspense } from 'react';
import RecipeList from '@/screens/recipeList';
import { getRecipes } from '@/lib/api';

export default async function RecipesPage ({
  searchParams,
}: {
  searchParams: any;
}) {
  //why await? here is why: `searchParams` should be awaited before using its properties (nextjs warning)
  const iSearchParams = await searchParams;
  const recipes = await getRecipes(iSearchParams);

  return (
    <div className='min-h-screen bg-gray-100'>
      <Suspense fallback={<div>Loading...</div>}>
        <RecipeList recipes={recipes} />
      </Suspense>
    </div>
  );
}
