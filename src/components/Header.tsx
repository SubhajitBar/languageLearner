import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const styles = {
  color: "white",
  margin:"0.5rem",
  padding:"0.5rem",
  textDecoration:"none",
  backgroundColor:"#05a12e",
  borderRadius: "10%",
  boxShadow: "0px 2px 8px black"
};

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          textTransform={"uppercase"}
          marginRight={"auto"}
          variant="h5"
        >
          LangGo.
        </Typography>
        <Link to="/" style={styles} >Home</Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
