import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles ({
    main: {
        width: '100vw',
        height: '93vh',
        backgroundColor: '#111111',
        overflow: 'hidden',
    }
})

const Hero = () => {
    const classes= useStyles();
    return (
        <main className={classes.main}>
            <h1>Carousel</h1>
        </main>
    )
}

export default Hero
