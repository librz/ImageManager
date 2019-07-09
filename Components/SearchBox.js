import React, { Component } from 'react'
import '../CSS/SearchBox.css'
import { Types } from '../ActionTypes'
import { connect } from 'react-redux'

function mapStateToProps(state) {
    return {
        filterText: state.filterText,
        imgOptions: state.imgList.map(({name}) => <option key={name} value={name} />) 
    }
}

export class SearchBox extends Component {
    static defaultProps = {
        placeholder: ""
    }

    updateFilterText = (e) => {
        this.props.dispatch({
            type: Types.InputText,
            data: e.target.value
        })
    }

    render() {
        return (
            <div className="SearchBox">
                <input type='search' 
                    value={this.props.filterText} 
                    placeholder={this.props.placeholder} 
                    onChange={this.updateFilterText}
                    autocomplete="on"
                    list="options"
                />
                <datalist id="options">
                    {this.props.imgOptions}
                </datalist>
            </div>
        )
    }
}

export default connect(mapStateToProps)(SearchBox)
