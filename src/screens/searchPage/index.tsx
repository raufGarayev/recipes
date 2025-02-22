'use client';
import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const cuisines = ['Italian', 'Mexican', 'Chinese', 'Indian', 'Japanese'];

const SearchPage = () => {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [maxTime, setMaxTime] = useState('');

  const isFormValid = query || cuisine || maxTime;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (query) params.append('query', query);
    if (cuisine) params.append('cuisine', cuisine);
    if (maxTime) params.append('maxReadyTime', maxTime);

    router.push(`/recipes?${params.toString()}`);
  };
  return (
    <div className='py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-6'>
        <h1 className='text-3xl font-bold text-center mb-8 text-gray-900'>
          Recipe Finder
        </h1>

        <form onSubmit={handleSubmit} className='space-y-6'>
          <div>
            <label
              htmlFor='query'
              className='block text-sm font-medium text-gray-700'
            >
              Search Recipe
            </label>
            <input
              type='text'
              id='query'
              value={query}
              onChange={e => setQuery(e.target.value)}
              className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2'
              placeholder='Enter recipe name (e.g., pasta)'
            />
          </div>

          <div>
            <label
              htmlFor='cuisine'
              className='block text-sm font-medium text-gray-700'
            >
              Cuisine Type
            </label>
            <select
              id='cuisine'
              value={cuisine}
              onChange={e => setCuisine(e.target.value)}
              className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2'
            >
              <option value=''>Select cuisine</option>
              {cuisines.map(c => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor='maxTime'
              className='block text-sm font-medium text-gray-700'
            >
              Maximum Preparation Time (minutes)
            </label>
            <input
              type='number'
              id='maxTime'
              value={maxTime}
              onChange={e => setMaxTime(e.target.value)}
              min='0'
              className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2'
              placeholder='Enter max preparation time'
            />
          </div>

          <button
            type='submit'
            disabled={!isFormValid}
            className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
              isFormValid
                ? 'bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                : 'bg-gray-300 cursor-not-allowed'
            }`}
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchPage;
