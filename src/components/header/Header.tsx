import React from 'react'
import {Segment, Menu, Container, Button, Grid, GridColumn, GridRow, Icon} from 'semantic-ui-react'
 import {Link} from '@reach/router';
const iconImage =  require("../../images/icon.png");
require( '../../semantic/dist/semantic.min.css');

const HeaderOfSite = () => {

    return (
        <div>
            <Grid inverted>
                <GridRow  stretched>

                </GridRow>
                <Grid.Row stretched>
                    <GridColumn width='3' verticalAlign='middle' textAlign='center'>
                        <Link to='/'>
                            <div style={{display:'inline-block'}}>
                                <img src={iconImage} style={{
                                    borderRadius: '100%',
                                    width:'40px',
                                    height:'40px',
                                    backgroundColor: "orange",
                                    float: 'left',
                                }}></img>
                                <div
                                style={{
                                    float: 'right',
                                    verticalAlign:'middle',
                                    textAlign:'right',
                                    paddingLeft: '10px',
                                    paddingTop:'10px',
                                    color: 'grey',
                                    fontWeight:'bold',
                                    fontFamily: 'unset',
                                }}
                                >Sahaj Kohli</div>
                            </div>
                        </Link>

                    </GridColumn>

                    <GridColumn width='8'></GridColumn>

                    <GridColumn width='2'>
                        <Button inverted circular icon='github' href='https://github.com/SahajKohli' />
                    </GridColumn>

                    <GridColumn width='3'>
                        <Button.Group >
                            <Link className='headerNav'to='/resume'><Button inverted>About</Button></Link>
                            <Link className='headerNav' to='/dailies'><Button inverted >Daily</Button></Link>
                            <Link className='headerNav' to='/connect'><Button inverted >Contact</Button></Link>
                        </Button.Group>
                    </GridColumn>

                </Grid.Row>
                <Grid.Row>

                </Grid.Row>
                <Grid.Row>
                    
                    </Grid.Row>
                    <Grid.Row>
                    
                    </Grid.Row>
            </Grid>
        </div>    
    );
}

export default HeaderOfSite