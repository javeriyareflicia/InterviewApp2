import { createStore, applyMiddleware, Store, Middleware} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducer/rootReducer'

const middlewares: Middleware[] = [thunk]
const store = createStore(rootReducer, applyMiddleware(...middlewares))

export default store
