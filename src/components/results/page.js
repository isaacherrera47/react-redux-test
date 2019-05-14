import React, {Fragment} from 'react';
import AppBar from '../appBar'
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import './style.css';
import {Card, CardActionArea, CardContent, CardMedia} from "@material-ui/core";

function Page(props) {
    const {
        results,
        goTo
    } = props;
    const isEmpty = results.length === 0;
    return (
        <Fragment>
            <CssBaseline/>
            <AppBar/>
            <div className="results-page">
                { isEmpty ?
                    <Typography variant="h5" component="h3" className="page-message">
                        There are no results
                    </Typography>
                    :
                    results.map(item =>
                        <div
                            id={item.id}
                            className="card-container"
                        >
                            <Card
                                className="card"
                                onClick={() => goTo(`/details/${item.id}`)}
                            >
                                <CardActionArea>
                                    <CardMedia
                                        className="card-media"
                                        image={item.image}
                                        title={item.title}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {item.title}
                                        </Typography>
                                        <Typography component="p">
                                            {item.content}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </div>
                    )
                }
            </div>
        </Fragment>
    );
}

export default Page;