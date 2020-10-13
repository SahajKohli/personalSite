import React from 'react'
import {Divider, Grid, GridRow, GridColumn, Header} from 'semantic-ui-react'

interface IndexLedeProps {
    blurb: JSX.Element;
}

const IndexLede = (props: IndexLedeProps) => {

    return (
        <Grid>
            <GridRow>
                <GridColumn width='2'>
                </GridColumn>

                <GridColumn width='12' >
                        <Header color='grey'>
                            <div >
                                {props.blurb}
                            </div>
                        </Header>
                </GridColumn>

                <GridColumn width='2'>
                </GridColumn>

            </GridRow>
        </Grid>

    );
}

export default IndexLede