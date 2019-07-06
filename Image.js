import React, { Component } from 'react'
import '../CSS/Image.css'
import { Types } from '../ActionTypes'
import { connect } from 'react-redux'

function mapStateToProp(state) {
    return {
        imgList: state.imgList
    }
}

export class Image extends Component {
    static defaultProps = {
        imgFile: null
    }

    deleteImg = () => {
        //通过action改变store里面的state
        this.props.dispatch({
            type: Types.ClickImage,
            data: this.props.imgFile
        });
    }

    test() {
        console.log('hello');
        console.log(this);
    }

    test2 = () => {
        console.log('hi');
        console.log(this);
    }

    render() {
        let {name, size} = this.props.imgFile;
        size = getFileSize(size, 'byte');
        const src = window.URL.createObjectURL(this.props.imgFile);
        return (
            <div className="Image">
                <img src={src} alt={name} onClick={this.test2} />
                <div className="ImageInfo">
                    <p>File Name: {name}</p>
                    <p>File Size: {size}</p>
                </div>
            </div>
        )
    }
}

function getFileSize(curCnt, curUnit, units = ['BYTE', 'KB', 'MB', 'GB', 'TB']) {
    curUnit = curUnit.toUpperCase();
    let curIndex = units.indexOf(curUnit);
    if (curIndex === -1) {
        console.error(curUnit + " is not in [" + units + "]");
        return null;
    }
    while (curCnt >= 1024 && curUnit !== units[-1]) {
        curCnt = (curCnt / 1024).toFixed(1);
        curUnit = units[++curIndex];
    }
    return curCnt + curUnit;
} 

export default connect(mapStateToProp)(Image)
