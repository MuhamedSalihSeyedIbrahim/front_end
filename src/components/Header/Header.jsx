import React from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import routes from "../../route";
import History from "../../configs/History";

export default function Header(props) {
  const { headerTabHighLightValue } = props;
  const [value, setValue] = React.useState(
    headerTabHighLightValue ? headerTabHighLightValue : 0
  );

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const onClick = (path, logout = false) => {
    if (logout) {
      //logout Operation
    }
    History.push(path);
  };

  return (
    <Paper square>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
      >
        {routes.map(({ path, name, access }, index) =>
          access === "PRIVATE" ? (
            <Tab
              label={name}
              key={index}
              color="inherit"
              path={path}
              onClick={(e) => onClick(path)}
            />
          ) : (
            ""
          )
        )}

        <Tab
          style={{ display: "flex", marginLeft: "auto" }}
          label={"logout"}
          key={routes.length + 1}
          color="inherit"
          path={"/SignIn"}
          onClick={(e) => onClick("/SignIn", true)}
        />
      </Tabs>
    </Paper>
  );
}
