import React from 'react';
import {Icon,Grid, GridRow, GridColumn, Header, Button} from 'semantic-ui-react';

export const Footer= ()=>{

    const onClickGithub= ()=>{
        
    }

    return (
        <div style={{paddingTop: '100px'}}>
            <Grid>
                <GridRow stretched color='black'>
                    <GridColumn width='3'></GridColumn>
                    <GridColumn width= '10' textAlign='center'>
                        <Grid>
                            <GridRow>
                                <GridColumn width='16'>
                                    <div style={{color:"grey", fontSize:'17px'}}>Inspired by Code <Icon color='orange' name='code' /> and Made with Coffee <Icon  color='orange' name='coffee'/> by Sahaj Kohli @ 2020</div>
                                </GridColumn>
                            </GridRow>
                            <GridRow>
                                <GridColumn width='8' textAlign='right'>
                                   <Button inverted circular icon='github' href='https://github.com/SahajKohli' />
                                </GridColumn>
                                <GridColumn width='8' textAlign='left'>
                                    <Button inverted circular icon='linkedin' href='https://www.linkedin.com/in/sahaj-kohli-1b975388/'/>
                                </GridColumn>
                            </GridRow>
                        </Grid>
                    </GridColumn>
                    <GridColumn width='3'></GridColumn>
                </GridRow>
            </Grid>
        </div>
    )
}

export default Footer;