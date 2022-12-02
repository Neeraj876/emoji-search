import { PureComponent } from 'react';
import './SearchBar.css';

export default class SearchInput extends PureComponent {
  render() {
    const { handleChange } = this.props;

    const handleText = (event) => {
      handleChange(event);
    };

    return (
      <div className="search-input">
        <div>
          <input
            className="input-text"
            type="text"
            placeholder="Search Emoji"
            onChange={handleText}
          />
        </div>
      </div>
    );
  }
}
