
import React ,{ useState , useEffect } from 'react'
import Repos from './Repos'
import Pagination from './Pagination'
import axios from "axios"
function Github() {
    const [repos,setRepos] = useState([])
    const [loading,setLoading] = useState(false)
    const [currentPage,setCurrentPage]=useState(1)
    const [reposPerPage ,setReposPerPage]=useState(5)
        useEffect(() => {
            const fetchRepos = async () => {
                setLoading(true)
                const res =await axios.get('https://api.github.com/repos/octocat/Hello-World/issues')
                setRepos(res.data)
                setLoading(false)
            }
            fetchRepos()
        },[])
       const indexOfLastRepo =currentPage * reposPerPage;
       const indexOfFirstRepo =indexOfLastRepo - reposPerPage;
       const currentRepos = repos.slice( indexOfFirstRepo,indexOfLastRepo)
       const paginate = (pageNumbers) => setCurrentPage(pageNumbers)   
    return (
        <div>
            <h1>Github Issues Page</h1>
            <Repos repos={currentRepos} loading={loading}/>
            <Pagination reposPerPage={reposPerPage} totalRepos={repos.length} paginate={paginate}/>
        </div>
    )
}

export default Github
