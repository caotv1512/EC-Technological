import React from "react";
import "./Header.scss";
import american from "../../../public/assets/imgs/logo/1.jpg";
import logo from "../../../public/assets/imgs/logo/mercado-suppermarket-store-logo-1633487728.jpg";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
export default function Header() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const listData = [
    {
      id: 1,
      name: "Trang chủ",
      span: "home",
    },
    {
      id: 2,
      name: "Cửa hàng",
      span: "store",
    },
    {
      id: 3,
      name: "Sản phẩm",
      span: "category",
    },
    {
      id: 4,
      name: "Liên hệ",
      span: "mail",
    },
  ];
  // menu
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {listData.map((text) => (
          <ListItem key={text.id} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <span class="material-symbols-outlined">{text.span}</span>
              </ListItemIcon>
              <ListItemText primary={text.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );
  // het menu
  return (
    <>
      <div className="header__container">
        <div className="header__container--left div-flex">
          <div className="header__phone div-flex div-border">
            <span className="material-symbols-outlined">call</span>
            <p>+84 123 456 789</p>
          </div>
          <div className="header__email div-flex">
            <span className="material-symbols-outlined">mail</span>
            <p>3vHkS@example.com</p>
          </div>
        </div>
        <div className="header__container--right div-flex">
          <div className="header__location div-flex div-border">
            <span className="material-symbols-outlined">map</span>
            <p>Hà Nội</p>
          </div>
          <div className="header__deliver div-flex div-border">
            <span className="material-symbols-outlined">local_shipping</span>
            <p>Vận chuyển</p>
          </div>
          <div className="header__compare div-flex div-border">
            <span className="material-symbols-outlined">compare_arrows</span>
            <p>So sánh</p>
          </div>
          <div className="header__wishList div-flex div-border">
            <span className="material-symbols-outlined">favorite</span>
            <p>Yêu thích</p>
          </div>
          <div className="header__language div-flex div-border">
            <div className="header__language--img">
              <img src={american} alt="" />
            </div>
            <p>English</p>
            <span className="material-symbols-outlined ">arrow_drop_down</span>
          </div>
          <div className="header__money div-flex">
            <span className="material-symbols-outlined">payments</span>
            <p>USD</p>
            <span className="material-symbols-outlined">attach_money</span>
            <span className="material-symbols-outlined">arrow_drop_down</span>
          </div>
        </div>
        <div className="header__responsive">
          <span
            className="material-symbols-outlined iconmenu"
            onClick={toggleDrawer(true)}
          >
            menu
          </span>
          <img src={logo} alt="" />
          <span class="material-symbols-outlined iconsearch">search</span>
        </div>
        <Drawer open={open} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>
      </div>
    </>
  );
}
