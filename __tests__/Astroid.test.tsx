import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import Astroid from '../screens/Astroid'
import { mount } from 'enzyme'
import * as dependencies from '../redux/actions/astroidAction'

const mockStore = configureMockStore()
const store = mockStore({
  userState: {
    astroid: {
      astroid: {
        name: "",
        is_potentially_hazardous_asteroid: "",
        nasa_jpl_url: "",
      }
    },
  }
})

const createTestProps = (props: Object) => ({
  navigation: {
    navigate: jest.fn()
  },
  ...props
})

describe('Astroid screen', () => {
  describe('rendering', () => {

    let props = createTestProps({})
    beforeEach(() => {
      props = {
        navigation: {
          navigate: jest.fn(() => console.log("called")),
        }
      };

      Object.defineProperty(dependencies, 'SearchAstroid', {
        value: jest.fn(() => {
          return () => {
            console.log("mock fn");
            return new Promise((res, rej) => {
              res('done');
            })
          }
        })
      });
      Object.defineProperty(dependencies, 'StartRandomSearch', {
        value: jest.fn(() => {
          return () => {
            console.log("mock fn");
            return new Promise((res, rej) => {
              res('done');
            })
          }
        })
      });
    })
    const wrapper = mount(
      <Provider store={store}>
        <Astroid {...props} />
      </Provider>
    )

    it('There should be two buttons', async () => {
      expect(wrapper.find(TouchableOpacity)).toHaveLength(2)
    })
  })
})