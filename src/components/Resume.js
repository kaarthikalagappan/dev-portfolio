import React, { Component } from "react";
import { ucfLogo, sscLogo, CLogo, JavaLogo, PythonLogo } from "./MediaLogos"
import { Grid, LinearProgress } from "@material-ui/core";
import MaterialUIProgressBar from "./materialUI"

const Resume = () => {
    return (
        <div class="resume-background">
            <div class="resume">
                <div class="flex-container">
                    <h3 class="resume-header">Education</h3>
                    <div class="cols">
                        <div class="right-side">
                            <div class="resume-mini-header">
                                <p>University of Central Florida</p>
                                <img src={ucfLogo} class="circle"/>
                            </div>
                            <div class="resume-description">
                                <p class="left-info">Bachelor of Computer Science</p>
                                <p class="right-info"><i>Aug 2017 - Dec 2020</i></p>
                            </div>
                        </div>
                        <div class="right-side">
                            <div class="resume-mini-header">
                                <p>Seminole State of Florida</p>
                                <img src={sscLogo} />
                            </div>
                            <div class="resume-description">
                                <p class="left-info">Associate of Arts (via dual-enrollment)</p>
                                <p class="right-info"><i>Aug 2015 - May 2017</i></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="resume panels">
                <div class="flex-container">
                    <h3 class="resume-header">Work Experience</h3>
                    <div class="cols">
                        <div class="right-side">
                            <div class="resume-mini-header">
                                <p>University of Central Florida</p>
                                <img src={ucfLogo} />
                            </div>
                            <div class="resume-description">
                                <p class="left-info">Undergraduate Research Assistant</p>
                                <p class="right-info"><i>May 2019 - Present</i></p>
                            </div>
                            <p class="resume-description explanation"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porta, odio sit amet posuere sodales, dui metus aliquam ligula, nec tempor massa est in turpis. Quisque ex velit, iaculis vel diam ac, pretium bibendum velit. Duis tempor tincidunt ante a imperdiet. Aenean imperdiet metus condimentum, iaculis lacus ac, mollis massa. Aliquam id libero enim.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="resume panels">
                <div class="flex-container">
                    <h3 class="resume-header">Languages I Speak</h3>
                    <div class="cols">
                        <div class="right-side">
                            <ProgressBar proficiency={95}>
                                <CLogo />
                            </ProgressBar>
                            <ProgressBar proficiency={80}>
                                <JavaLogo />
                            </ProgressBar>
                            <ProgressBar proficiency={70}>
                                <PythonLogo />
                            </ProgressBar>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div class="resume panels">
                <div class="flex-container">
                    <h3 class="resume-header">Latest Project</h3>
                    <div class="cols">
                        <div class="right-side">
                            <div class="resume-mini-header">
                                <p>Personal Website</p>
                            </div>
                            <p class="explanation"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porta, odio sit amet posuere sodales, dui metus aliquam ligula, nec tempor massa est in turpis. Quisque ex velit, iaculis vel diam ac, pretium bibendum velit. Duis tempor tincidunt ante a imperdiet. Aenean imperdiet metus condimentum, iaculis lacus ac, mollis massa. Aliquam id libero enim. Aliquam ullamcorper tortor quis quam tempus pretium. Donec nec posuere lacus, vitae convallis felis. Proin fermentum ullamcorper sem eget elementum. Cras iaculis ornare metus. Nullam semper lorem vel mi porta condimentum. Cras placerat nulla ligula, at scelerisque ante facilisis eu.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Resume;

class ProgressBar extends Component {
    render() {
      return (
        <Grid spacing={0} container style={{alignItems: 'center'}}>
            <Grid xs item style={{maxWidth: '50px'}}>
                {this.props.children}
            </Grid>
            <Grid xs item>
                <MaterialUIProgressBar variant="determinate" value={this.props.proficiency}/>
            </Grid>
        </Grid>
      );
    };
  }