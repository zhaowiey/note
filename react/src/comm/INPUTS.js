import React,{Component}from 'react';//不写{Component}就在extends后加React
import LI from './LI';
class Inputs extends Component{//首字母大写
	constructor(){
		super();
		this.state = {
			val:'',
			arr:['这是我的第一条数据']
		}
	}
	//input	
	keyup = (ev) => {
		if(ev.keyCode == 13){
			let {arr} = this.state;//结构this.state里的arr
			let arr2 = Object.assign(arr);
			arr2.push(ev.target.value);
			this.setState({
				arr:arr2,
				val:''
			})
		}
	}
	change = (ev) => {
		this.setState({
			val:ev.target.value
		})
	}
	render(){
		let {arr} = this.state;
		let list=arr.map((e,i)=>{
			let data = {
				txt:e,
				num:i,
				key:i
			}
			return <LI {...data}/>//传给li
		});
		return(
			<div>
				<input type="text" value={this.state.val} onKeyUp = {this.keyup} onChange = {this.change}/>
				<ul>
					{
						list
					}
				</ul>
			</div>
		)
	}
	

}
export default Inputs