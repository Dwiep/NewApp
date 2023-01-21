import React, { Component } from 'react'
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export class NewsIteam extends Component {
  render() {

    let {title,discription,urlImage,newsUrl,author,date,source} = this.props;

    return (
      <div className='my-2'>
       <Card style={{margin:'0px 20px',height: '27rem'}}>
       <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        position: 'absolute',
                        right: '0'
                    }
                    }> 
                        <Badge bg="danger"> {source} </Badge>
                    </div>
       
        <Card.Img variant="top" style={{height: '10rem'}} src={!urlImage?"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn--wm8bBojawXcqX607UNOSqMLup_B5AyIwWPHfXvzZcP91daEBo4rxp88R9eUJtrJ7o&usqp=CAU":urlImage} />
        <Card.Body>
            <Card.Title style={{fontSize: "16px"}}><strong>{title}...</strong> 
          </Card.Title>
            <Card.Text style={{fontSize: "14px"}}>
            {discription}...
            </Card.Text>
            <div><small>By <strong>{!author?"Anonymous": author}</strong></small></div>   
            <div className="text-muted" style={{fontSize: "12px"}}>On <strong>{new Date(date).toGMTString()}</strong></div>  
        </Card.Body>
        <Card.Footer className="text-muted"><Button  size="sm" variant="outline-secondary" href={newsUrl} target="_blank">Read More</Button></Card.Footer>
        </Card>
      </div>
    )
  }
}

export default NewsIteam
