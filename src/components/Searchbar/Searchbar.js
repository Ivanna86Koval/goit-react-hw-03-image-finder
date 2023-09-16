import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BsSearch } from 'react-icons/bs';
import {
  HeaderSearchBar,
  SearchForm,
  SearchBtn,
  SearchSpan,
  SearchFormInput,
} from '../Searchbar/Searchbar.styled.js';

export class Searchbar extends Component {
  state = {
    search: '',
  };

  handleChange = event => {
    this.setState({
      [event.currentTarget.name]: event.target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.search.trim());
  };
  render() {
    return (
      <HeaderSearchBar>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchBtn type="submit">
            <BsSearch />
            <SearchSpan>Search</SearchSpan>
          </SearchBtn>
          <SearchFormInput
            onChange={this.handleChange}
            className="input"
            name="search"
            type="text"
            id="search"
            autoComplete="off"
            autoFocus
            value={this.state.search}
            placeholder="Search images and photos"
          />
        </SearchForm>
      </HeaderSearchBar>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
