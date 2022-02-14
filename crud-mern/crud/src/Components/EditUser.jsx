import {
  Button,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { useState } from "react";
import { editUser, getUsers } from "../Service/api";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
const useStyle = makeStyles({
  container: {
    width: "50%",
    margin: "5% 0 0 25%",
    "& >*": {
      marginTop: 20,
    },
  },
});
const initialValue = {
  name: "",
  username: "",
  email: "",
  phone: "",
};
const EditUser = () => {
  const [user, setUser] = useState(initialValue);
  const { name, username, email, phone } = user;
  const { id } = useParams();
  const classes = useStyle();
  const navigate = useNavigate();

  useEffect(() => {
    loaduserData();
  }, []);
  const loaduserData = async () => {
    const res = await getUsers(id);
    setUser(res.data);
  };

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const editUserDetail = async () => {
    await editUser(id, user);
    navigate("/all");
  };

  return (
    <FormGroup className={classes.container}>
      <Typography varient="h4">Edit User</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="name" value={name} />
      </FormControl>
      <FormControl>
        <InputLabel>UserName</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="username"
          value={username}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="email" value={email} />
      </FormControl>
      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="phone" value={phone} />
      </FormControl>
      <Button
        variant="contained"
        color="primary"
        onClick={() => editUserDetail()}
      >
        Edit User
      </Button>
    </FormGroup>
  );
};
export default EditUser;
