import { Card, CardContent, Grid, makeStyles, Typography } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
    component: {
        marginBottom: 20,
        boxShadow: '0 2px 5px 0 rgb(0 0 0 /16%), 0 2px 5px 0 rgb(0 0 0 /12%)'
    },
    container: {
        padding: 20,
        paddingBottom: '20px!important'
    },
    rightContainer: {
        margin: '5px 0 0 -25px',
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.down('sm')]: {
            margin: '5px 0'
            // matlab sm sey neechey neechey like xs screen key liyeh
        }
    },
    image: {
        height: 268,
        width: '88%',
        borderRadius: 5,
        objectFit: 'cover'
    },
    title: {
        color: '#44444d',
        fontSize: 22,
        fontWeight: 300,
        lineHeight: '27px'
    },
    author: {
        fontSize: 12,
        color: '#808290',
        lineHeight: '22px',

    },
    description: {
        lineHeight: '22px',
        color: '#44444d',
        marginTop: 5
    },
    publisher: {
        fontSize: 12,
        marginTop: 'auto',
        marginBottom: 10,
        '& > *': {
            // selecting all child element here acnhor tag
            textDecoration: 'none',
            color: '#000',
            fontWeight: 900
        }
    }

}))
const Article = ({ article }) => {
    const classes = useStyles();
    return (
        <Card className={classes.component}>
            <CardContent className={classes.container}>
                <Grid container>
                    <Grid item lg={5} md={5} sm={5} xs={12}>
                        <img src={article.url} alt="img" className={classes.image} />
                    </Grid>
                    <Grid item lg={7} md={7} sm={7} xs={12} className={classes.rightContainer}>
                        <Typography className={classes.title}>{article.title}</Typography>
                        <Typography className={classes.author}>
                            <b>short</b> by {article.author}/ {new Date(article.timestamp).toDateString()}
                        </Typography>
                        <Typography className={classes.description}>{article.description}</Typography>
                        <Typography className={classes.publisher}>
                            read more at <a href={article.link} target='_blank'>{article.publisher}</a>
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card >
    )
}

export default Article;