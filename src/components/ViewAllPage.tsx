import * as React from 'react';
import selectTextEntries from '../selectors/text-selector';
import * as moment from 'moment';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setTextFilter } from '../actions/filters';
import { Entry } from '../interfaces/Actions';

// Component Specification: On the dashboard page, a button will be clicked to render 
// this page, which returns ALL entries. A search feature will also be implemented into this or the child component

interface IProps {
    setTextFilter: (value: string) => void;
    filters: any;
    entries: Entry[];
}

export class ViewAllPage extends React.Component<IProps, any> {
    onTextChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        // dispatch a setTextFilter action object
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
                        className="viewall__text"
                        size={100}
                        value={this.props.filters.text}
                        onChange={this.onTextChange}
                    />
                </div>
                <div>
                    {
                        // For each entryObj, pull off the id, date, and entry properties (otherwise would have to be entryObj.id instead of just id)
                        this.props.entries.map(({ id, date, entry }) => (
                            <Link className="entry-item" to={`/edit/${id}`} key={id}>
                                <div className="entry-item--all">
                                    <p>
                                        {moment(date).format('MMM D YY')}
                                        <br/>
                                    </p>
                                    <p>
                                        {entry}
                                    </p>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        )
    }
}

// selectEntries selector- 
// params: current entries, and current filters
// return: entries that contain the passed in filter
const mapStateToProps = (state) => ({
    filters: state.filters,
    entries: selectTextEntries(state.entries, state.filters)
});

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text))
});

export default connect (mapStateToProps, mapDispatchToProps)(ViewAllPage);