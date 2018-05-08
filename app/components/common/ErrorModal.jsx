import React, { Component } from "react";
import PropTypes from "prop-types";

export default class ErrorModal extends Component {
  input;
  constructor(props) {
    super(props);
  }
  componentDidMount = () => {
    const modal = new Foundation.Reveal($("#error-modal"));
    modal.open();
  };
  componentWillUnmount = () =>{
    debugger;
    $("#error-modal").close()
  }
  render() {
    const { title, message } = this.props;
    return (
      <div className="reveal tiny text-center" id="error-modal" data-reveal="">
        <h4>{title}</h4>
        <p className="lead">{message}</p>
        <p>
          <button className="button hollow" data-close="">
            hmm, okay...
          </button>
        </p>
      </div>
    );
  }
}

ErrorModal.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string.isRequired
};
ErrorModal.defaultProps = {
  title: "Error"
};
