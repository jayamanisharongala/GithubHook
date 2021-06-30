import React from 'react'

const Repos =({repos,loading})=>{
    if(loading){
        return <h2>loading data...</h2>
    }
    return (
        <div>
            <ul>
                {repos.map((repo) => (
                    <li key ={repo.id}>
                       <p>Title :{repo.title}</p> 
                        <p>State :{repo.state}</p>
                        <p>Created_at :{repo.created_at}</p>
                        <p>Updated_at :{repo.updated_at}</p>
                        </li>
                ))}
            </ul>
            
        </div>
    )
}

export default Repos
