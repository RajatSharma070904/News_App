import React, { Component } from 'react'

export class Newsitem extends Component {
  
  render() {
     let  {title , description , imageUrl , newsUrl} = this.props;
    return (
      <div className='my-3'>
       <div  className="card" >
             <img src={!imageUrl?"https://i.ytimg.com/vi/SWyUbEPDL78/maxresdefault.jpg" :imageUrl}  className="card-img-top" alt="..."/>
          <div  className="card-body">
            <h5  className="card-title">{title}...</h5>
            <p  className="card-text"> {description}...</p>
            <a href={newsUrl}  target='blank' className="btn btn-sm  btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Newsitem
