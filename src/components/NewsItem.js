//import { getByTitle } from '@testing-library/react'
import React, { Component } from 'react'

export class NewsItem extends Component {
    
  render() {
     let  {title,description,imageUrl,newsUrl} = this.props;
    return (
      <div className='my-3'>
          <div className="card" style={{width: "18rem"}}>
            <img src={!imageUrl?"https://media.istockphoto.com/vectors/sports-set-of-athletes-of-various-sports-disciplines-isolated-vector-vector-id1141191007?k=20&m=1141191007&s=612x612&w=0&h=CXC28y_ZRV1KvjISumj5w20bYn649HVi4yYTPWsKaZI=":imageUrl} className="card-img-top" alt="NA"/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a rel="noreferrer" href={newsUrl} target="_blank"className="btn btn-sm btn-primary">Read More...</a>
            </div>
            </div>
      </div>
    )
  }
}

export default NewsItem
