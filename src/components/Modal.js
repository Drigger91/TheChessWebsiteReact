import React,{useState} from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from '@mui/material/Button';


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60vw",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 12,
  p: 4,
};

const BuyModal = ({ handleClose, open}) => {
  const [time, setTime] = useState(1);
  const [membership, setMembership] = useState();
  const handleChange = (event) => {
    setTime(event.target.value);
  };
  const handleChangeMembership = (event) => {
    setMembership(event.target.value);
  };
  const confirmation = ()=>{
    if(membership){
      window.alert('Payments page will be added with backend integration');
    }
    else{
      window.alert('Select a plan first!')
    }
  }
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h4" component="h3">
            Confirm Purchase <br />
            <p className="ptag">
              Check the list, after confirmation you will be redirected to
              payments page
            </p>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 3, ml: 1 }}>
            <h4>Membership : <Box sx={{ minWidth: 120, mt: 1 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Plan</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={membership}
                    label="Plan"
                    onChange={handleChangeMembership}
                  >
                    <MenuItem value={350}>Diamond</MenuItem>
                    <MenuItem value={300}>Platinum</MenuItem>
                    <MenuItem value={200}>Gold</MenuItem>
                  </Select>
                </FormControl>
              </Box></h4> <br />
            <h4>
              Plan :{" "}
              <Box sx={{ minWidth: 120, mt: 1 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Time</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={time}
                    label="Age"
                    onChange={handleChange}
                  >
                    <MenuItem value={1}>Monthly</MenuItem>
                    <MenuItem value={6}>Half-Yearly</MenuItem>
                    <MenuItem value={12}>Yearly</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </h4>{" "}
            <br />
            <h4>Effective Price : {time==1?membership:(time==6?5*membership:9*membership)} Rupees</h4> <br/>
            <Button variant="contained" onClick={confirmation}>Confirm</Button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default BuyModal;
