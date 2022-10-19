import { Fragment } from "react";
import classes from "./layout.module.css";

function Layout(props) {
    <Fragment>
        <nav className={classes.nav}>
            <img src="/images/onDark.png" alt="Logo" />
        </nav>
        <main>{props.children}</main>
    </Fragment>
}

export default Layout;