import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Form, SearchBtn } from "../components/Search";
import SearchContainer from "../components/SearchContainer";
import API from "../utils/API";
class Books extends Component {
    state = {
      books: [],
      title: "",
      authors: "",
      description: "",
      image: "",
      infoLink: "",
      previewLink: ""
    };
    componentDidMount() {

    }
  
    handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    };
  
    handleFormSubmit = event => {
  
      event.preventDefault();
      API.searchBooks(this.state.title)
        .then(res => {
          this.setState({books: res.data.items});
        } )
        .catch(err => console.log(err))
  
  
    };

    render() {
    console.log(this.state.books);
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <Jumbotron />
            <form>
              <div className="form-row">
                <div className="col-7">
                  <Form
                    value={this.state.title}
                    onChange={this.handleInputChange}
                    name="title"
                    placeholder="Book Name (required)"
                  />
                </div>
                <div className="col-auto">
                  <SearchBtn
                    disabled={!this.state.title}
                    onClick={this.handleFormSubmit}
                  >
                    Search
              </SearchBtn>
                </div>
              </div>
              <SearchContainer results={this.state.books} />
            </form>
          </div>
        </div>
      </div>
    );
  };
}
export default Books;