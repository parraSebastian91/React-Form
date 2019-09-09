import { createStore } from 'redux'

export const store = createStore(() => { }, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) // esto para que la extencion - Redux DevTols - lo detecte

