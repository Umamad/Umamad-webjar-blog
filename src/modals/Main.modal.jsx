import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#FAFAFA",
  //   border: "2px solid #000",
  //   boxShadow: 24,
  //   p: 4,
};

const MainModal = ({ open, handleClose, styles, children, ...restOfProps }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
      {...restOfProps}
    >
      <Fade in={open}>
        <Box sx={{ ...style, ...styles }}>{children}</Box>
      </Fade>
    </Modal>
  );
};

export default MainModal;
