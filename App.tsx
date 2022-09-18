import React from "npm:react";
import Child from "./Child.tsx";

const fetchMyIp = async () => {
  const resp = await fetch("ifconfig.me");
  const text = await resp.text();
  return text;
};

const genRandomNumber = () => {
  return Math.random();
};

export default () => {
  const [count, setCount] = React.useState(0);
  const [ip, setIp] = React.useState("unknown");
  const onClick = React.useCallback(() => setCount(count + 1), [
    count,
    setCount,
  ]);

  React.useEffect(async () => {
    setIp(await fetchMyIp());
  }, [ip, setIp]);

  const randomNumber = React.useMemo(() => {
    return genRandomNumber();
  });

  return (
    <div className="class-name-foo" onClick={onClick}>
      <p>Count is {count}</p>
      <p>IP is {ip}</p>
      <p>Random number is {randomNumber}</p>
      <p>
        <Child label="a" />
        <Child label="b" />
      </p>
    </div>
  );
};
