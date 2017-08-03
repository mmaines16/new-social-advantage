import { ADD_PAGE, ADD_PAGES, DELETE_PAGE } from './PageActions';

// Initial State
const initialState = { data: [] };

const PageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PAGE :
      return {
        data: [action.page, ...state.data],
      };

    case ADD_PAGES :
      return {
        data: action.pages,
      };

    case DELETE_PAGE :
      return {
        data: state.data.filter(page => page.slug !== action.slug),
      };

    default:
      return state;
  }
};

/* Selectors */

// Get all posts
export const getPages = state => state.pages.data;

// Get post by slug
export const getPage = (state, slug) => state.pages.data.filter(page => page.slug === slug)[0];

// Export Reducer
export default PageReducer;
