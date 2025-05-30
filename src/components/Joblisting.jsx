import React, { useEffect, useState } from 'react'

import JoblistingSingle from './JoblistingSingle'
const Joblisting = ({isHome}) => {
  const[jobs, setJobs]=useState([]);
  const[loading,setLoading] =useState(true);
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch('http://localhost:8000/jobs');
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.log('Error fetching data',error);
      }finally{
        setLoading(false);
      }
      
    }

    fetchJobs();
  }, []);
  
    // console.log(jobs)
    const joblisting= isHome ? jobs.slice(0,3): jobs;
  return (
    <div>
        {/* <!-- Browse Jobs --> */}
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ?'Recent Jobs' :'Browse Jobs'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           {
            loading ? (<h2>LOADING...</h2>): (
              <>
               {jobs.map((job) => (
                <JoblistingSingle key={job.id} job={job}/>
                    
               ))}
              </>
             
            )
           }
            
          
          
        
         
        </div>
      </div>
    </section>
    </div>
  )
}

export default Joblisting