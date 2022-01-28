import logo from "./logo.svg";
import bg from "./images/1.jpg";
import "./App.css";
import React from "react";
import AddButton from "./components/AddButton";
import ArticleModal from "./components/ArticleModal";
import Fire from "./Fire";
import { Spin } from "antd";
import ArticleCard from "./components/ArticleCard";
import ViewArticleModal from "./components/ViewArticleModal";
import EditModal from "./components/EditModal";
import Gif from "./components/Gif";

export default class App extends React.Component {
  constructor() {
    super();
    // this is the state of articles
    this.state = {
      fullName: "User",
      isArticleModalVisible: false,
      viewArticleModal: false,
      isEditModalVisible: false,
      articles: [],
      currentArticle: {},
      loading: true,
      error: null,
      showGif: false,
    };
  }

  // componentDidMount()  will run before the component is rendered

  componentDidMount() {
    const firebase = new Fire((err) => {
      if (err !== null) {
        this.setState({
          error: err,
        });
      } else {
        firebase.getArticles((articles) => {
          this.setState({
            articles: articles,
            loading: false,
          });
        });
      }
    });
  }

  // handlechange will uypdate the state of the current article

  handleChange(e) {
    this.setState({
      currentArticle: {
        ...this.state.currentArticle,
        [e.target.name]: e.target.value,
      },
    });
  }

  showGifNow() {
    this.setState({ showGif: true });
    // after 5 seconds the state of shiowGif will be changed top false
    setTimeout(() => {
      this.setState({ showGif: false });
    }, 5000);
  }

  render() {
    // we are getting states from this.state object
    const { isArticleModalVisible, viewArticleModal, isEditModalVisible } =
      this.state;

    return (
      <div className="App">
        {this.state.showGif && <Gif showGif />}
        <img src={bg} alt="" className="bg-image" />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" width={300} />
          <h1>Bienvenue sur Coding News</h1>
          {/* this button will add/create article */}
          <AddButton
            content="Rédiger un article"
            onClick={() => {
              this.setState({ isArticleModalVisible: true });
            }}
          />
          {/* in case of error show the error */}
          {this.state.error && <p>Une erreur est survenue</p>}
          {/* in case of loading show the loader */}
          {this.state.loading && <Spin />}

          {/* below is the code of all the article cards being shown in the app */}
          <ArticleCard
            articles={this.state.articles}
            onEdit={(article) => {
              this.setState({
                currentArticle: article,
                isEditModalVisible: true,
              });
            }}
            onView={(article) => {
              this.setState({
                currentArticle: article,
                viewArticleModal: true,
              });
            }}
          />

          {/* this is the modal for adding article */}
          <ArticleModal
            isVisible={isArticleModalVisible}
            title="Mon article"
            onClose={() => {
              this.setState({
                isArticleModalVisible: false,
                currentArticle: {},
                showGif: true,
              });
              this.showGifNow();
            }}
            handleChange={(e) => this.handleChange(e)}
            // handleImageChange={(e) => this.handleImageChange(e)}
            currentArticle={this.state.currentArticle}
          />

          {/* this is the modal for editing article */}
          <EditModal
            isVisible={isEditModalVisible}
            onClose={() =>
              this.setState({
                isEditModalVisible: false,
                currentArticle: {},
              })
            }
            handleChange={(e) => this.handleChange(e)}
            currentArticle={this.state.currentArticle}
          />

          {/* this is the modal for viewing article */}
          <ViewArticleModal
            isVisible={viewArticleModal}
            onClose={() =>
              this.setState({
                viewArticleModal: false,
                currentArticle: {},
              })
            }
            currentArticle={this.state.currentArticle}
          />
        </header>
      </div>
    );
  }
}
