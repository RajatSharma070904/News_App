import React, { Component } from 'react'
import Newsitem from './Newsitem'
import PropTypes from 'prop-types'
// import Loading from "./loading.gif"
export class News extends Component {
  articles =  []
  static defaultProps = {
    country: 'us',
    // pagesize: 1,
    category: 'general', 
  }
  static PropsTypes = {
    country: PropTypes.string,
    // pagesize: PropTypes.number,
    category: PropTypes.string,
  }
  constructor(){
    super();
    this.state = {
      page:1,
      country:"us",
       articles: this.articles,
       loading: true
      }
  }

  async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.state.country}&category=${this.props.category}&apiKey=dc660f3d6d6e407eaeaa83170e0ce317&page=1`;
    console.log("url: "+url)
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults})

  }
 handlepervClick = async () =>{
     console.log("perivous");
     let url = `https://newsapi.org/v2/top-headlines?country=${this.state.country}&category=${this.props.category}&apiKey=dc660f3d6d6e407eaeaa83170e0ce317&page=${this.state.page-1}`;
    console.log("url: "+url)
     let data = await fetch(url);
     let parsedData = await data.json()
     console.log(parsedData);
     this.setState({
       page: this.state.page - 1,
       articles: parsedData.articlesi
     })
     console.log(this.state.page-1)
  }
  handleNextClick = async () =>{
    console.log("next");
    if (this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)) {
       
    }
    else{
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=dc660f3d6d6e407eaeaa83170e0ce317&page=${this.state.page+1}`;
    console.log("url: "+url);
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({
      page: this.state.page + 1 ,
      articles: parsedData.articles
    })
    console.log(this.state.page+1)
  }
  }
  render() {
    return (
      <div className="container my-3">
        <h1 className='text-center' style={{margin: '40px 0px'}}>News aa gyi - Top Headlines</h1>
        <div className="row">
          { this.setState.loading&&<img alt=" " href="./loading.gif"/> }
        {this.state.articles.map((element)=>{
         console.log(this.state.articles);
          console.log(element.url);
         return( <div className="col-md-4" key={element.url}>
          <Newsitem  title={element.title?element.title.slice(0 , 45):""}  description={element.description?element.description.slice(0 , 88):""} 
          imageUrl={element.urlToImage}  newsUrl={element.url}/>
        </div>
       )})}
         
        {/* </div> */}
       <div className="contanier d-flex justify-content-between">
       <button disabled={this.state.page<=1} type="button" className="btn btn-secondary btn-sm" onClick={this.handlepervClick}> &larr; 
         pervious</button>
       <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-primary btn-sm" onClick={this.handleNextClick}>Next &rarr; </button>
       </div>
      </div>
      </div>
    )
  }
}

export default News;