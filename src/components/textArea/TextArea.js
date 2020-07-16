import React from 'react'
import {makeStyles} from '@material-ui/styles'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles({
    main: {
        width: '100%',
        ' & textarea' : {
            minWidth: 300,
            maxWidth: '100%',
            border: '1px solid lightgray',
            padding: 12,
            marginBottom: 48,
            borderRadius: 5,
    }
    },
    
})

export default function TextArea ({title, type, placeholder, name, id}) {
    const testId = 'text-input-test-id'
    TextArea.testId = testId
    const classes = useStyles()
    return (
    <div className={classes.main} data-testid={testId}>
        <Typography variant="subtitle1" gutterBottom>{title}</Typography>
        <textarea
        id={id}
        type={type}
        title={title}
        placeholder={placeholder}
        name={name}
        />
    </div>
    )
}