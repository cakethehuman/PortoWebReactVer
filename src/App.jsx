import Navbar from './Navbar';

// Main hero page image
import ameProfile from './assets/Profile/ame.jpg';
import linkedinLogo from './assets/Profile/linkedin.svg';
import githubLogo from './assets/Profile/github.svg';

// Machine learning skills
import sklearnLogo from './assets/MLskills/sklearn.svg'
import tensorflowLogo from './assets/MLskills/tensorflow.svg'
import pytrochLogo from './assets/MLskills/pytorch.svg'
import statsModelLogo from './assets/MLskills/statsmodel.svg'
import openCVLogo from './assets/MLskills/opencv.svg'
import tableauLogo from './assets/MLskills/tableau.svg'
import numpyLogo from './assets/MLskills/numpy.svg'
import pandasLogo from './assets/MLskills/Pandas.svg'
import seabornLogo from './assets/MLskills/seaborn.svg'

// web dev skills
import fastApiLogo from './assets/Webskills/FastAPI.svg'
import raectLogo from './assets/Webskills/react.svg'
import laravelLogo from './assets/Webskills/laravel.svg'
import mySQLLogo from './assets/Webskills/mysql.svg'
import mongodbLogo from './assets/Webskills/mongodb.svg'
import sqlLiteLogo from './assets/Webskills/sqlite.svg'
import jsLogo from './assets/Webskills/js.svg'
import tailwindLogo from './assets/Webskills/tailwind.svg'
import phpLogo from './assets/Webskills/php.svg'

// expreices fotos
import soushinLogo from './assets/Experience/shoushin.png'
// soushin
import nihongo1 from './assets/Experience/Shoushin/Nihongo2025/foto1.jpeg'

import dcLogo from './assets/Experience/discord.svg'

