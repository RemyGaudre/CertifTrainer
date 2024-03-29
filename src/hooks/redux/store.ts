import {ProjectState} from '../../projects/state/projectTypes';
import {initialProjectState, projectReducer} from '../../projects/state/projectReducer';
import {configureStore} from '@reduxjs/toolkit';
import {useSelector, useDispatch} from 'react-redux';

export interface AppState{
    projectState: ProjectState;
}

export const initialAppState: AppState = {
    projectState: initialProjectState
};

export const store = configureStore({reducer : {projectState: projectReducer}});
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<AppState>();