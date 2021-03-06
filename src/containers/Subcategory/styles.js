const styles = theme => ({
  center: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  imgContainer: {
    display: "flex",
    maxWidth: "45vw",
    overflowX: "auto",
    overflowY: "hidden"
  },
  img: {
    margin: theme.spacing.unit
  },
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: "none"
  },
});

export default styles;
