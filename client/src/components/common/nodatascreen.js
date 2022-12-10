import { Card, Grid } from "@mui/material";
import NoDataIcon from '../../assets/nodata.svg';

export default function NoDataSreen(props){

    return(
        <Grid container>
            <Grid item xs={3}></Grid>
            <Grid item xs={6}>
                <Card sx={{padding:'20px',height:'550px', justifyContent:'center'}}>
                    <div style={{textAlign:'center', verticalAlign:'middle',lineHeight:'20px'}}>
                        <div style={{marginTop:'230px'}}>
                            No {props.type?? 'Data'}<br></br>
                            <img style={{width:'40px'}} alt="nodataIcon" src={NoDataIcon}/>
                        </div>
                        </div>
                </Card>
            </Grid>
            <Grid item xs={3}></Grid>
        </Grid>
    );

}