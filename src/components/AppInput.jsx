import React from 'react';
import Swal from 'sweetalert2';
import autoBindReact from 'auto-bind/react';

export default class AppInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
    };
    this.maxLength = 50;

    autoBindReact(this);
  }

  onTitleChangeHandler(e) {
    const value = e.target.value.slice(0, this.maxLength);
    this.setState((prevState) => ({
      ...prevState,
      title: value,
      inputLength: value.length,
    }));
  }

  onContentChangeEventHandler(e) {
    this.setState((prevState) => ({
      ...prevState,
      body: e.target.value,
    }));
  }

  onSubmitEventHandler(e) {
    e.preventDefault();
    if (this.state.title.length && this.state.body.length) {
      this.props.onAdd(this.state);
      Swal.fire({
        title: 'Success!',
        text: 'Note created!',
        icon: 'success',
        confirmButtonText: 'Ok',
      });
    } else {
      Swal.fire({
        title: 'Error!',
        text: 'Title and Content required!',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
    }
  }

  render() {
    return (
      <div className="note-input">
        <h2>Add Note</h2>
        <form className="contact-input" onSubmit={this.onSubmitEventHandler}>
          <p className="note-input__title__char-limit">
            Sisa Karakter:
            {' '}
            {this.state.inputLength
              ? this.maxLength - this.state.inputLength
              : this.maxLength}
          </p>
          <input
            className="note-input__title"
            type="text"
            placeholder="Title.."
            value={this.state.title}
            onChange={this.onTitleChangeHandler}
          />
          <textarea
            className="note-input__body"
            type="text"
            placeholder="Content.."
            spellCheck="false"
            value={this.state.body}
            onChange={this.onContentChangeEventHandler}
          />
          <button type="submit">Create</button>
        </form>
      </div>
    );
  }
}
