import { configureStore } from '@reduxjs/toolkit';
import inventoryReducer from './InventoriSlice';

export const store = configureStore({
  reducer: {
    inventory: inventoryReducer,
  },
});