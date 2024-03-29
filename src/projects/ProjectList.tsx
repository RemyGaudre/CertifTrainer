import React, {useState} from 'react';
import {Project} from './Project';
import ProjectCard from './ProjectCard';
import ProjectForm from './ProjectForm';

interface ProjectListType{
    projects : Project[];
}

export default function ProjectList({projects}: ProjectListType){

    const [projectBeingEdited, setProjectBeingEdited] = useState({});

    const handleEdit = (project: Project) =>{
        setProjectBeingEdited(project);
    }

    const handleCancel = () => {
        setProjectBeingEdited({});
    }

    return (
        <div className="row">
            {projects.map(
                (project) =>(
                <div key={project.id} className="cols-sm">
                    {projectBeingEdited === project ?
                    (<ProjectForm onCancel={handleCancel} project={project}/>):
                    <ProjectCard project={project} onEdit={handleEdit}></ProjectCard>}
                </div>
                ))}
        </div>
    );
}
