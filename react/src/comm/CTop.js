import React,{Component}from 'react';

class CTop extends Component{
	constructor(){
		super();
		this.state = {
			arr:[
			{id:1,txt:'第一个',checked:false},
			{id:2,txt:'第一个',checked:false},
			{id:3,txt:'第一个',checked:false},
			{id:4,txt:'第一个',checked:false}
			]
		}
	}
	changeChild = (id) => {
		console.log(id)
		let {arr} = this.state;
		let arr2 = Object.assign(arr);
		console.log(arr2)
		arr2.forEach((e,i)=>{
			if(e.id == id){
				e.checked = !e.checked;
			}
		})
		this.setState({
			arr:arr2
		})
	}
	render(){
		let {arr} = this.state;
		let list = null;
		list=arr.map((e,i)=>{
			let data = {
				txt:e.txt,
				num:i,
				key:i,
				id:e.id,
				checked:e.checked,
				changeChild:this.changeChild
			}
			return <LI {...data}/>//传给li
		});
		
		return(
			<div>
				<ul>
					{list}
				</ul>
			</div>
		)
	}
}
class LI extends Component{
	change = () => {
			this.props.changeChild(this.props.id);
		}
	render(){
		return(
			<li>
				<input 
				type="checkbox" 
				checked={this.props.checked}
				onChange={this.change}
				/>
				<p>{this.props.txt}</p>
			</li>
		)
	}
}
export default CTop;