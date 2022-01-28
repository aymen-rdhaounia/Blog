import React, { Component } from "react";
import { Button, Modal } from "antd";

export default class ViewArticleModal extends Component {
  constructor() {
    super();
    this.state = {
      isModalVisible: false,
    };
  }
  render() {
    const { isVisible, currentArticle } = this.props;
    return (
      <Modal
        title="View Article"
        visible={isVisible}
        onCancel={this.props.onClose}
        footer={
          <Button
            type="primary"
            size="large"
            shape="round"
            onClick={this.props.onClose}>
            Close
          </Button>
        }>
        <h2>{currentArticle.title}</h2>
        <img
          src="https://community-cdn-digitalocean-com.global.ssl.fastly.net/variants/iCfQnsFQzuzB7S8bLbxECrVk/035575f2985fe451d86e717d73691e533a1a00545d7230900ed786341dc3c882"
          alt=""
          className="card-image"
        />
        <p>{currentArticle.content}</p>
      </Modal>
    );
  }
}
