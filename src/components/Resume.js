import React, { Component } from "react";
import { UCFLogo, SSCLogo, LinuxLogo, CLogo, JavaLogo, PythonLogo, GitLogo, PHPLogo, BashLogo, JavaScriptLogo, HTMLLogo, CSSLogo, CPPLogo, MySQLLogo } from "./MediaLogos"
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
                                <img src={UCFLogo} class="circle"/>
                            </div>
                            <div class="resume-description">
                                <p class="left-info">Bachelor of Computer Science</p>
                                <p class="right-info"><i>Aug 2017 - Dec 2020</i></p>
                            </div>
                        </div>
                        <div class="right-side">
                            <div class="resume-mini-header">
                                <p>Seminole State of Florida</p>
                                <img src={SSCLogo} />
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
                                <img src={UCFLogo} />
                            </div>
                            <div class="resume-description">
                                <p class="left-info">Undergraduate Research Assistant</p>
                                <p class="right-info"><i>May 2019 - Present</i></p>
                            </div>
                            <p class="resume-description explanation">
                                Modified the LLVM and Clang infrastructures and a source code transformer to support a customized, side-channel free architecture. Accomplished this by adding a new LLVM IR opcode that produces extra assembly code used by the side-channel free architecture, modifying Clang to emit that opcode based on the source code attributes, and customizing a Java-based source code transformer to convert specific statements into a compatible format that doesn’t induce new side-channels
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="resume panels">
                <div class="flex-container">
                    <h3 class="resume-header">Skills I Wield</h3>
                    <div class="cols">
                        <div class="right-side">
                            <ProgressBar proficiency={95}>
                                <CLogo />
                            </ProgressBar>
                            <ProgressBar proficiency={80}>
                                <JavaLogo />
                            </ProgressBar>
                            <ProgressBar proficiency={80}>
                                <PythonLogo />
                            </ProgressBar>
                            <ProgressBar proficiency={75}>
                                <LinuxLogo />
                            </ProgressBar>
                            <ProgressBar proficiency={70}>
                                <GitLogo />
                            </ProgressBar>
                            <ProgressBar proficiency={70}>
                                <MySQLLogo />
                            </ProgressBar>
                            <ProgressBar proficiency={50}>
                                <BashLogo style={{marginLeft: '-15px'}}/>
                            </ProgressBar>
                            <ProgressBar proficiency={50}>
                                <JavaScriptLogo />
                            </ProgressBar>
                            <ProgressBar proficiency={50}>
                                <HTMLLogo />
                            </ProgressBar>
                            <ProgressBar proficiency={50}>
                                <CSSLogo />
                            </ProgressBar>
                            <ProgressBar proficiency={35}>
                                <CPPLogo />
                            </ProgressBar>
                            <ProgressBar proficiency={30}>
                                <PHPLogo />
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
        <Grid spacing={1} container style={{alignItems: 'center', margin: '5px', padding: '5px'}}>
            <Grid xs item style={{maxWidth: 'max-content'}}>
                {this.props.children}
            </Grid>
            <Grid xs item>
                <MaterialUIProgressBar variant="determinate" value={this.props.proficiency}/>
            </Grid>
        </Grid>
      );
    };
  }