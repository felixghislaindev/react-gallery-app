// this is the main compoenent of the app, it handle everything to do with making
// api call distributing correct data to other compponent in the app(children)
// setting routes and managin the appilcation

import React, { Component } from "react";
import "./css/index.css";

// importing react router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// importing api key
import apiKey from "./config/config";
// importing axios for api call and JSON conversion
import axios from "axios";

// importing components
import SearchForm from "./components/SearchForm";
import NavBar from "./components/navBar";
import ImagesContainer from "./components/Cotainer";
import Loading from "./components/Loding";

class App extends Component {
  state = {
    default1: [],
    default2: [],
    default3: [],
    searchResult: [],
    tags: ["cats", "dogs", "boat"],
    loading: true
  };
  key = apiKey;
  perPage = 24;
  handleApiCall = (tag = "cats") => {
    const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${
      this.key
    }&tags=${tag}&media=&per_page=${this.perPage}&format=json&nojsoncallback=1`;
    const url2 = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${
      this.key
    }&tags=${this.state.tags[1]}&media=&per_page=${
      this.perPage
    }&format=json&nojsoncallback=1`;
    const url3 = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${
      this.key
    }&tags=${this.state.tags[2]}&media=&per_page=${
      this.perPage
    }&format=json&nojsoncallback=1`;

    // making call
    axios
      .get(url)
      .then(data => data.data.photos)
      .then(photoData => {
        // returned array from called
        const images = photoData.photo;
        // updating state with the returned images
        this.setState({
          default1: images,
          loading: false
        });
        return axios.get(url2);
      })
      .then(res => res.data.photos)
      .then(defaultTag2 => {
        this.setState({
          default2: defaultTag2.photo
        });
        return axios.get(url3);
      })
      .then(res => res.data.photos)
      .then(defaultTag3 => {
        this.setState({
          default3: defaultTag3.photo
        });
      })
      .catch(err => console.log("data could not be fetched"));
  };
  handleSearch = tag => {
    const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${
      this.key
    }&tags=${tag}&media=&per_page=${this.perPage}&format=json&nojsoncallback=1`;
    axios
      .get(url)
      .then(data => data.data.photos)
      .then(res => {
        this.setState({
          searchResult: res.photo
        });
      })
      .catch(err => console.log("could not fetch data"));
  };
  componentDidMount() {
    this.handleApiCall();
  }
  render() {
    return (
      <Router>
        <div className="container">
          <SearchForm search={this.handleSearch} />
          <NavBar />
          {/* routes */}
          <Switch>
            {this.state.loading ? (
              <Loading />
            ) : (
              <Route
                exact
                path="/"
                render={() => (
                  <ImagesContainer
                    title="Cats images"
                    images={this.state.default1}
                  />
                )}
              />
            )}
            <Route
              path="/dogs"
              render={() => (
                <ImagesContainer
                  title="Dogs images"
                  images={this.state.default2}
                />
              )}
            />
            <Route
              path="/computer"
              render={() => (
                <ImagesContainer
                  title="Computer images"
                  images={this.state.default3}
                />
              )}
            />
            <Route
              path="/search"
              render={() => (
                <ImagesContainer
                  title=" search images"
                  task="search"
                  images={this.state.searchResult}
                />
              )}
            />
            {/* catching 404 route */}
            <Route render={() => <h1>The url Does not exist</h1>} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
