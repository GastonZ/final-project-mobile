import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { BASE_URL } from '../../src/api/url'

const getCars = createAsyncThunk('getCars', async () => {
    try {
        const res = await axios.get(
            `${BASE_URL}cars`
        )
        return {
            cars : res.data.response
        }
    } catch (error) {
        console.log(error);
        return {
            payload: "Error"
        }
    }
})

const carsActions = {
    getCars
}

export default carsActions