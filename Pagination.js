import React from 'react'

const Pagination =({reposPerPage,totalRepos,paginate}) => {
    const pageNumbers =[];
    for(let i=1 ; i<=Math.ceil(totalRepos/reposPerPage);i++){
        pageNumbers.push(i);
    }
    return (
        <div >
            <ul>{pageNumbers.map(number => (
                <li style={{display:'inline-block',border:'1px solid black',padding:'1%'}}
                    key={number}>
                   <a onClick={() => paginate(number)} href='!#'>{number}</a> 
                </li>
            ))}</ul>
            
        </div>
    )
}

export default Pagination
