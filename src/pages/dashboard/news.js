import React, { Component } from 'react';
import { HttpApiService } from '../../api/http-api';


export default class News extends Component {
    
    httpApiServObj = new HttpApiService();
    constructor() {
        super();
        this.state = {
            newsData : []
        }
    }

    componentDidMount() {
       this.httpApiServObj.getNewsData().then( (data) => {
            if(data.status === 'ok') {
                this.setState({
                    newsData: data.articles
                })
            }
        })   
    }

    navigateOnNewsDetails = (newsId) => {
        this.props.history.push(`/news/${newsId}`)
    }

    render() {
        return ( this.state.newsData && this.state.newsData.map( (obj) => {
            return (<React.Fragment>
                <center><h1>Top Headlines</h1></center>
                <div className='news-block' onClick={ () => this.navigateOnNewsDetails(obj.source.id)}>
                    <div className='news-block-1'>
                        <div>
                            { new Date(obj.publishedAt).toDateString()} 
                        </div>                        
                    </div>
                    <div className='news-block-2'>  
                        <h2>{obj.source.name}</h2>
                        <h3>{obj.title}</h3>
                        <p>{obj.description}</p>
                    </div>
                </div>
                </React.Fragment>
            )
        })
        )
    }
}