import React from "react"
import Button from '@material-ui/core/Button';
import GetAppIcon from '@material-ui/icons/GetApp';
import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
//     root: {
//       display: 'flex',
//       maxHeight: 40,
//       color: '#2B2B2B',
//       backgroundColor: 'white',
//     },
//     button: {
//         marginLeft: 50,
//       },
//   }));

const About = () => {
    // const classes = useStyles();
    return (
        <div class="about">
            <div class="description">
                <h3 class="mini-header">Who I am</h3>
                <p>
                Suspendisse dapibus dapibus urna vitae congue. Phasellus rhoncus velit vitae tincidunt vestibulum. In porttitor justo at leo tincidunt, sit amet commodo magna ornare. 
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla facilisi.  Curabitur vel arcu id mauris convallis facilisis vitae sit amet neque. 
                Cras mollis finibus mauris, a pharetra lectus ultrices id. Vivamus vel placerat nisl. 
                </p>
            </div>
            <div class="description">
                <h3 class="mini-header">How to get in touch</h3>
                <div style={{display: "inline-block"}}>
                    <p>
                        Kaarthik A. Alagappan <br/>
                        Sanford, Florida <br/>
                        <a href="tel:+13866281649">386-628-1649</a> <br/>
                        <a href="mailto:kaarthik.alagappan@gmail.com">kaarthik.alagappan@gmail.com</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;