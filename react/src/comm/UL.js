import React,{Component}from 'react';
import LI from './LI'
class UL extends Component{
	constructor(){
		super();
		this.state = {
			arr:['今天','我','说的']
		}
	}
	render(){
		let {arr} = this.state;
		let list = null;
		list=arr.map((e,i)=>{
			let data = {
				txt:e,
				num:i,
				key:i
			}
			return <LI {...data}/>//传给li
		});
		return(
			<div>
				<button onClick={this.click}></button>	
					<ul>
						{list}
					</ul>
			</div>
		)
	}
}
export default UL