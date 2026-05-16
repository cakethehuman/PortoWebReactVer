import Navbar from './Navbar';

// Main hero page image
import ameProfile from './assets/ame.jpg';
import linkedinLogo from './assets/linkedin.svg';
import githubLogo from './assets/github.svg';

// Machine learning skills
import sklearnLogo from './assets/sklearn.svg'
import tensorflowLogo from './assets/tensorflow.svg'
import pytrochLogo from './assets/pytorch.svg'
import statsModelLogo from './assets/statsmodel.svg'
import openCVLogo from './assets/opencv.svg'
import tableauLogo from './assets/tableau.svg'
import numpyLogo from './assets/numpy.svg'
import pandasLogo from './assets/Pandas.svg'
import seabornLogo from './assets/seaborn.svg'

//
import fastApiLogo from './assets/FastApi.svg'
import raectLogo from './assets/react.svg'

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
              <img src="/assets/svg/js-official-svgrepo-com.svg" alt="JavaScript" className="w-25 h-25 object-contain" />
              <img src="/assets/svg/mongo-svgrepo-com.svg" alt="MongoDB" className="w-25 h-25 object-contain" />
              <img src="/assets/svg/mysql-logo-svgrepo-com.svg" alt="MySQL" className="w-25 h-25 object-contain" />
              <img src="/assets/svg/tailwind-svgrepo-com.svg" alt="Tailwind" className="w-25 h-25 object-contain" />
              <img src="/assets/svg/laravel-svgrepo-com.svg" alt="Laravel" className="w-25 h-25 object-contain" />
              <img src={raectLogo} alt="Laravel" className="w-25 h-25 object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="Exprerience">
        <div className="flex justify-center">
          <h1 className="text-white font-bold text-3xl w-60 h-15 py-2 text-center border-2 bg-gray-800 border-white rounded-full m-5 shadow-xl shadow-white">
            EXPERIENCE
          </h1>
        </div>
        <div className="flex justify-center">
          <div className="border border-3 border-white max-w-7xl w-full h-auto px-25 py-18 bg-gray-800 rounded-2xl shadow-lg shadow-white">
            <div className="flex flex-col gap-10">
              <div className="flex flex-row gap-10">
                <img src="/assets/img/shoushin logo.png" className="w-23 h-25" alt="Shoushin Logo" />
                <div className="flex flex-col">
                  <h1 className="text-white text-3xl">Seketaris 2</h1>
                  <p className="text-white text-sm">Nov 2025 - Now</p>
                  <p className="text-white mt-2">Pengalaman Proker : </p>
                  <ul className="list-disc list-inside ml-2">
                    <li className="text-white">Koor dana harukaze</li>
                    <li className="text-white">Anggota Humas</li>
                    <li className="text-white">Anggota Dana</li>
                    <li className="text-white">Anggota Dana</li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-row gap-10">
                <img src="/assets/svg/discord-icon-svgrepo-com.svg" className="w-23 h-25" alt="Discord" />
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
          <h1 className="text-white font-bold text-3xl w-60 h-15 py-2 text-center border-2 bg-gray-800 border-blue-500 rounded-full m-5 shadow-xl shadow-blue-500/50">
            PROJECTS
          </h1>
        </div>
        <div className="flex justify-center">
          <div className="border border-3 border-blue-700 max-w-7xl w-full h-auto px-25 py-18 bg-gray-800 rounded-2xl shadow-lg">
            <div className="grid grid-cols-3 gap-7">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="flex flex-col border border-3 border-blue-700 max-w-xl w-full h-auto px-5 py-5 bg-gray-800 rounded-2xl shadow-lg shadow-blue-500 gap-2">
                  <h1 className="text-white text-md font-bold">DeepLearning.AI TensorFlow Developer Specialization</h1>
                  <p className="text-white text-md text-xs">In this certification i learn alot about tensorflow like NLP,Timeseries, and CNN</p>
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

