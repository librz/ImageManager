import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import ImageManager from './components/ImageManager'
import { Types } from './ActionTypes'
import './CSS/App.css'

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
    <div className="App">
            <SearchBox placeholder='检索图片名称' />
            <ImageSelector title="上传图片" />
            <ImageGalley />
        </div>
  </Provider>
}
