import React from 'react'
import SearchBox  from './SearchBox'
import ImageSelector from './ImageSelector'
import ImageGalley from './ImageGalley'
import '../CSS/ImageManager.css'

export default function ImageManager(props) {
    return (
        <div className="ImageManager">
            <SearchBox placeholder='检索图片名称' />
            <ImageSelector title="上传图片" />
            <ImageGalley />
        </div>
    )
}
