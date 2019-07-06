import React from 'react'
import ImageManager from '../component/ImageManager'
import '../CSS/App.css'
import { createStore } from 'redux'
import { Types } from '../ActionTypes'
import { Provider } from 'react-redux'

const initialState = {
  imgList: [],
  filterText: ""
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case Types.InputText:
      return Object.assign({}, state, {filterText: action.data})
    case Types.UploadImgs:
      return Object.assign({}, state, {imgList: [...state.imgList, ...action.data], filterText: ""})
    case Types.ClickImage:
      return Object.assign({}, state, {imgList: state.imgList.filter(ele => ele !== action.data)})
    default:
      return state;
  }
}

const store = createStore(reducer);

export default function App() {
  return <Provider store={store}>
    <ImageManager />
  </Provider>
}
