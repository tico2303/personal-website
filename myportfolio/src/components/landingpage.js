import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';

class LandingPage extends Component{
	render(){
		return(
			<div style={{width: '100%', margin: 'auto'}}>
				<Grid className="landing-grid">
					<Cell col={12}>
					<img
						src="./supportPic.png"
						alt="avatar"
						className="avatar-img"
					/>
					<div className="banner-text">
						<h1> SoftwareEngineer</h1>	
						<hr/>
						<p>
							Data Science | AI | SoftwareEngineering | Python | Java | C++
						</p>
					<div className="social-links">
						{/* GitHub */}
						<a href="https://github.com/tico2303" rel="noopener noreferrer" target="_blank">
							<i className="fa fa-github-square"  aria-hidden="true"/>
						</a>

						{/* LinkedIn */}
						<a href="https://www.linkedin.com/in/robert-martinez-82003/" rel="noopener noreferrer" target="_blank">
							<i className="fa fa-linkedin-square"  aria-hidden="true"/>
						</a>

						{/* Youtube */}
						<a href="http://google.com" rel="noopener noreferrer" target="_blank">
							<i className="fa fa-youtube-square"  aria-hidden="true"/>
						</a>
					</div>
					</div>	
					</Cell>
				</Grid>
			</div>

			);
	}
}
export default LandingPage;