import React, { Component } from 'react';
import {connect} from 'react-redux'
import { bindActionCreators } from "redux";
import { addList } from './actions'

class SearchBar extends Component {
  constructor(props){
    super(props)
    this.state ={
      showItems:false,
      valueEntered:'',
    }
    this.listItems=[];
    this.addClickHandler= this.addClickHandler.bind(this)
  }
  showList(){
    this.setState({showItems:!this.state.showItems})
  }
  addClickHandler(){
    this.props.addList(this.state.valueEntered)
  }
  
  textBoxHandler(textValue){
    this.setState({valueEntered:textValue})
  }
  render() {
    console.log(this.props.itemList)
     this.listItems=[]
    this.props.itemList.map((value,index)=>{
     return this.listItems.push(value)
    })
    
    return (
      <div >
       <button onClick= {this.showList.bind(this)}> Dropdown </button>
      {this.state.showItems? <div> 
        <span onClick={this.addClickHandler}>Add:</span>
      <input type="text" onChange={(e)=>this.textBoxHandler(e.target.value)} placeholder="Search.."/>
       <div>
          {this.listItems}
         </div>
        </div>
        :""}
     
      </div>
    );
  }
}
const mapStateToProps=(state)=>{
  return{
    itemList:state.itemList
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
    addList: bindActionCreators(addList,dispatch)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchBar);
