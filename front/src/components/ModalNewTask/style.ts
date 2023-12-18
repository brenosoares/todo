import stitches from "../../styles/theme";

const { styled } = stitches;

export const Overflow = styled("div", {
  alignItems: "center",
  backgroundColor: "rgba(0,0,0,0.3)",
  display: "flex",
  height: "100%",
  left: 0,
  justifyContent: "center",
  position: "absolute",
  top: 0,
  width: "100%",
});

export const ModalContainer = styled("div", {
  backgroundColor: "$light",
  borderRadius: 10,
  display: "block",
  minWidth: 350,
  maxWidth: 500,
  padding: "$sm",
  width: "100%",
});

export const ModalHeader = styled("div", {
  borderBottom: "1px solid grey",
  display: "flex",
});

export const ModalTitle = styled("h3", {
  margin: 0,
  width: "100%",
});

export const ModalClose = styled("div", {
  cursor: "pointer",
  width: 24,
});

export const ModalBody = styled("div", {
  display: "block",
  padding: "$xs",
});

export const FormInputContainer = styled("label", {
  display: "block",
  marginBottom: 20,
  width: "100%",
  "&>span": {
    color: "$text",
    display: "block",
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: "$xxs",
    width: "100%",
  },
  "&>input": {
    backgroundColor: "#e3e3e3",
    borderColor: "$primary",
    borderStyle: "solid",
    borderRadius: 4,
    borderWidth: 1,
    color: "$darkGrey",
    display: "block",
    fontSize: 16,
    padding: "$xs",
    width: "100%",
  },
  "&>input:focus": {
    boxShadow: "0px 0px 4px 0px rgba(110,65,192,0.7)",
    outlineColor: "$primary",
  },
  "&>textarea": {
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
  },
});