export default function App() {
  return (
    <>
      <Navbar></Navbar>
      {/* Home Section */}
      <section className="flex justify-center m-5" id="Home">
        <div className="flex flex-col items-center max-w-7xl w-full h-auto px-25 py-10 bg-gray-800 text-white border-3 border-yellow-200 rounded-2xl shadow-lg shadow-yellow-500">
          <img src={ameProfile} alt="Ame Pfp" className="center w-42 h-42 rounded-full" />
          <h1 className="text-3xl">Hello Im cake...👋</h1>
          <h1 className="text-xl m-1">A Data Nerd</h1>
          <div className="flex flex-row">
            <a href="https://www.linkedin.com/" className="m-2" target="_blank" rel="noreferrer">
              <img src={linkedinLogo} className="w-7 h-7" alt="LinkedIn" />
            </a>
            <a href="https://github.com/cakethehuman" className="m-2" target="_blank" rel="noreferrer">
              <img src={githubLogo} className="w-7 h-7" alt="GitHub" />
            </a>
          </div>
          <a href="https://drive.google.com/drive/folders/1MOEpcpJEQ2_d_RiriiEvaeyyVPjqlgf4" className="bg-gray-800 hover:bg-yellow-700/50 border-3 border-yellow-400 rounded-full px-7 py-2 m-1" target="_blank" rel="noreferrer">
            Download CV 
          </a>
        </div> 
      </section>  

      {/* Skills Section */}
      <section className="py-5" id="Skills">
        <div className="flex justify-center">
          <h1 className="text-white font-bold text-3xl w-50 h-15 py-2 text-center border-2 bg-gray-800 border-emerald-500 rounded-full m-5 shadow-lg shadow-emerald-500">
            SKILLS
          </h1>
        </div>
        <div className="flex justify-center gap-65">
          <h1 className="text-white font-bold text-3xl w-100 h-15 py-2 text-center border-2 bg-gray-800 border-emerald-500 rounded-full m-5 shadow-lg shadow-emerald-500">
            ML
          </h1>
          <h1 className="text-white font-bold text-3xl w-100 h-15 py-2 text-center border-2 bg-gray-800 border-emerald-500 rounded-full m-5 shadow-lg shadow-emerald-500">
            WEB
          </h1>
        </div>
        <div className="flex flex-row gap-30 w-full max-w-7xl mx-auto">
          <div className="flex-col border items-center max-w-2xl w-full h-auto bg-gray-800 border-5 border-emerald-500 rounded-3xl shadow-xl shadow-emerald-500/50">
            <div className="grid grid-cols-3 gap-7 my-15 px-5 place-items-center">
              <img src={sklearnLogo} alt="sklearn" className="w-25 h-25 object-contain" />
              <img src={tensorflowLogo} alt="tensorflow" className="w-25 h-25 object-contain" />
              <img src={pytrochLogo} alt="pytorch" className="w-25 h-25 object-contain" />
              <img src={statsModelLogo} alt="statsmodels" className="w-25 h-25 object-contain" />
              <img src={openCVLogo} alt="opencv" className="w-25 h-25 object-contain" />
              <img src={tableauLogo} alt="tableau" className="w-25 h-25 object-contain" />
              <img src={numpyLogo} alt="tableau" className="w-25 h-25 object-contain" />
              <img src={pandasLogo} alt="tableau" className="w-25 h-25 object-contain" />
              <img src={seabornLogo} alt="tableau" className="w-25 h-25 object-contain" />
            </div>
          </div>
          <div className="flex-col border items-center max-w-2xl w-full h-auto bg-gray-800 border-5 border-emerald-500 rounded-3xl shadow-xl shadow-emerald-500/50">
            <div className="grid grid-cols-3 gap-5 my-15 place-items-center">
              <img src={fastApiLogo} alt="FastAPI" className="w-25 h-25 object-contain" />
              <img src={raectLogo} alt="Laravel" className="w-25 h-25 object-contain" />
              <img src={laravelLogo} alt="Laravel" className="w-25 h-25 object-contain" />
              <img src={mySQLLogo} alt="MySQL" className="w-25 h-25 object-contain" />
              <img src={mongodbLogo} alt="Mongodb" className="w-25 h-25 object-contain" />
              <img src={sqlLiteLogo} alt="SQlite" className="w-25 h-25 object-contain" />
              <img src={jsLogo} alt="JavaScript" className="w-25 h-25 object-contain" />
              <img src={tailwindLogo} alt="Tailwind" className="w-25 h-25 object-contain" />
              <img src={phpLogo} alt="PHP" className="w-25 h-25 object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="Exprerience">
        <div className="flex justify-center">
          <h1 className="text-white font-bold text-3xl w-60 h-15 py-2 text-center border-2 bg-gray-800 border-white rounded-full m-7 shadow-xl shadow-white">
            EXPERIENCE
          </h1>
        </div>
        <div className="flex justify-center">
          <div className="border border-3 border-white max-w-7xl w-full h-auto px-25 py-18 bg-gray-800 rounded-2xl shadow-lg shadow-white">
            <div className="flex flex-col gap-10">
              <div className='border border-3 border-red-700 w-full h-auto px-10 py-5 bg-gray-800 rounded-2xl shadow-lg shadow-red-500 gap-2'>
              <div className="flex flex-row gap-10">
                <img src={soushinLogo} className="w-23 h-25" alt="Shoushin Logo" />
                <div className="flex flex-col">
                  <h1 className="text-white text-3xl">Sekretaris 2</h1>
                  <p className="text-white text-sm">Nov 2025 - Now</p>
                  <div className='flex justify-center'>
                    <p className="border border-2 rounded-full border-red-700 bg-red-700 w-60 px-5 py-2 text-center text-white text-bold m-2">Pengalaman Proker</p>
                  </div>
                    <div className="grid grid-cols-3 gap-7">
                        {[
                          { title: "Nihongo Contest 2025", 
                            job: "Anggota Dana",
                            desc : "Bantu mendapatkan dana untuk acara",
                            image: nihongo1 },
                          { title: "Nihongo Contest 2025", 
                            job: "Anggota Dana",
                            desc : "Bantu mendapatkan dana untuk acara",
                            image: nihongo1 },
                          { title: "Nihongo Contest 2025", 
                            job: "Anggota Dana",
                            desc : "Bantu mendapatkan dana untuk acara",
                            image: nihongo1 },
                        ].map((cert, index) => (
                          <div key={index} className="flex flex-col border border-3 border-red-700 max-w-xl w-full h-auto px-5 py-5 bg-gray-800 rounded-2xl shadow-lg shadow-red-500 gap-2">
                            <img src={cert.image} alt = {cert.image}/>
                            <h1 className="text-white text-md font-bold">{cert.title}</h1>
                            <p className="text-white text-sm font-bold">{cert.job}</p>
                            <p className="text-white text-xs">{cert.desc}</p>
                          </div>
                        ))}
                      </div>
                      </div>
                </div>
              </div>
              <div className="flex flex-row gap-10">
                <img src={dcLogo} className="w-23 h-25" alt="Discord" />
                <div className="flex flex-col"> 
                  <h1 className="text-white text-3xl">Discord Bot Dev</h1>
                  <p className="text-white text-sm">Nov 2024 - Feb 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="Projects">
        <div className="flex justify-center">
          <h1 className="text-white font-bold text-3xl w-60 h-15 py-2 text-center border-2 bg-gray-800 border-blue-500 rounded-full m-10 shadow-xl shadow-blue-500/50">
            PROJECTS
          </h1>
        </div>
        <div className="flex justify-center">
          <div className="border border-3 border-blue-700 max-w-7xl w-full h-auto px-25 py-18 bg-gray-800 rounded-2xl shadow-lg">
            <div className="grid grid-cols-3 gap-7">
              {[
                { title: "Project will be inserted when cake feel like doing it", 
                  desc: "Note : maybe" },
              ].map((cert, index) => (
                <div key={index} className="flex flex-col border border-3 border-blue-700 max-w-xl w-full h-auto px-5 py-5 bg-gray-800 rounded-2xl shadow-lg shadow-blue-500 gap-2">
                  <h1 className="text-white text-md font-bold">{cert.title}</h1>
                  <p className="text-white text-md text-xs">{cert.desc}</p>
                  <a href="#" className="text-white border border-1 w-30 rounded-full border-red-500 bg-red-500 hover:bg-red-500/70 hover:border-red-500/70 px-2 py-1 text-center">🔗Image link</a>
                </div>
              ))}
            </div>
          </div>  
        </div>
      </section>

      {/* Certification Section */}
      <section id="Certification">
        <div className="flex justify-center">
          <h1 className="text-white font-bold text-3xl w-60 h-15 py-2 text-center border-2 bg-gray-800 border-red-500 rounded-full m-5 shadow-xl shadow-red-500/50">
            Certification
          </h1>
        </div>
        <div className="flex justify-center">
          <div className="border border-3 border-red-700 max-w-7xl w-full h-auto px-25 py-18 bg-gray-800 rounded-2xl shadow-lg shadow-red-500">
            <div className="grid grid-cols-3 gap-7">
              {[
                { title: "DeepLearning.AI TensorFlow Developer Specialization", desc: "In this certification i learn alot about tensorflow like NLP,Timeseries, and CNN" },
                { title: "DeepLearning.AI Machine learning", desc: "Learn the core of machine learning from the maths" },
                { title: "Google Data Analytics", desc: "Learned about data analysis ecosystems" },
                { title: "MySkill SQL for Data Analytics", desc: "In this certification i learn alot about advanced SQL syntax" },
                { title: "Data analysis using real world data", desc: "Working through dirty datasets and engineering insights" },
                { title: "ISE! Academy: Data Science for Business 2025", desc: "Applying predictive modeling to business operations" }
              ].map((cert, index) => (
                <div key={index} className="flex flex-col border border-3 border-red-700 max-w-xl w-full h-auto px-5 py-5 bg-gray-800 rounded-2xl shadow-lg shadow-red-500 gap-2">
                  <h1 className="text-white text-md font-bold">{cert.title}</h1>
                  <p className="text-white text-md text-xs">{cert.desc}</p>
                  <a href="#" className="text-white border border-1 w-30 rounded-full border-red-500 bg-red-500 hover:bg-red-500/70 hover:border-red-500/70 px-2 py-1 text-center">🔗Image link</a>
                </div>
              ))}
            </div>      
          </div>
        </div>
      </section>
    </>
  );
}

