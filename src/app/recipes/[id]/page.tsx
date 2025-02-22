import { getRecipeDetails } from '@/lib/api';
import RecipeDetails from '@/screens/recipeDetails';
import { Suspense } from 'react';

export default async function RecipePage ({ params }: { params: any }) {
  //why await? here is why: `params` should be awaited before using its properties (nextjs warning)
  const iParams = await params;
  const recipe = await getRecipeDetails(iParams.id);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RecipeDetails recipe={recipe} />
    </Suspense>
  );
}
