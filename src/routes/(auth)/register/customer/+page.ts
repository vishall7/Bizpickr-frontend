import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
  console.log("page load called!!!");
  return {
    title: 'A Customer Side',
  };
};
