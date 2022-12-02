import React, { PureComponent } from 'react';
import Header from './Dashboard/Header/Header.jsx';
import SearchInput from './Dashboard/Searchbar/SearchBar.jsx';
import EmojiResults from './Dashboard/Emojis/EmojiResults.jsx';
import Filter from './Dashboard/Emojis/Filter';

export default class App extends PureComponent {
  state = {
    filteredEmojis: Filter('', 20),
  };

  handleChange = (event) => {
    this.setState({
      filteredEmojis: Filter(event.target.value, 15),
    });
  };

  render() {
    return (
      <div>
        <Header />
        <SearchInput handleChange={this.handleChange} />
        <EmojiResults emojiData={this.state.filteredEmojis} />
      </div>
    );
  }
}
