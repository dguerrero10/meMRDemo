import classes from './HeaderWrapper.module.css';

export default function HeaderWrapper({children}) {
    return <div className={classes["header-wrapper"]}>{children}</div>
}