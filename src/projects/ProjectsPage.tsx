import React, {useEffect} from 'react';
import ProjectList from './ProjectList';
import {AppState} from '../hooks/redux/store';
import {useAppSelector, useAppDispatch} from '../hooks/redux/store';
import {loadProjects} from './state/projectActions';
import {ProjectState} from './state/projectTypes';
import {AnyAction} from 'redux';
import {ThunkDispatch} from 'redux-thunk';

function ProjectsPage(){

    const loading = useAppSelector((appState: AppState) => {
    console.log(appState);
    return appState.projectState.loading;});
    const projects = useAppSelector((appState: AppState) => appState.projectState.projects);
    const error = useAppSelector((appState: AppState) => appState.projectState.error);
    const currentPage = useAppSelector((appState: AppState) => appState.projectState.page);
    const dispatch = useAppDispatch();

    const handleMoreClick = () => {
        dispatch(loadProjects(currentPage+1));
    };

    useEffect(()=>{
        dispatch(loadProjects(1));
    },[dispatch]);

    return <>
    <h1>Projects</h1>
    {error && (
        <div className="row">
          <div className="card large error">
            <section>
              <p>
                <span className="icon-alert inverse "></span>
                {error}
              </p>
            </section>
          </div>
        </div>
        )}
    <ProjectList projects={projects} />
    {!loading && !error && (
    <button onClick={handleMoreClick}>More...</button>
    )}
    {loading && (
    <div className="center-page">
      <span className="spinner primary"></span>
      <p>Loading...</p>
    </div>
    )}
    </>;
}

export default ProjectsPage;