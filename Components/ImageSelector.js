import React, { Component } from 'react'
import '../CSS/ImageSelector.css'
import { Types } from '../ActionTypes'
import { connect } from 'react-redux'

function mapStateToProps(state) {
    return {
        imgList: state.imgList
    }
} 

export class ImageSelector extends Component {
    uploadImages = (e) => {
        const files = e.target.files;
        if (files.length === 0) 
            return;
        let newImgFiles = [];
        //检查图片是否已经存在
        Array.from(files).forEach(imgFile => {
            const {name, size, lastModified} = imgFile
            if (
                //如果name, size, lastModified一致就认为图片是一样的
                this.props.imgList.some(ele => 
                (ele.name === name) 
                && (ele.size === size) 
                && (ele.lastModified === lastModified))
            ) 
                alert(`${imgFile.name} 已经存在`);
            else
                newImgFiles.push(imgFile);
        })
        if (newImgFiles.length === 0)
            return;
        else
            this.props.dispatch({
                type: Types.UploadImgs,
                data: newImgFiles
            })
        //改变value，下一次选取相同的图片时，仍然会触发onChange事件
        e.target.value = null; 
    }

    static defaultProps = {
        title: '上传图片'
    }

    render() {
        return (
            <div className="ImageSelector">
                <label htmlFor="ImageSelector">
                    <p>{this.props.title}</p>
                    <input type="file" id="ImageSelector" accept=".jpg, .png" multiple onChange={this.uploadImages}/>
                </label>
            </div>
        )
    }
}
export default connect(mapStateToProps)(ImageSelector)
