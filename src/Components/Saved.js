import React, {Component} from 'react';
import '../App.css';
import {Card, ListGroup} from 'react-bootstrap';
import {
  BrowserRouter as Router,

  Link
} from "react-router-dom";

export default class Saved extends Component {

    state = {
        newsArticles: []
    }
        
      componentDidMount() {
      const goodNews = localStorage.getItem('user');
      const newsFormat = JSON.parse(goodNews);
      console.log(newsFormat);

      if (newsFormat != null) {
          this.setState({newsArticles: newsFormat})

      } else {
          console.log(this.state.news);
      }
  }
    render() {
        return(
            <div>
            <Link to="/" state={this.state}>Go back</Link><br />
            <div className="d-flex justify-content-center mt-5">
            <Card style={{ width: '25rem'}}>
  <Card.Header>Your saved news</Card.Header>
  <ListGroup variant="flush">
                  {this.state.newsArticles != null ? this.state.newsArticles.map((element, index) => {
                        return (
                            
                            <ListGroup.Item><a href={element.split("*", 1)}  target="__blank" key={index}>{element.split("*").slice(1)}<br /></a></ListGroup.Item>
                        )
                    })
                    : ""}
                    </ListGroup>
                    </Card>
                    </div>
                <p></p>
            </div>
        )
    }
}