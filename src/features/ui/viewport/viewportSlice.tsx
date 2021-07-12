import { createAction } from "@reduxjs/toolkit";

export enum PanDirection {
  Up,
  Down,
  Left,
  Right
};

export const panViewport = createAction<PanDirection>('viewport/pan');

// Store the viewport size
