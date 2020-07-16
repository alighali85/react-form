// /* eslint-disable react-hooks/exhaustive-deps */
import React, {useRef, useEffect, useState} from 'react'
import {makeStyles} from '@material-ui/styles'
import {Grid, Typography} from '@material-ui/core'
import gameBugReportForm from '../../config/formsData'


const useStyles = makeStyles({
    form: {
        maxWidth: '100%',
        padding: 24,
        marginTop: 24,
        border: '1px solid lightgray',
        borderRadius: 5
    },
    inputItem: {
        position: 'relative',
    },
    errorMessage: {
        fontSize: 12,
        color: 'red',
        position: 'absolute',
        bottom: 20
    },
})


export default function SupportForm({source = gameBugReportForm}) {
    const classes = useStyles()
    const form = useRef()
    const [inputErrs, setError] = useState([1, 2, 3, 4])

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target);
        form.current.reset()
        setError([1, 2, 3, 4])
    return false
    }

    useEffect(() => {
    const validateInput = (e) => {
        const {target} = e
        const errors = inputErrs.filter(item => item !== Number(target.id))
        switch(target.type) {
            case 'text':
            case 'textarea':
                const minLength = source[target.id -1].minLength
                const maxLength = source[target.id -1].maxLength
                if(
                    (minLength && target.value.length < minLength)
                    || 
                    (maxLength && target.value.length > maxLength)
                    ) {
                        setError([...errors, Number(target.id)])
                    }
                    else {
                        setError(errors)
                    }
                break;
            case 'radio':
                setError(errors)
                break;
            case 'checkbox':
                if (target.closest('div').querySelectorAll('input:checked').length > 0) {
                    setError(errors)
                } else {
                    setError([...errors, Number(target.id)])
                }
                break;
            default: 
             return null
        }
    }

        const formInputs = form.current.elements
        for(let i = 0 ; i < formInputs.length; i++) {
            formInputs[i].oninput = validateInput
        }
    },[inputErrs, source])  
    
    return (
        <>
            <Grid xs={false} sm={false} item/>
            <Grid xs={12}  sm={12} item>
                <form className={classes.form} ref={form} onSubmit={handleSubmit}>
                    <Typography variant="h5">Describe the bug:</Typography><br/>
                    {source.map(ele => <div className={classes.inputItem}>
                        <ele.component {...ele} />
                        {inputErrs.includes(ele.id) && <div className={classes.errorMessage}>{ele.errorText}</div>}
                    </div>)}
                    <button type="submit" disabled={inputErrs.length === 0 ? false : true}>Submit</button>
                </form>
            </Grid>
        </>
    )
}