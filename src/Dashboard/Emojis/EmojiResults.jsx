import { PureComponent } from 'react';
import EmojiResultRow from './EmojiResultRow';
import Clipboard from 'clipboard';

export default class EmojiResults extends PureComponent {
  componentDidMount() {
    this.Clipboard = new Clipboard('.copy-it');
  }

  componentWillUnmount() {
    this.Clipboard.destroy();
  }
  render() {
    const { emojiData } = this.props;
    return (
      <div className="component-emoji-results">
        {emojiData.map((emoji) => (
          <EmojiResultRow
            key={emoji.title}
            title={emoji.title}
            symbol={emoji.symbol}
          />
        ))}
      </div>
    );
  }
}
