import stitches from "../../styles/theme";

const { styled } = stitches;

export const Container = styled("div", {
  backgroundColor: "$grey",
  borderRadius: 8,
  display: "flex",
  overflow: "auto",
  padding: "$sm",
  width: "100%",
});

export const Column = styled("div", {
  display: "block",
  height: "100%",
  overflow: "auto",
  marginRight: "$sm",
  padding: "$sm",
  width: "100%",
  "&:last-child": {
    marginRight: 0,
  },
});

export const ColumnHeader = styled("div", {
  backgroundColor: "$primary",
  borderRadius: 8,
  boxShadow: "1px 1px 5px 1px rgba(0,0,0,0.2)",
  color: "$light",
  display: "block",
  fontSize: "$md",
  fontWeight: "bold",
  marginBottom: "$sm",
  padding: "$sm",
  width: "100%",
});

export const ColumnBody = styled("div", {
  display: "block",
  height: "100%",
  width: "100%",
});
