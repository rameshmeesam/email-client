import React, { Component } from 'react';
import  emailList  from '../../data/inbox';

class Inbox extends Component {
  constructor(props) {
    super(props);
    this.state = {emails : null,
                  emailId : 1,
                  showEmailDes: 0,
                  defaultShow: {mId: '', subject: '', content: '' } 


                 };
    this.state.emails = emailList;            
    console.log("Inside Constructor Method : " +  this.state.emails );
  }


   handleClick(e,data) {
    e.preventDefault();
    console.log("The link was clicked" + data );
    this.setState({
           defaultShow: {mId: data.mId, subject: data.subject, content: data.content}
    })
  }

  
  render() {
    return (
      <div className="Inbox"> 
      <>
      <div className="container-fluid text-center">    
  <div className="row content">
    <div className="col-sm-2 sidenav">
      <p><a href="#">Inbox</a></p>
      <p><a href="#">Draft</a></p>
      <p><a href="#">Deleted Items</a></p>
    </div>
    <div className="col-sm-4 text-left">
    { emailList.map((data, index) => { 
        return <div key={data.mId}>
      <h6><a href="#" onClick={(e) => this.handleClick(e,data)}>{data.subject}</a> </h6>
      <hr />

     </div>
     
    })
}
    
    </div>
    <div className="col-sm-6 sidenav">
      <div className="well">
      <h6>{this.state.defaultShow.subject}</h6>
      <p>{this.state.defaultShow.content}</p>   
      </div>

    </div>
  </div>
</div>

<footer className="container-fluid text-center">
  <p></p>
</footer>
      </>   
      
 

      </div>
    );
  }
}

export default Inbox;