import NavItems from '../data/MainNavigation.json';

export const getNavigation = async () => Promise.resolve(NavItems);

export const navigate = (url) =>  console.log(url);