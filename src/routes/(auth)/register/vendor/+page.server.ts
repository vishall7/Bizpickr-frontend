import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  console.log("page load called on server only!!!");
  return {
    title: 'A Vendor Side',
  };
};
