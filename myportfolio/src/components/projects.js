import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component{
	constructor(props){
		super(props);
		this.state = {
			activeTab:0
		};

	}

	tabHandler = (tabId)=>{
		this.setState({
			activeTab:tabId
		})
	}
	toggleCategories =()=>{ 	
		if(this.state.activeTab === 0){
			return(
				<div className="projects-grid">
				{/* Project 1 */}
				<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
					<CardTitle style={{color:'black', height:'176px', 
					background:'url(http://www.sukritinfotech.com/wp-content/uploads/2017/04/python-icon_512x512-002-270x270.png) center / cover'}}>
					Python Project 1
					</CardTitle>
					<CardText>
						<div className="cardtext-content">
						Description of Python Project here
						</div>
					</CardText>
					<CardActions border>
						<Button colored> Github</Button>
					</CardActions>
					<CardMenu style={{color:"#fff"}}>
						<IconButton name="share"/>
					</CardMenu>
				</Card>

				{/* Project 2 */}
				<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
					<CardTitle style={{color:'black', height:'176px', 
					background:'url(http://www.sukritinfotech.com/wp-content/uploads/2017/04/python-icon_512x512-002-270x270.png) center / cover'}}>
					Python Project 2
					</CardTitle>
					<CardText>
						<div className="cardtext-content">
						Description of Python Project here
						</div>
					</CardText>
					<CardActions border>
						<Button colored> Github</Button>
					</CardActions>
					<CardMenu style={{color:"#fff"}}>
						<IconButton name="share"/>
					</CardMenu>
				</Card>

				{/* Project 3 */}
				<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
					<CardTitle style={{color:'black', height:'176px', 
					background:'url(http://www.sukritinfotech.com/wp-content/uploads/2017/04/python-icon_512x512-002-270x270.png) center / cover'}}>
					Python Project 3
					</CardTitle>
					<CardText>
						<div className="cardtext-content">
						Description of Python Project here
						</div>
					</CardText>
					<CardActions border>
						<Button colored> Github</Button>
					</CardActions>
					<CardMenu style={{color:"#fff"}}>
						<IconButton name="share"/>
					</CardMenu>
				</Card>

				</div>
				)
		}
		else if(this.state.activeTab === 1){
			return(
				<div><h1> This is Java </h1></div> 
				)
		}

		else if(this.state.activeTab === 2){
			return(
				<div><h1> This is React </h1></div>
				)
		}
		else if(this.state.activeTab === 3){
			return(
				<div><h1> This is Embedded Systems </h1></div>
				)
		}
	}
	render(){
		return(
			<div className="category-tabs"> 
			<Tabs activeTab={this.state.activeTab} onChange={this.tabHandler} ripple>
				<Tab> Python </Tab>
				<Tab> Java </Tab>
				<Tab> React </Tab>
				<Tab> Embedded Systems </Tab>
			</Tabs>	
				<Grid>
					<Cell col={12}>
						<div className="content">
							{this.toggleCategories()}
						</div>
					</Cell>
				</Grid>

			</div>	
			);

	}
}
export default Projects;