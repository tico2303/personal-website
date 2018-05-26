import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component{
	render(){
		const leftLineStyle={
			borderTop: '3px solid #1D2671', 
			width:'50%'
		}
		const resumeLineStyle={
			borderTop: '3px solid #E6DADA'
		}
		return(
			<div className="resume-container">
			<Grid>
				<Cell col={4}>
					<div style={{textAlign: 'center'}}>
						<img
							src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
							alt="avatar"
							style={{height: '200px'}}
							/>
					</div>
					<h2 style={{paddingTop: '2em'}}> Robert Martinez </h2>	
					<h4 style={{color: 'grey'}}> Software Engineer </h4>
					<hr style={leftLineStyle}/>
					<p>
						It is a long established fact that a reader will be distracted by the readable 
						content of a page when looking at its layout. The point of using Lorem Ipsum is 
						that it has a more-or-less normal distribution of letters, as opposed to using 
						'Content here, content here', making it look like readable English.
					</p>
					<hr style={leftLineStyle}/>
					<h5> Address </h5>
					<p> 950 w. Linden st. Riverside, CA 92507 </p>
					<h5> Phone </h5>
					<p> (909) 273-8585 </p>
					<h5> Web</h5>
					<p> www.ticosite.com</p>
					<hr style={leftLineStyle}/>

				</Cell>
				<Cell className="resume-right-col" col={8}>

					<h2> Education </h2>	
					<Education
						startYear="2015"
						endYear="2018"
						schoolName="University of Riverside California"
						degree="B.S. Computer Engineering"
						schoolDescription=""
						gpa="3.28"

						/>
					<Education
						startYear="2012"
						endYear="2015"
						schoolName="Victor Valley Community College"
						degree="A.S. Math/Science"
						schoolDescription=""
						gpa="3.7"
						/>

					<hr style={resumeLineStyle} />

					<h2> Experience </h2>
					<Experience
					startYear="never"
					endYear="ever"
					jobName="cool job"
					jobDescription="a really cool job that i want"
						/>

					<hr style={resumeLineStyle} />

					<h2> Skills </h2>
					<Skills 
						skill="Python      "
						progress={85}
						/>
					<Skills 
						skill="Java        "
						progress={78}
						/>
					<Skills 
						skill="Vim          "
						progress={96}
						/>
					<Skills 
						skill="Data Science"
						progress={79}
						/>
				</Cell>
			</Grid>
			</div>	
			);

	}
}
export default Resume;