import React from "react";
import Icon from "../Icon";
import { Button } from "@mui/material";
import { IfMobile, IfDesktop } from "../../helpers/showBasedOnScreen";

interface Props {}

const Footer: React.FC<Props> = () => {
  const copyright = (
    <span>
      &copy; {new Date().getFullYear()} Robban&apos;s Swedish Language Corner
    </span>
  );
  const socialLinks = (
    <div>
      <span>Follow us on&nbsp;</span>
      <Button variant="contained" color="primary">
        <Icon type="facebook" />
      </Button>
      <Button variant="contained" color="primary">
        <Icon type="instagram" />
      </Button>
    </div>
  );

  return (
    <footer>
      <div className="w3-container w3-theme-l2 w3-padding-16 theme-swe theme-swe-footer">
        <IfMobile>
          {copyright}
          <br />
          {socialLinks}
        </IfMobile>
        <IfDesktop>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {copyright}
            {socialLinks}
          </div>
        </IfDesktop>
      </div>
    </footer>
  );
};

export default Footer;
