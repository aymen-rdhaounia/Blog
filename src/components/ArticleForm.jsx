import React, { Component } from "react";
import { Input } from "antd";
const { TextArea } = Input;
export default class ArticleForm extends Component {
  render() {
    return (
      <form>
        {/* label of title */}
        <label htmlFor="title">Titre</label>
        <Input
          type="text"
          name="title"
          value={this.props.title}
          placeholder="Titre"
          id="title"
          onChange={this.props.handleChange}
        />
        <label htmlFor="content">Contenu</label>
        <TextArea
          name="content"
          id="content"
          value={this.props.content}
          placeholder="Contenu"
          cols="30"
          rows="5"
          onChange={this.props.handleChange}
        />
      </form>
    );
  }
}
