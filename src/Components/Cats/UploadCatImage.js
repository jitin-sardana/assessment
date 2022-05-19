import { useState } from 'react';
import axios from 'axios';
import { Button, Grid } from '@mui/material';

const UploadCatImage = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const fileChangedHandler = (event) => {
        setSelectedFile(event.target.files[0]);
    }
    const upload = async () => {
        console.log(selectedFile);
        const formData = new FormData()
        formData.append('file', selectedFile);
        formData.append("sub_id", "");
        await axios({
            method: 'POST',
            url: 'https://api.thecatapi.com/v1/images/upload',
            data: formData,
            headers: { 'Content-Type': 'multipart/form-data', 'x-api-key': 'd0dda002-a6b0-4f93-be7a-a334e1322830' },
        }).then(function (response) {
            console.log(response);
        }).catch(function (response) {
            console.log(response);
        });
    }

    return (<Grid sx={{marginTop:'20px'}}>
        <input accept="image/*" type="file" onChange={(e) => fileChangedHandler(e)} />
        <Button variant='outlined' onClick={() => upload()}>Upload </Button>
    </Grid>
    )
};
export default UploadCatImage;