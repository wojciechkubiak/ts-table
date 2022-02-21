import { createAsyncThunk } from '@reduxjs/toolkit';

import { AppThunkApiConfig } from '../store';
import { WorkData } from "../../models/Work";


export const fetchWorkData = createAsyncThunk<
    WorkData[],
    void,
    AppThunkApiConfig
>('fetchWorkData', async (_, { extra }) =>
    extra.workService.getData(),
);