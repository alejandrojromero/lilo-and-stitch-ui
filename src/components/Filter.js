import React, { Component } from 'react';
export default class Products extends Component {

    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <label>Sort by:
               <select className="form-control" value={this.props.sort} onChange={this.props.handleSortChange}>
                            <option value="">None</option>
                            <option value="lowestpwr">POWER: Lowest to highest</option>
                            <option value="highestpwr">POWER: Highest to lowest</option>
                        </select>
                    </label>
                </div>
                <div className="col-md-4">
                    <label > Filter by Type:
               <select className="form-control" value={this.props.size} onChange={this.props.handleSizeChange}>
                            <option value="">ALL</option>
                            <option value="elemental">ELEMENTAL</option>
                            <option value="flying">FLYING</option>
                            <option value="psychic">PSYCHIC</option>
                            <option value="speed">SPEED</option>
                            <option value="strength">STRENGTH</option>
                        </select>
                    </label>
                    
                </div>
                <div className="col-md-4">
                <div className="alert alert-info">
                	<p><b>RESULTS</b></p>
                    {`${this.props.count} available experiments match your search!`}
                    </div>
                </div>
            </div>
        )
    }
}
