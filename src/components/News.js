import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {
  static defaultProps = {
    country: "in",
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
  };

  articles = [
    // {
    //   "source": { "id": "bbc-sport", "name": "BBC Sport" },
    //   "author": "BBC Sport",
    //   "title": "England given all-clear after Covid scare",
    //   "description": "England's players arrive at the Melbourne Cricket Ground for day two of the third Ashes Test after a Covid-19 scare.",
    //   "url": "http://www.bbc.co.uk/sport/cricket/59798189",
    //   "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/13590/production/_97584297_breaking_news.png",
    //   "publishedAt": "2021-12-26T23:07:26.2081227Z",
    //   "content": "England's players have arrived at the Melbourne Cricket Ground for day two of the third Ashes Test after a Covid-19 scare.\r\nThe England and Wales Cricket Board said in a statement their scheduled dep… [+625 chars]"
    // },
    // {
    //   "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
    //   "author": null,
    //   "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
    //   "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
    //   "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
    //   "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
    //   "publishedAt": "2020-04-27T11:41:47Z",
    //   "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
    // },
    // {
    //   "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
    //   "author": null,
    //   "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
    //   "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
    //   "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
    //   "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
    //   "publishedAt": "2020-03-30T15:26:05Z",
    //   "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
    // }
  ];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: true,
      page: 1,
      totalResult:0,
     
    };
    //  document.title = `${this.props.category} - NewsMonkey`
  }

  async updateNews() {
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}`;
    this.setState({
      loading: true,
    });
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(60);
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResult : parsedData.totalResult,
      loading: false,
    });
    this.props.setProgress(100);
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=af200e81b1dd4cab80758cb9321ba9b3`;
    this.setState({
      loading: true,
    });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      loading: false,
    });
  }
  // handleNextClick = async () => {
  //   console.log("NEXR");
  //   // if(this.state.page +1 > Math.ceil(this.state.totalResults/20)){}

  //   // else{

  //   // }
  //   // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=af200e81b1dd4cab80758cb9321ba9b3&page=${this.state.page+1}`;
  //   // let data= await  fetch(url);
  //   // let parsedData = await  data.json();
  //   // this.setState({loading:true})
  //   // console.log(parsedData)
  //   // this.setState({
  //   //     articles : parsedData.articles,
  //   //     page: this.state.page+1,
  //   //     loading:false,
  //   // })
  //   this.setState({
  //     page: this.state.page + 1,
  //   });
  //   this.updateNews();
  // };
  // handlePrevClick = async () => {
  //   // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=af200e81b1dd4cab80758cb9321ba9b3&page=${this.state.page-1}`;
  //   // let data= await  fetch(url);
  //   // let parsedData = await  data.json();
  //   // console.log(parsedData)
  //   // this.setState({
  //   //     articles : parsedData.articles,
  //   //     page: this.state.page-1
  //   // })
  //   this.setState({
  //     page: this.state.page - 1,
  //   });
  //   this.updateNews();
  // };

  fetchMoreData = async () => {

    this.setState({page: this.state.page +1})
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=af200e81b1dd4cab80758cb9321ba9b3&page=${this.state.page}`;
    this.setState({
      loading: true,
    });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResult : parsedData.totalResult,
      loading: false,
    });
  };

  render() {
    return (
      <div className="container py-3 text-center bg-dark">
        <h2 className="pt-5 text-white">NewsMonkey - {this.props.category} Category</h2>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResult}
          loader={<Spinner/>}
        >
          <div className="container">
        <div className="row mt-5 mb-3">
          {this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : ""
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    publishedAt={element.publishedAt}
                    author={element.author}
                    source={element.source.name}
                  />
                </div>
              );
            })}
        </div>        
        </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-end">
          <button
            type="button"
            disabled={this.state.page <= 1}
            className="btn btn-white mr-3"
            onClick={this.handlePrevClick}
          >
            &larr; Prev
          </button>
          <button
            type="button"
            className="btn btn-white mr-3"
            onClick={this.handleNextClick}
          >
            {" "}
            Next &rarr;
          </button>
        </div> */}
      </div>
    );
  }
}

export default News;
