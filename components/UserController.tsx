import { TextField, Button } from "@mui/material";
import Link from "next/link";
import React from "react";

interface Props {}

const UserController = () => {
  return (
    <React.Fragment>
      <h4>Log in</h4>

      <form>
        <TextField
          id="username"
          label="Username"
          autoComplete="username"
          fullWidth
          className="w3-margin-bottom"
        />
        <TextField
          id="password"
          label="Password"
          type="password"
          autoComplete="current-password"
          fullWidth
        />

        <div className="w3-padding-16">
          <Button variant="contained">
            <span>Submit</span>
          </Button>
        </div>
      </form>

      <span>
        New user?{" "}
        <Link href="/register">
          <a>Click here to register.</a>
        </Link>
      </span>
    </React.Fragment>
  );
};

export default UserController;
