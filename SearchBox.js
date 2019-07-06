import React, { Component } from 'react'
import '../CSS/SearchBox.css'
import { Types } from '../ActionTypes'
import { connect } from 'react-redux'

function mapStateToProps(state) {
    return {
        filterText: state.filterText
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
                <input type='search' value={this.props.filterText} placeholder={this.props.placeholder} onChange={this.updateFilterText}    />
            </div>
        )
    }
}

export default connect(mapStateToProps)(SearchBox)
