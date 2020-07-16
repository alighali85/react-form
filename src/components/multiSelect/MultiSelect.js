import React from 'react'
import {makeStyles} from '@material-ui/styles'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles({
    main: {
        width: '100%',
        position: 'relative',
    },
    cardsWrapper: {
        display: 'flex',
        flexWrap: 'wrap',
        position: 'relative',
        paddingBottom: 48,
        '& label': {
            position: 'relative',
            marginBottom: 24,
            border: '1px solid #f3f3f3',
            flex: '1 0 25%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: 12,
            minHeight: 126,
            borderRadius: 5,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            boxShadow: `5px 10px 18px lightgray`,
            cursor: 'pointer',
            '& input': {
                display: 'none',
                '&:checked + $card': {
                    // border: '1px solid lightgreen',
                    backgroundColor: '#3f51b5',
                    color: 'white',
                    opacity: '0.9',
                    boxSizing: 'border-box',
                    transition: 'all 300ms ease-in-out',
                    boxShadow: `5px 10px 18px #3f51b5`
                }
            },
        },
    },
    card: {
        display: 'flex',
        alignItems: 'center', 
        justifyContent: 'center',
        background: 'lightgray',
        opacity: '0.8',
        height: 24,
        width: '100%',
        borderRadius: 5,
        cursor: 'pointer',
        position: 'absolute',
        bottom: -28,

    },
})

export default function MultiSelect ({title, required, type, items, name, id}) {
    const testId = 'multi-select-test-id'
    MultiSelect.testId = testId
    const classes = useStyles()
    return (
        <div className={classes.main} data-testid={testId}>
            <Typography variant="subtitle1" gutterBottom>{title}</Typography>
            <div className={classes.cardsWrapper}>
                {items.map(item => <label key={item.name} style={{backgroundImage: `url(${item.image})`}}>
                    <input id={id} type={type} name={name} value={item.name} required={!required}/>
                    <div className={classes.card}>{item.name}</div>
                </label>
                )}
        </div>
    </div>
    )
}