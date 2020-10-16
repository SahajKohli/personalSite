import React from 'react'
import {Segment, Menu, Container, Grid, GridColumn, GridRow, Icon} from 'semantic-ui-react'
import {Link} from '@reach/router';
import HeaderButton from '../header/HeaderButton';
const iconImage =  require("../../images/icon.png");
require( '../../semantic/dist/semantic.min.css');

const HeaderOfSite = () => {

    return (
            <Grid stackable verticalAlign='middle' color='black'>
                <GridRow>
                </GridRow>
                <GridRow textAlign='center'>
                    <GridColumn width ='3'>
                        <Link to='/' style={{color:"grey", fontSize:'medium', verticalAlign:'top', textAlign:'center'}}><img  className='headerIcon'src={iconImage}/> <div className='headerIconText'>Sahaj Kohli</div></Link>
                    </GridColumn>
                    <GridColumn width ='7'></GridColumn>
                    <GridColumn width ='2'>
                        <HeaderButton link='/resume' text='About'/>
                    </GridColumn>
                    <GridColumn width ='2'>
                        <HeaderButton link='/connect' text='Contact'/>
                    </GridColumn>
                    <GridColumn width ='2'>
                        <HeaderButton link='/dailies' text='Daily'/>
                    </GridColumn>
                </GridRow>
            </Grid>
    );
}

export default HeaderOfSite