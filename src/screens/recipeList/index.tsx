'use client';
import { Recipe } from '@/lib/types';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function RecipeList ({ recipes }: { recipes: Recipe[] }) {
  const router = useRouter();

  return (
    <div className='p-6'>
      <button
        onClick={() => router.back()}
        className='flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mb-4'
      >
        ← Back
      </button>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {recipes.map(recipe => (
          <Link
            href={`/recipes/${recipe.id}`}
            key={recipe.id}
            className='block hover:shadow-lg transition-shadow duration-200'
          >
            <div className='bg-white rounded-lg overflow-hidden shadow'>
              <img
                src={recipe.image}
                alt={recipe.title}
                className='w-full h-48 object-cover'
              />
              <div className='p-4'>
                <h2 className='text-xl font-semibold text-gray-800'>
                  {recipe.title}
                </h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
