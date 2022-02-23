import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

export default class News extends Component {
    constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page:1
    }
  }
  async componentDidMount(){
      let url= `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=72a0c4c3f46f45e29a366f43593c2acd&pageSize=${this.props.pageSize}`;
      this.setState({loading:true})
      let data = await fetch(url)
      let parsedData= await data.json()
      console.log(parsedData);
      this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults,loading:false})

  }

handleNextClick= async () => {
    console.log("Next");
    if(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)){

    }
    else {
            let url= `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=72a0c4c3f46f45e29a366f43593c2acd&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({loading:true})
            let data = await fetch(url)
            let parsedData= await data.json()
            console.log(parsedData);
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles,
                loading:false
            })
        }
}

 handlePrevClick = async () => {
    console.log("Previous");

      let url= `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=72a0c4c3f46f45e29a366f43593c2acd&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true})
      let data = await fetch(url);
      let parsedData= await data.json();
      console.log(parsedData);
      this.setState({
          page: this.state.page - 1,
          articles: parsedData.articles,
          loading:false
      })
}

  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center">Top Sports Headlines</h2>
        {this.state.loading && <Spinner/>}
        
        
        <div className="row">
        { !this.state.loading && this.state.articles.map((element)=> {
            return <div className="col-md-4"key={element.url}>
            <NewsItem
              title={element.title?element.title:""}
              description={element.description?element.description:""}
              imageUrl={element.urlToImage} 
              newsUrl={element.url}
            />
          </div> 
        })}
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-info" onClick={this.handlePrevClick}> &larr; Previous </button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-info" onClick={this.handleNextClick}>Next &rarr; </button>

      </div>
      </div>
      
    );
  }
}
