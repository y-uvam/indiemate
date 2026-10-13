import { createRef } from 'react';

export const navigationRef = createRef();

export const navigate = (path, options) => {
  if (navigationRef.current) {
    navigationRef.current(path, options);
  }
};

export const goBack = () => {
  if (navigationRef.current) {
    navigationRef.current(-1);
  }
};

export const goForward = () => {
  if (navigationRef.current) {
    navigationRef.current(1);
  }
};

export const pop = (count = 1) => {
  if (navigationRef.current) {
    navigationRef.current(-count);
  }
};

export const replace = (path, options = {}) => {
  navigate(path, { ...options, replace: true });
};

export const reset = (path) => {
  navigate(path, { replace: true });
};
