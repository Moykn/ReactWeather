import React, { Component } from "react";
import ReactDOM from "react-dom";
import ReactDOMServer from "react-dom/server";
import PropTypes from "prop-types";

export default class ErrorModal extends Component {
  input;
  constructor(props) {
    super(props);
  }
  componentDidMount = () => {
    const { title, message } = this.props;
    var modalMarkup = (
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
    const $modal = $(ReactDOMServer.renderToString(modalMarkup));
    $(ReactDOM.findDOMNode(this)).html($modal);
    const modal = new Foundation.Reveal($("#error-modal"));
    modal.open();
  };
  componentWillUnmount = () => {};
  render() {
    return <div />;
  }
}

ErrorModal.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string.isRequired
};
ErrorModal.defaultProps = {
  title: "Error"
};
