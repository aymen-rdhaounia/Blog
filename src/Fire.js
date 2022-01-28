import firebase from "firebase";

const firebaseConfig = {
  // À compléter avec votre SDK Firebase (Cf. diapos 14 et 15)
  apiKey: "AIzaSyCQ6_LMPgMBaTbmzEWKLtno3vyKymRw8ZY",
  authDomain: "news-13bcf.firebaseapp.com",
  projectId: "news-13bcf",
  storageBucket: "news-13bcf.appspot.com",
  messagingSenderId: "141891819001",
  appId: "1:141891819001:web:4ec29b2e4eca141050d928",
};

export default class Fire {
  constructor(callback) {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        callback(null);
      } else {
        firebase
          .auth()
          .signInAnonymously()
          .catch((error) => {
            callback(error);
          });
      }
    });
  }

  get ref() {
    return firebase.firestore().collection("articles");
  }

  getArticles(callback) {
    let ref = this.ref.orderBy("created_at");
    this.unsubscribe = ref.onSnapshot(
      (snapshot) => {
        let articles = [];
        snapshot.forEach((doc) => {
          articles.push({ id: doc.id, ...doc.data() });
        });
        callback(articles.reverse());
      },
      function (error) {
        callback(error);
      }
    );
  }

  addArticle(article) {
    this.ref.add(article);
  }

  deleteArticle(article) {
    this.ref.doc(article.id).delete();
  }

  updateArticle(article) {
    this.ref.doc(article.id).update(article);
  }
}
