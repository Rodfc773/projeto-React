import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default function persist(reducers) {
  const persistedReducers = persistReducer(
    {
      key: 'NOME-DA-APLICAÇÃO',
      storage,
      whitelist: ['example'],
    },
    reducers,
  );

  return persistedReducers;
}
