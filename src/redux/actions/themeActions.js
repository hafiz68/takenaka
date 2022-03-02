export const CHANGE_THEME_TO_DARK = 'CHANGE_THEME_TO_DARK';
export const CHANGE_THEME_TO_LIGHT = 'CHANGE_THEME_TO_LIGHT';
export const CHANGE_THEME_TO_GRAY = 'CHANGE_THEME_TO_GRAY';
export const CHANGE_THEME_TO_GRAY_BLACK = 'CHANGE_THEME_TO_GRAY_BLACK';

export function changeThemeToDark() {
  return {
    type: CHANGE_THEME_TO_DARK,
  };
}

export function changeThemeToLight() {
  return {
    type: CHANGE_THEME_TO_LIGHT,
  };
}

export function changeThemeToGray() {
  return {
    type: CHANGE_THEME_TO_GRAY,
  };
}
export function changeThemeToGrayBlack() {
  return {
    type: CHANGE_THEME_TO_GRAY_BLACK,
  };
}
