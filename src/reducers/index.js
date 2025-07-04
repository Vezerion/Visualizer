import { combineReducers } from 'redux';

import arraySettings from './arraySettings'
import comparison from './comparison'
import description from './description';
import sortType from './sortType';

export default combineReducers({
  arraySettings,
  comparison,
  description,
  sortType
});