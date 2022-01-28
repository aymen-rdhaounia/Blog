import { Button, Modal } from "antd";
import Fire from "../Fire";
import React from "react";
import ArticleForm from "./ArticleForm";

export default class ArticleModal extends React.Component {
  async handleSubmit(e) {
    const firebase = new Fire(async (error) => {
      if (error) {
        this.setState({ error: error });
      } else {
        const article = {
          title: this.props.currentArticle.title,
          content: this.props.currentArticle.content,
          created_at: new Date(),
        };
        // adding article to firebase
        firebase.addArticle(article);
        this.props.onClose();
      }
    });
  }

  render() {
    const { isVisible, title, currentArticle, onClose, handleChange } =
      this.props;
    return (
      <Modal
        visible={isVisible}
        title={title}
        onCancel={onClose}
        destroyOnClose={true}
        footer={
          <Button
            type="primary"
            size="large"
            shape="round"
            onClick={(e) => this.handleSubmit(e)}>
            Valider
          </Button>
        }>
        <ArticleForm
          title={currentArticle.title}
          content={currentArticle.content}
          handleChange={(e) => handleChange(e)}
        />
      </Modal>
    );
  }
}
