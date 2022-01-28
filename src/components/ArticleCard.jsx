import React from "react";
import { EditOutlined, DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import { Card } from "antd";
import Fire from "../Fire";

export default function ArticleCard(props) {
  const { articles, onEdit, onView } = props;

  // this function will delete the article from firebase and update the state
  const OnDelete = (article) => {
    const firebase = new Fire((error) => {
      if (error) {
        this.setState({ error: error });
      } else {
        firebase.deleteArticle(article);
      }
    });
  };

  return (
    <section className="cards-container">
      {articles.map((article, index) => (
        // below is the article card
        <Card
          className="card"
          style={{ width: 300 }}
          actions={[
            <DeleteOutlined
              key="delete"
              onClick={() => OnDelete(article)}
              style={{ color: "red" }}
            />,
            <EditOutlined
              key="edit"
              onClick={() => onEdit(article)}
              style={{ color: "blue" }}
            />,
            <EyeOutlined
              style={{ color: "green" }}
              key="View"
              onClick={() => {
                onView(article);
              }}
            />,
          ]}
          key={index}>
          <h2>{article.title}</h2>
          <img
            src="https://community-cdn-digitalocean-com.global.ssl.fastly.net/variants/iCfQnsFQzuzB7S8bLbxECrVk/035575f2985fe451d86e717d73691e533a1a00545d7230900ed786341dc3c882"
            alt=""
            className="card-image"
          />
          <p>{article.content}</p>
        </Card>
      ))}
    </section>
  );
}
