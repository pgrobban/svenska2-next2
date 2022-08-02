import React from "react";
import { Button } from "@mui/material";
import Icon from "../Icon";
import classnames from "classnames";
import { IfDesktop, IfMobile } from "../../helpers/showBasedOnScreen";
import Link from "next/link";
import GlobalSearch from "../GlobalSearch";

interface Props {
  isSideBarOpen: boolean;
  setIsSideBarOpen: (sideBarOpen: boolean) => void;
  location?: string;
}

const TopMenu: React.FC<Props> = (props) => {
  const { isSideBarOpen, setIsSideBarOpen, location } = props;

  return (
    <div className="w3-top w3-bar w3-top w3-left-align w3-large theme-swe theme-swe-top-nav">
      <IfMobile>
        <Button
          className="w3-bar-item w3-right w3-large theme-swe"
          onClick={(e) => setIsSideBarOpen(!isSideBarOpen)}
        >
          <Icon type="menu" />
        </Button>
      </IfMobile>

      <Link href="/">
        <a id="logo" className="w3-bar-item w3-button">
          Robban&apos;s Swedish Corner
        </a>
      </Link>
      <IfDesktop>
        <Link href="/lessons">
          <a
            className={classnames([
              "w3-bar-item",
              { "theme-swe-active": location === "lessons" },
            ])}
          >
            Textbook
          </a>
        </Link>
        <Link href="/bites">
          <a
            className={classnames([
              "w3-bar-item",
              { "theme-swe-active": location === "bites" },
            ])}
          >
            Language bites
          </a>
        </Link>
        <Link href="/forums">
          <a
            className={classnames([
              "w3-bar-item",
              { "theme-swe-active": location === "forums" },
            ])}
          >
            Forums
          </a>
        </Link>
        <Link href="/news">
          <a
            className={classnames([
              "w3-bar-item",
              { "theme-swe-active": location === "news" },
            ])}
          >
            News
          </a>
        </Link>
        <Link href="/about">
          <a
            className={classnames([
              "w3-bar-item",
              { "theme-swe-active": location === "about" },
            ])}
          >
            About &amp; Contact
          </a>
        </Link>
      </IfDesktop>

      <GlobalSearch classnames={'w3-hide-small w3-right'} />

      <div className="w3-clear" />
    </div>
  );
};

export default TopMenu;
