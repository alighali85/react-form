// /* eslint-disable react-hooks/exhaustive-deps */
import React, {useRef, useEffect, useState} from 'react'
import {makeStyles} from '@material-ui/styles'
import {Grid, Typography} from '@material-ui/core'
import mockRequest from '../../api/mockRequest.js'


const useStyles = makeStyles({
    form: {
        maxWidth: '100%',
        padding: 8,
        marginTop: 24,
        marginBottom: 128,
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
    submitButton: {
        backgroundColor: '#3f51b5',
        padding: '12px 24px',
        margin: 24,
        float: 'right',
        border: 'none',
        boxShadow: '0px 3px 8px #3f51b5',
        borderRadius: 20,
        outline: 'none',
        color: 'white',
        cursor: 'pointer',
        '&:disabled':{
            color: 'gray',
            backgroundColor: 'lightgray',
            boxShadow: 'none',
        }

    }
})


export default function FormGenerator({source, onSuccess, onErr, title, id, onSubmit, endPoint}) {
    const classes = useStyles()
    const form = useRef()
    const requiredFields = source.filter(item => item.required).map(item => item.id)
    const [inputErrs, setError] = useState(requiredFields)

    const handleSubmit = (e) => {
        onSubmit()
        e.preventDefault()
        const formData = new FormData(e.target);
        mockRequest({url:endPoint, data: formData}).then(data => {

        }).catch(err => {
            onErr(err)
        })
        form.current.reset()
        setError([])
        setTimeout(onSuccess, 1500, id)
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
                            console.log('there is NO an error')
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

    /**
     * listen to the form input changes
     */
        const formInputs = form.current.elements
        for(let i = 0 ; i < formInputs.length; i++) {
            formInputs[i].oninput = validateInput
        }

    },[inputErrs, source])  
    
    return (
        <>
        <Grid container> 
            <Grid xs={false} sm={false} md={2} item/>
            <Grid xs={12}  sm={12} md={8} item>
                <form className={classes.form} ref={form} onSubmit={handleSubmit}>
                    <Typography variant="h5">{title}</Typography><br/>
                    {source.map(ele => <div className={classes.inputItem} key={ele.id}>
                        <ele.component {...ele} />
                        {inputErrs.includes(ele.id) && <div
                        className={classes.errorMessage}>{ele.errorText}
                        </div>}
                    </div>)}
                    <button
                        type="submit"
                        className={classes.submitButton}
                        disabled={inputErrs.length === 0 ? false : true}>
                        Submit
                    </button>
                </form>
            </Grid>
        </Grid>
        </>
    )
}