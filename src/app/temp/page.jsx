import React from "react";

export const dynamic = "force-dynamic";

// export const revalidate = 24 *

const Temp = () => {
  const date = new Date().getTime();
  return <div>{JSON.stringify(date)}</div>;
};

export default Temp;
