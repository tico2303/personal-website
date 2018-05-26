import React, {Component} from 'react';
import {Grid, Cell, ProgressBar } from 'react-mdl';

class Skills extends Component{
	render(){
		return(
				<Grid>
					<Cell col={12}>
						<div style={{margin:'auto', padding:'10px 0'}}>
						</div>
					<div style={{display: 'flex', }}>
						{this.props.skill}
						<ProgressBar style={{margin: 'auto', width: '75%', paddingLeft:'2px'}}
									progress={this.props.progress}
								/>
					</div>
					</Cell>

				</Grid>
			)

	}

}
export default Skills;