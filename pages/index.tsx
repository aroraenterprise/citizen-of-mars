import { makeStyles } from '@material-ui/core';
import React from 'react';

export default () => {
  const classes = useStyles({});
  return (
    <>
      <iframe
        className={classes.iframe}
        id="typeform-full"
        width="100%"
        height="100%"
        frameBorder="0"
        allow="camera; microphone; autoplay; encrypted-media;"
        src="https://form.typeform.com/to/OVMXtbRr"></iframe>
      <script type="text/javascript"
        src="https://embed.typeform.com/embed.js"></script>
    </>
  );
}

const useStyles = makeStyles({
  iframe: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    border: 0,
  }
});