import { Card,Grid, Stack } from "@mui/material";




export default function CommonCard(props){

    return(
        <Card sx={{marginTop:'20px'}}>
        <Grid container sx={{margin:'20px 0 20px 0'}}>
            <Grid item xs={2}></Grid>
            <Grid item xs={8}>
                <Stack>
                    <div style={{textAlign:'center'}}>
                        <h3>{props.header}</h3>
                    </div>
                    <div>
                        {props.children}
                    </div>
                </Stack>
            </Grid>
            <Grid item xs={2}></Grid>
        </Grid>
        </Card>
    );
}