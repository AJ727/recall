import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setTextFilter } from '../actions/filters';

// Component Specification: On the dashboard page, a button will be clicked to render 
// this page, which returns ALL entries. A search feature will also be implemented into this or the child component

export class ViewAllPage extends React.Component {
    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value);
     }
    render() {
        return (
            <div>
                <div>
                    {/* this.props.filters.text <-- gets input each time you type something */}
                    <input
                        type="text"
                        placeholder="Search entries"
                        value={this.props.filters.text}
                        onChange={this.onTextChange}
                    />
                </div>
                <div>
                    {console.log(this.props.entries)}
                    {
                        // For each entryObj, pull off the id, date, and entry properties (otherwise would have to be entryObj.id instead of just id)
                        this.props.entries.map(({ id, date, entry }) => (
                            <Link className="entry-item" to={`/edit/${id}`} key={id}>
                                {<h1>{moment(date).format('MMM D YY')}</h1>}   
                                {entry}
                            </Link>
                        ))
                    }
                </div>
            </div>
        )
    }
}

// Need this in order to access filters, which contains the current text filter
const mapStateToProps = (state) => ({
    filters: state.filters,
    entries: state.entries
});

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text))
});

export default connect (mapStateToProps, mapDispatchToProps)(ViewAllPage);