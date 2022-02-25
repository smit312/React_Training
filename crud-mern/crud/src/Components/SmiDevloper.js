import { makeStyles } from "@material-ui/core";
const useStyle = makeStyles({
  text: {
    margin: "200px 0 0 35%",
  },
});
const SmitDevloper = () => {
  const classes = useStyle();
  return (
    <>
      <h1 className={classes.text}> This is a home page </h1>
    </>
  );
};
export default SmitDevloper;
