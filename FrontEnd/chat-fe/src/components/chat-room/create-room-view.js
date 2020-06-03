import React, { useState, useEffect } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { Chip } from '@material-ui/core';
import Select from 'react-select';
import { submitRoom, getUser } from './create-room-container';

export default function CreateRoom() {

    // const userOptions = [
    //     { value: 'chocolate', label: 'Chocolate' },
    //     { value: 'strawberry', label: 'Strawberry' },
    //     { value: 'vanilla', label: 'Vanilla' }
    // ];

    let [seleted, setSelected] = useState([]);
    let [userOptions, setUserOptions] = useState([]);

    useEffect(() => {
        async function loadUser() {
            const rs = await getUser();
            if (!rs.isSuccess) {
                console.log('Load user error: ', rs.message);
                return;
            }
            const user = rs.data;
            const userOptions = user.map((x) => ({value: x.user, label: x.user}));
            setUserOptions(userOptions);
        }

        loadUser();
    },[]);

    function handleChange(selectedOption) {
        setSelected(selectedOption);
    }

    async function submit(e) {
        e.preventDefault();
        const roomName = document.getElementById('roomName').value;
        const users = seleted.map(x => x.value);
        const room = { name: roomName, user: users };
        await submitRoom(room);
    }

    // const filterColors = (inputValue) => {
    //     return userOptions.filter(i =>
    //         i.label.toLowerCase().includes(inputValue.toLowerCase())
    //     );
    // };

    // function promiseOption(value) {
    //     return new Promise((rs) => {
    //         setTimeout(() => {
    //             rs(filterColors(value));
    //         }, 1000);
    //     })
    // }

    return (
        <div>
            <CssBaseline />
            <header>
                <h4>Create room</h4>
            </header>
            <main>
                <form>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={12}>
                            <TextField autoComplete="rname" name="roomName" fullWidth id="roomName"
                                label="Room Name" autoFocus />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <Select
                                // defaultValue={[userOptions[2], userOptions[3]]}
                                isMulti
                                name="colors"
                                options={userOptions}
                                // loadOptions={promiseOption}
                                className="basic-multi-select"
                                classNamePrefix="select"
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <Button type="submit" variant="contained" color="primary" onClick={async (e) => await submit(e)}> Create room </Button>
                        </Grid>
                    </Grid>
                </form>
            </main>
        </div>
    )
}