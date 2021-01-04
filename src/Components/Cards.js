import React, {Component} from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import {Container, Row, Button, Col, Form, InputGroup, Dropdown, DropdownButton, FormControl} from 'react-bootstrap';

class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        articles: [],
        user: '',
        rememberMe: false,
        language: '',
        news: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.getNews = this.getNews.bind(this);
    this.handleLanguage = this.handleLanguage.bind(this);
    this.handleStorage = this.handleStorage.bind(this);
  }

 

  clearStorage() {
      window.localStorage.clear();
  }

     componentDidMount() {
      const goodNews = localStorage.getItem('user');
      const newsFormat = JSON.parse(goodNews);
      console.log(newsFormat);
      if (newsFormat != null) {
          this.setState({news: newsFormat})
      }
  }

   handleStorage(event) {
        alert("News Saved");
        const save = event.target.value;
        var res = save.split("*");
        console.log(res);
        this.state.news.push(save);
        var news = this.state.news;
        console.log([...this.state.news]);
        localStorage.setItem('user', JSON.stringify(news));
        console.log(save);
        event.preventDefault();

  }





  handleChange(event) {
    this.setState({topic: event.target.value});
  }

  handleLanguage(event) {
      this.setState({language: event.target.value})
  }

//   handleSubmit(event) {
//       alert(this.state.topic);
//       event.preventDefault();
//   }
    

    getNews(event) {
         var key = "23de237b3d5a45c2becdee407614db97";
        axios.get(`https://newsapi.org/v2/everything?q=${this.state.topic}&language=${this.state.language}&apiKey=${key}&pageSize=50`)
        .then(news => {
            var articles = news.data.articles;
            console.log(articles);
                
                this.setState({
                   articles: articles,
                })
            })

           event.preventDefault();
    }
    render() {
        return(
            
            <div>
                <Container>
                <h1>Search news!</h1>
                <div className="form justify-content-center" style={{width: "40rem", margin: "0 auto"}}>
                <form>

                        <InputGroup>
                            <FormControl
                            placeholder="Search topic"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            name="user"
                            style={{width: "20rem"}}
                            onChange={this.handleChange}
                            value={this.state.topic}
                            />
                           <Form.Control as="select" onChange={this.handleLanguage}>
                        <option value="en">English</option>
                        <option value="es">Spanish</option>
                        <option value="de">German</option>
                        <option value="fr">French</option>
                        </Form.Control>
                        </InputGroup>
                    <div className="buttons">
                    <button className="search btn btn-primary" value="submit" onClick={this.getNews}>Search</button>
                     <button className="search btn btn-primary" style={{margin: "20px"}} value="submit" onClick={this.clearStorage}>Clear</button>
                    <Link to="/saved" state={this.state}>Saved News</Link>

                    </div>
                   

                    <p></p>
                    </form>
                </div>

                </Container>
                    <Row className="justify-content-center">
                        {this.state.articles.map((article, index) => (
                            <Card key={index}
                                style={{ width: "18rem", padding: "10px", margin: "20px", borderRadius: "10px", boxShadow: "0 0 10px #999999", display: "flex", flexDirection: "column"}}>
                                <Card.Img variant="top" src={article.urlToImage} />
                                <Card.Body>
                                    <Card.Title>{article.title}</Card.Title>
                                    <Card.Text>{article.content}</Card.Text>
                                    <footer className="blockquote-footer">
                                        Published by <cite title="Source Title">{article.source.name} <br /> {(new Date(article.publishedAt)).toLocaleDateString()}</cite>
                                    </footer>
                                    <Button style={{marginTop: "auto"}} variant="primary" target="__blank" href={article.url} style={{ width: "15rem" }}>Read article</Button>   
                                    <Button  style={{marginTop: "auto"}} variant="success" className="mt-2" value={article.url + " * " + article.title} onClick={this.handleStorage}  style={{ width: "15rem" }}>Save article</Button>   


                                </Card.Body>
                            </Card>
                        )
                             )}
                        
                    </Row>
                <Container>


                </Container>


            </div>
        )
    }
}

export default Cards;