import dynamic from "next/dynamic";
import React from "react";

// combine this wrapper with atomWithStorage to use localStorage in NextJS

const NonSSRWrapper = (props) => (
  <React.Fragment>{props.children}</React.Fragment>
);
export default dynamic(() => Promise.resolve(NonSSRWrapper), {
  ssr: false,
});
