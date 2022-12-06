import { Card, Grid } from "@mui/material";
import NoDataIcon from '../../assets/nodata.svg';

export default function NoDataSreen(){

    return(
        <Grid container>
            <Grid item>
                <img src={NoDataIcon}/>
            </Grid>
        </Grid>
    );

}