import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/checkbox'
import Chip from '@material-ui/core/Chip'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
}))

export default function TodoItems({ items, remove, toggle }) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <List component='nav' aria-label='Todo items'>
        {items.map(item => (
          <ListItem key={item.id}>
            {item.category && <Chip label={item.category} color='primary' />}

            <FormGroup row>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={item.complete}
                    onChange={() => toggle(item.id)}
                    name={item.name}
                    color='primary'
                  />
                }
                label={item.name}
                style={{
                  textDecoration: item.complete ? 'line-through' : 'none'
                }}
              />
            </FormGroup>
            <button onClick={() => remove(item.id)}>X</button>
          </ListItem>
        ))}
      </List>
    </div>
  )
}

TodoItems.propTypes = {
  items: PropTypes.array.isRequired,
  remove: PropTypes.func.isRequired,
  toggle: PropTypes.func.isRequired
}
