import React from 'react'
import ReactDOM from 'react-dom'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from './app/store'
import App from './App'

test('renders learn react link', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  )

  expect(getByText(/learn/i)).toBeInTheDocument()
})

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
  ReactDOM.unmountComponentAtNode(div)
})
