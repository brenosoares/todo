import stitches from "../../styles/theme";

const { styled } = stitches;

export const Container = styled("div", {
  backgroundColor: "$light",
  borderRadius: 8,
  display: "block",
  height: "100%",
  marginBottom: "$sm",
  padding: "$sm",
  width: "100%",
});

export const Header = styled("div", {
  alignItems: "center",
  borderBottom: "1px solid $grey",
  display: "flex",
  fontSize: 14,
  fontWeight: "bold",
  justifyContent: "space-between",
  height: "100%",
  padding: "$xxs",
  width: "100%",
  wordBreak: "break-all",
  "& > div": {
    marginLeft: 5,
  },
});

export const Description = styled("div", {
  display: "block",
  maxHeight: 200,
  fontSize: 12,
  overflow: "auto",
  overflowWrap: "anywhere",
  padding: "$xxs",
  whiteSpace: "break-spaces",
  width: "100%",
  "&>*": {
    textWrap: "wrap",
  },
  "&::-webkit-scrollbar": {
    width: 4,
  },
  "&::-webkit-scrollbar-track": {
    boxShadow: " inset 0 0 6px rgba(0, 0, 0, 0.2)",
  },

  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "$primary",
    borderRadius: 2,
    outline: "0px solid",
  },
});

export const DescriptionEmpty = styled(Description, {
  alignItems: "center",
  display: "flex",
  justifyContent: "center",
});

export const Footer = styled("div", {
  borderTop: "1px solid $grey",
  display: "flex",
  fontSize: 14,
  justifyContent: "space-between",
  height: "100%",
  padding: "$xxs",
  width: "100%",
});

export const DeleteAction = styled("div", {});

export const ButtonFooter = styled("div", {
  cursor: "pointer",
});

export const EditTitle = styled("input", {
  backgroundColor: "#e3e3e3",
  borderColor: "$primary",
  borderStyle: "solid",
  borderRadius: 4,
  borderWidth: 1,
  color: "$darkGrey",
  display: "block",
  fontSize: 14,
  padding: "$xxs",
  width: "100%",
  "&:focus": {
    boxShadow: "0px 0px 4px 0px rgba(110,65,192,0.7)",
    outlineColor: "$primary",
  },
});

export const EditTextArea = styled("textarea", {
  backgroundColor: "#e3e3e3",
  borderColor: "$primary",
  borderStyle: "solid",
  borderRadius: 4,
  borderWidth: 1,
  color: "$darkGrey",
  display: "block",
  fontSize: 16,
  height: 200,
  padding: "$xs",
  resize: "none",
  width: "100%",
});
