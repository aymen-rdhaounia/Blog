import React from "react";
import { Button } from "antd";
import { FormOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";

export default class AddButton extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "",
    };
  }
  componentDidMount() {
    // console.log("après le componentDidMount")
  }

  render() {
    // console.log("d'abord render")
    return (
      <Tooltip title="Merci d'ajouter votre article">
        <Button
          type="default"
          size="large"
          shape="round"
          onClick={this.props.onClick}>
          <FormOutlined />
          {this.props.content}
        </Button>
      </Tooltip>
    );
  }
}
