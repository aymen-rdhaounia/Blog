import React, { Component } from "react";
import { Button, Input, Modal } from "antd";
import TextArea from "antd/lib/input/TextArea";
import Fire from "../Fire";

export default class EditModal extends Component {
  handleEdit(currentArticle) {
    const firebase = new Fire((error) => {
      if (error) {
        this.setState({ error: error });
      } else {
        firebase.updateArticle(currentArticle);
      }
    });
  }

  render() {
    const { isVisible, currentArticle, onClose, handleChange } = this.props;
    return (
      <Modal
        title="Edit Article"
        visible={isVisible}
        onCancel={onClose}
        destroyOnClose={true}
        footer={
          <Button
            type="primary"
            size="large"
            shape="round"
            onClick={() => {
              this.handleEdit(currentArticle);
              onClose();
            }}>
            Confirm
          </Button>
        }>
        <label htmlFor="title">Titre</label>
        <Input
          type="text"
          name="title"
          value={currentArticle.title}
          placeholder="Titre"
          id="title"
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="content">Contenu</label>
        <TextArea
          name="content"
          id="content"
          value={currentArticle.content}
          placeholder="Contenu"
          cols="30"
          rows="5"
          onChange={(e) => handleChange(e)}
        />
      </Modal>
    );
  }
}

// import { Button, Input, Modal } from "antd";
// import TextArea from "antd/lib/input/TextArea";
// import { useState } from "react";
// import Fire from "../Fire";

// export default function EditModal(props) {
//   const { showModal, editArticle } = props;
//   const { currentArticle } = editArticle;

//   const [isModalVisible, setIsModalVisible] = useState(showModal);
//   const [title, setTitle] = useState(currentArticle.title);
//   const [content, setContent] = useState(currentArticle.content);

//   function handleEdit(e) {
//     const firebase = new Fire((error) => {
//       if (error) {
//         this.setState({ error: error });
//       } else {
//         currentArticle.title = title;
//         currentArticle.content = content;
//         firebase.updateArticle(currentArticle);
//       }
//     });
//     setIsModalVisible(false);
//   }

//   return (
//     <Modal
//       title="Basic Modal"
//       visible={isModalVisible}
//       onCancel={() => setIsModalVisible(false)}
//       destroyOnClose={true}
//       footer={
//         <Button
//           type="primary"
//           size="large"
//           shape="round"
//           onClick={(e) => handleEdit(e)}>
//           Valider
//         </Button>
//       }>
//       <label htmlFor="title">Titre</label>
//       <Input
//         type="text"
//         name="title"
//         value={title}
//         placeholder="Titre"
//         id="title"
//         onChange={(e) => setTitle(e.target.value)}
//       />
//       <label htmlFor="content">Contenu</label>
//       <TextArea
//         name="content"
//         id="content"
//         value={content}
//         placeholder="Contenu"
//         cols="30"
//         rows="5"
//         onChange={(e) => setContent(e.target.value)}
//       />
//     </Modal>
//   );
// }
