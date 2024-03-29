import {projectApi} from '../ProjectApi';
import {Project} from '../Project';
import {
  LOAD_PROJECTS_REQUEST,
  LOAD_PROJECTS_SUCCESS,
  LOAD_PROJECTS_FAILURE,
  SAVE_PROJECT_REQUEST,
  SAVE_PROJECT_SUCCESS,
  SAVE_PROJECT_FAILURE,
  ProjectState,
} from './projectTypes';

export function loadProjects(page: number): any{
    return (dispatch: any) => {
       dispatch({type: LOAD_PROJECTS_REQUEST});
       return projectApi
       .get(page)
       .then(data => {
            dispatch({type: LOAD_PROJECTS_SUCCESS,
                payload: {projects: data, page}
            });
        })
        .catch(error => {
            dispatch({type: LOAD_PROJECTS_FAILURE, payload: error});
        });
    };
}

export function saveProject(
  project: Project
): any {
  return (dispatch: any) => {
    dispatch({ type: SAVE_PROJECT_REQUEST });
    return projectApi
      .put(project)
      .then((data: any) => {
        dispatch({ type: SAVE_PROJECT_SUCCESS, payload: data });
      })
      .catch((error: any) => {
        dispatch({ type: SAVE_PROJECT_FAILURE, payload: error });
      });
  };
}