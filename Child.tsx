export default (props: { label: string }) => {
  return (
    <div style={{ outline: "1px dashed", padding: "5px", margin: "5px" }}>
      <p>This is a child component</p>
      <p>Label is {props.label}</p>
    </div>
  );
};
