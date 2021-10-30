import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import loggerMiddleware from './middleware/logger'
import rootReducer from './reducer'
import thunkMiddleware from 'redux-thunk'

const composedEnhancer = composeWithDevTools(
  applyMiddleware(thunkMiddleware, loggerMiddleware)
  // other store enhancers if any
)

const store = createStore(rootReducer, composedEnhancer)
export default store
