import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, publishedAt, author, source } =
      this.props;
    return (
      <div className="card h-100 mb-3 mt-3 rounded">
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger p-2 text-white">
          {source}
        </span>
        <img
          className="card-img-top"
          src={
            !imageUrl
              ? "https://images.hindustantimes.com/tech/img/2022/01/03/1600x900/_4515ebfa-b308-11e8-a206-120fd6da8a0d_1641173106223.jpg"
              : imageUrl
          }
          alt="Card image cap"
          height="250"
          width="100"
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p class="card-text">
            <small class="text-muted">
              On: {new Date(publishedAt).toGMTString()}
            </small>
          </p>
          <p class="card-text">
            <small class="text-muted">
              By Author:{" "}
              <span class="text-danger">{author ? author : "unknown "}</span>
            </small>
          </p>
          <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark p-2">
            Go somewhere
          </a>
        </div>
      </div>
    );
  }
}

export default NewsItem;
