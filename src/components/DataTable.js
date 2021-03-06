import React, { Component } from 'react'
import TableDataRow from "./TableDataRow"
import TableHeaderLabel from './TableHeaderLabel';
const apiUrl = "https://api.sawatchlabs.com/models/13/2017"

export default class DataTable extends Component {
    constructor() {
        super()
        this.state = {
            carData: [],
            currentSort: "",
            sortDirection: 0,
        }
    }
    
    componentDidMount() {
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => data.data)
            .then(carData => this.setState({carData}))
            .catch(error => console.error(error))
    }

    dataAscendDescend = () => {
        return this.state.sortDirection === 0 
            ? this.sortedCarData() 
            : this.sortedCarData().reverse()
    }

    reverseSortDirection = () => {
        return this.state.sortDirection === 0 
            ? this.setState({sortDirection: 1}) 
            : this.setState({sortDirection: 0})
    }

    sortedCarData = () => {
        return this.state.carData.sort((a, b) => {
            if (!this.state.currentSort) {
                return 0
            } else {
                return a[this.state.currentSort] > b[this.state.currentSort] 
                ? 1
                : -1 
            } 
        })
    }

    updateCurrentSort = sortTerm => {
        this.setState({
            currentSort: sortTerm
        })
        this.reverseSortDirection()
    }

    render() {
        return (
            <div className="swt-table-wrapper">
                <table className="swt-table">
                    <thead>
                        <tr>
                            <TableHeaderLabel 
                                currentSort={this.state.currentSort} 
                                updateCurrentSort={this.updateCurrentSort} 
                            />
                        </tr>
                    </thead>
                    <tbody id="swt-table">
                        <TableDataRow sortedCarData={this.dataAscendDescend}/>
                    </tbody>
                </table>
            </div>
        )
    }
}