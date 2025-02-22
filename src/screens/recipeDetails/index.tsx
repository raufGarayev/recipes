'use client';
import { Recipe } from '@/lib/types';
import { useRouter } from 'next/navigation';
import React from 'react';

const RecipeDetails = ({ recipe }: { recipe: Recipe }) => {
  const router = useRouter();
  return (
    <div className='p-6'>
      <button
        onClick={() => router.back()}
        className='flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mb-4'
      >
        ← Back
      </button>
      <div className='max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden'>
        <img
          src={recipe.image}
          alt={recipe.title}
          className='w-full h-64 object-cover'
        />
        <div className='p-8'>
          <h1 className='text-3xl font-bold text-gray-900 mb-4'>
            {recipe.title}
          </h1>

          <div className='mb-6'>
            <p className='text-gray-600'>
              <span className='font-semibold'>Preparation Time:</span>
              {recipe.readyInMinutes} minutes
            </p>
            <p className='text-gray-600'>
              <span className='font-semibold'>Servings:</span>
              {recipe.servings}
            </p>
          </div>

          <div className='mb-8'>
            <h2 className='text-2xl font-semibold text-gray-900 mb-4'>
              Ingredients
            </h2>
            <ul className='list-disc pl-5 space-y-2'>
              {recipe.extendedIngredients.map(ingredient => (
                <li key={ingredient.id} className='text-gray-700'>
                  {ingredient.original}
                </li>
              ))}
            </ul>
          </div>

          {recipe.instructions && (
            <div>
              <h2 className='text-2xl font-semibold text-gray-900 mb-4'>
                Instructions
              </h2>
              <div
                className='prose max-w-none'
                dangerouslySetInnerHTML={{
                  __html: recipe.instructions,
                }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
