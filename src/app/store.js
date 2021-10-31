import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import loggerMiddleware from '../middleware/logger'
import reducer from '../reducer'
import thunkMiddleware from 'redux-thunk'

const getMiddleware = () => {
    if (process.env.NODE_ENV === 'production') {
        return applyMiddleware(loggerMiddleware, thunkMiddleware)
    } else {
        return applyMiddleware(
            loggerMiddleware,
            thunkMiddleware,
            createLogger()
        )
    }
}

export const store = createStore(reducer, composeWithDevTools(getMiddleware()))

export default store
