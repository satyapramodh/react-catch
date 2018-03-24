import React, {Fragment} from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  myInput = React.createRef();

  goToStore = (event) => {
    event.preventDefault();

    const storeName = this.myInput.value.value;
    this.props.history.push(`/store/${storeName}`);
  }

  render() {
    return (
      <Fragment>
        {/* This is a store selector */}
        <form className="store-selector" onSubmit={this.goToStore}>
          <input type="text" required
          placeholder="Store Name"
          defaultValue={getFunName()}
          ref={this.myInput} />
          <button type="submit">Visit Store</button>
        </form>
      </Fragment>
    )
  }
}

export default StorePicker;