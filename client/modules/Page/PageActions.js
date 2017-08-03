import callApi from '../../util/apiCaller';

// Export Constants
export const ADD_PAGE = 'ADD_PAGE';
export const ADD_PAGES = 'ADD_PAGES';
export const DELETE_PAGE = 'DELETE_PAGE';

// Export Actions
export function addPage(page) {
  return {
    type: ADD_PAGE,
    page,
  };
}

export function addPageRequest(page) {
  return (dispatch) => {
    return callApi('pages', 'page', {
      page,
    }).then(res => dispatch(addPage(res.page)));
  };
}

export function addPages(pages) {
  return {
    type: ADD_PAGES,
    pages,
  };
}

export function fetchPages() {
  return (dispatch) => {
    return callApi('pages').then(res => {
      dispatch(addPages(res.pages));
    });
  };
}

export function fetchPage(slug) {
  return (dispatch) => {
    return callApi(`pages/${slug}`).then(res => dispatch(addPage(res.page)));
  };
}

export function deletePage(slug) {
  return {
    type: DELETE_PAGE,
    slug,
  };
}

export function deletePageRequest(slug) {
  return (dispatch) => {
    return callApi(`pages/${slug}`, 'delete').then(() => dispatch(deletePage(slug)));
  };
}
