import {
  CHANGE_THEME_TO_DARK,
  CHANGE_THEME_TO_LIGHT,
  CHANGE_THEME_TO_GRAY,
  CHANGE_THEME_TO_GRAY_BLACK,
} from '../actions/themeActions';

const initialState = {
  className: 'theme-light',
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_THEME_TO_DARK:
      return { className: 'theme-dark' };
    case CHANGE_THEME_TO_LIGHT:
      return { className: 'theme-light' };
    case CHANGE_THEME_TO_GRAY:
      return { className: 'theme-Pgray' };
    case CHANGE_THEME_TO_GRAY_BLACK:
      return { className: 'theme-grayBlack' };
    default:
      return state;
  }
};

export default themeReducer;
