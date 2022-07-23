import React from "react";

// Поиск будет иметь состояния и чек-боксы, поэтому нужно использовать классовый компонент

class Search extends React.Component {
  state = {
    search: "",
    type: "all"
  };

  handleKey = (event) => {
    // event.preventDefault();
    if (event.key === "Enter") {
      this.props.searchMovies(this.state.search, this.state.type);
    }
  };

  handleFilter = (event) => {
    this.setState(() => ({ type: event.target.dataset.type }), () => {
      this.props.searchMovies(this.state.search, this.state.type);
    });
  };

  render() {
    return (
      <div className="row">
        <div className="row">
          <div className="input-field col s12">
            <input
              className="validate"
              placeholder="search"
              type="search"
              value={this.state.search}
              onChange={(e) => this.setState({ search: e.target.value })}
              onKeyDown={this.handleKey}
            />
            <button
              className="btn search-btn"
              onClick={() => this.props.searchMovies(this.state.search, this.state.type)}
            >
              Search
            </button>
          </div>
          <div>
            <label>
              <input
                className="group3 with-gap"
                type="radio"
                data-type="all"
                onChange={this.handleFilter}
                checked={this.state.type === 'all'}
              />
              <span>All</span>
            </label>
            <label>
              <input
                className="group3 with-gap"
                type="radio"
                data-type="movie"
                onChange={this.handleFilter}
                checked={this.state.type === 'movie'}
              />
              <span>Movies only</span>
            </label>
            <label>
              <input
                className="group3 with-gap"
                type="radio"
                data-type="series"
                onChange={this.handleFilter}
                checked={this.state.type === 'series'}
              />
              <span>Series only</span>
            </label>
          </div>
        </div>
      </div>
    );
  }
}

export { Search };
