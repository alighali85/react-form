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
        position: 'relative',
        flexWrap: 'wrap',
        '& label': {
            marginBottom: 48,
            flexGrow: 1,
            border: '1px solid #f3f3f3',
            margin: 8,
            minHeight: 64,
            borderRadius: 5,
            '& input': {
                display: 'none',
                '&:checked + $card': {
                    opacity: '0.8',
                    boxSizing: 'border-box',
                    transition: 'all 200ms ease-in-out',
                    cursor: 'no-drop',
                    boxShadow: `0px 10px 18px #3f51b5`,
                }
            },
        },
    },
    card: {
        display: 'flex',
        alignItems: 'center', 
        justifyContent: 'center',
        background: 'lightgray',
        opacity: '0.5',
        minHeight: 64,
        minWidth: 120,
        width: '100%',
        borderRadius: 5,
        cursor: 'pointer',
    },
})

export default function RadioGroup ({title, required, type, options, name, id}) {
    const testId = 'radio-group-test-id'
    RadioGroup.testId = testId
    const classes = useStyles()
    return (
        <div className={classes.main} data-testid={testId}>
            <Typography variant="subtitle1" gutterBottom>{title}</Typography>
            <div className={classes.cardsWrapper}>
                {options.map(item => <label key={item}>
                    <input id={id} type={type} name={name} value={item} required={required}/>
                    <div className={classes.card}>{item}</div>
                </label>
                )}
        </div>
    </div>
    )
}