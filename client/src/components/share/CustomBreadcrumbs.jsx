import { Link, Breadcrumbs } from "@mui/material";
import { useLocation } from "react-router-dom"

const CustomBreadcrumbs = ({ name }) => {
    const { pathname } = useLocation();
    const pathnames = pathname?.split("/").filter((x) => x);

    return (
        <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
                home
            </Link>
            {
                pathnames?.map(
                    (_pathname) => {
                        const routeTo = `/${pathnames.slice(0, pathnames.indexOf(_pathname) + 1).join("/")}`;
                        const sectionName = name && _pathname.includes('_')
                            ? name.toLocaleLowerCase()
                            : (
                                _pathname.includes('banios')
                                    ? "baños"
                                    : _pathname.split("_").join(" ").toLocaleLowerCase()
                            );

                        return (
                            <Link underline="hover" color="inherit" href={routeTo} key={sectionName}>
                                {sectionName}
                            </Link>
                        )
                    }
                )
            }
        </Breadcrumbs>
    )
 }
 
 export default CustomBreadcrumbs