import React, { useState, useEffect } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import Swal from 'sweetalert2'
import makeStyles from '@material-ui/styles/makeStyles'
import Box from '@material-ui/core/Box'

const FORM_URL = 'https://formspree.io/xoqjaazw'

const useStyles = makeStyles({
  root: {
    paddingBottom: 50,
    paddingTop: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  form: {
    maxWidth: 600,
    width: '100%',
    padding: 10,
    textAlign: 'left'
  },
  text: {
    fontSize: 30,
    marginBottom: 20
  }
})

const Contact: React.FC = () => {
  const styles = useStyles()

  const [message, setMessage] = useState('')
  const [messageTouched, setMessageTouched] = useState(false)

  const [contact, setContact] = useState('')
  const [contactTouched, setContactTouched] = useState(false)

  const [loading, setLoading] = useState(false)
  const [validation, setValidation] = useState(false)

  const contactError = (): boolean => {
    return contact === '' && contactTouched
  }

  const messageError = (): boolean => {
    return message === '' && messageTouched
  }

  useEffect(() => {
    const fieldsTouched = messageTouched && contactTouched
    const noErrors = message !== '' && contact !== ''
    const current = noErrors && fieldsTouched
    if (current !== validation) setValidation(current)
  }, [message, contact])

  const updateForm = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target

    if (name === 'message') {
      if (!messageTouched) setMessageTouched(true)
      setMessage(value)
    }
    if (name === 'contact') {
      if (!contactTouched) setContactTouched(true)
      setContact(value)
    }
  }

  const submitHandler = async (): Promise<void> => {
    setLoading(true)
    const config: RequestInit = {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: JSON.stringify({ message, contact })
    }
    const res = await fetch(FORM_URL, config)
    setLoading(false)
    if (res.status === 200) {
      setMessage('')
      setContact('')
      setMessageTouched(false)
      setContactTouched(false)
      Swal.fire({
        title: 'Thanks',
        icon: 'success',
        timer: 1000,
        showConfirmButton: false
      })
    } else {
      Swal.fire({
        title: `Sorry, I got ${res.status}`,
        icon: 'error'
      })
    }
  }

  const keyHandler = (event: React.KeyboardEvent<HTMLDivElement>): void => {
    if (event.key === 'Enter' && validation) {
      submitHandler()
    }
  }

  let buttonContent: JSX.Element = <span>Send</span>
  if (loading) {
    buttonContent = <CircularProgress size={26} />
  }

  return (
    <Box id="contact" className={styles.root}>
      <Box className={styles.form}>
        <Box className={styles.text}>
          Get in touch
        </Box>
        <TextField
          label="Your message?"
          variant="outlined"
          name="message"
          value={message}
          onChange={updateForm}
          fullWidth
          multiline
          error={messageError()}
        />
        <br /><br />
        <TextField
          label="How to contact You?"
          variant="outlined"
          name="contact"
          value={contact}
          onChange={updateForm}
          fullWidth
          error={contactError()}
          onKeyDown={keyHandler}
        />
        <br /><br />
        <Button
          disabled={!validation}
          size="large"
          color={loading ? 'default' : 'primary'}
          variant="contained"
          onClick={submitHandler}
          style={{ width: '80px', color: 'white' }}
        >
          {buttonContent}
        </Button>
      </Box>
    </Box>
  )
}

export default Contact
